import { useParams } from "react-router";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../component/spinner/Loader";
import { useRef } from "react";
import useAuth from "../../hook/useAuth";

const DetailsPage = () => {
  const { id } = useParams();
  const modalRef = useRef(null);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: ticket, isLoading } = useQuery({
    queryKey: ["ticket", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/ticket/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  const handleBook = async (e) => {
    e.preventDefault();

    const quantity = Number(e.target.quantity.value);

    if (!quantity || quantity <= 0) {
      return toast.warning("Please enter a valid quantity");
    }

    if (quantity > ticket.ticketQuantity) {
      return toast.warning("Not enough tickets available!");
    }

    const bookingData = {
      ticketId: ticket._id,
      ticketTitle: ticket.ticketTitle,
      image: ticket.image,
      from: ticket.from,
      to: ticket.to,
      transportType: ticket.transportType,
      departureDateTime: ticket.departureDateTime,
      unitPrice: ticket.price,
      bookingQuantity: quantity,
      totalPrice: quantity * ticket.price,
      buyerEmail: user?.email,
      buyerName: user?.displayName,
      status: "pending",
      createdAt: new Date(),
      vendorEmail: ticket?.vendorEmail,
    };

    try {
      const res = await axiosSecure.post(`/booking/${ticket._id}`, bookingData);
      if (res.data.insertedId) {
        toast.success("Booking successful!");
        modalRef.current.close();
      }
    } catch (error) {
      toast.error("Booking failed!", error);
      console.log(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow my-10">
      <img
        src={ticket.image}
        alt={ticket.ticketTitle}
        className="w-full h-64 object-cover rounded mb-6"
      />

      <h2 className="text-2xl font-bold mb-2">{ticket.ticketTitle}</h2>

      <p>
        <strong>From:</strong> {ticket.from}
      </p>
      <p>
        <strong>To:</strong> {ticket.to}
      </p>
      <p>
        <strong>Transport:</strong> {ticket.transportType}
      </p>
      <p>
        <strong>Price:</strong> ${ticket.price}
      </p>
      <p>
        <strong>Available:</strong> {ticket.ticketQuantity}
      </p>
      <p>
        <strong>Departure:</strong>{" "}
        {new Date(ticket.departureDateTime).toLocaleString()}
      </p>

      <button
        onClick={() => modalRef.current.showModal()}
        className="btn btn-primary mt-4"
      >
        Book Now
      </button>

      {/* Modal */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <form onSubmit={handleBook} className="mt-6">
            <input
              type="number"
              name="quantity"
              min="1"
              max={ticket.ticketQuantity}
              className="input input-bordered w-full mb-4"
              placeholder="Enter ticket quantity"
              required
            />

            <button className="btn btn-primary w-full">Confirm Booking</button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default DetailsPage;
