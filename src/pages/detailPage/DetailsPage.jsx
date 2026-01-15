import { useParams } from "react-router";
import { toast } from "react-toastify";

import { useQuery } from "@tanstack/react-query";
import Loader from "../../component/spinner/Loader";
import { useRef } from "react";
import useAuth from "../../hook/useAuth";
import useAxios from "../../hook/useAxios";
import useAxiosSEcure from "../../hook/useAxiosSecure";

const DetailsPage = () => {
  const { id } = useParams();
  const modalRef = useRef(null);
  const { user } = useAuth();
  const axiosInstance = useAxios();
  const axiosSecure = useAxiosSEcure();

  const { data: ticket, isLoading } = useQuery({
    queryKey: ["ticket", id],
    queryFn: async () => {
      const res = await axiosInstance.get(`/ticket/${id}`);
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
      toast.error("Booking failed! Please login", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 my-12">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        <img
          src={ticket.image}
          alt={ticket.ticketTitle}
          className="w-full h-80 object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="p-6 text-white">
            <h1 className="text-3xl font-bold">{ticket.ticketTitle}</h1>

            <div className="flex gap-2 mt-2">
              <span className="badge badge-info">{ticket.transportType}</span>
              {ticket.advertised && (
                <span className="badge badge-success">Advertised</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Left: Details */}
        <div className="md:col-span-2 bg-base-100 rounded-xl shadow shadow-primary p-6">
          <h2 className="text-xl font-semibold mb-4">Trip Details</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <p>
              📍 <strong>From:</strong> {ticket.from}
            </p>
            <p>
              📍 <strong>To:</strong> {ticket.to}
            </p>
            <p>
              ⏰ <strong>Departure:</strong>{" "}
              {new Date(ticket.departureDateTime).toLocaleString()}
            </p>
            <p>
              🎟 <strong>Available:</strong> {ticket.ticketQuantity}
            </p>
            <p>
              ✨ <strong>Perks:</strong> {ticket.perks || "N/A"}
            </p>
          </div>
        </div>

        {/* Right: Booking Card */}
        <div className="bg-base-100 rounded-xl shadow shadow-primary p-6 h-fit">
          <h3 className="text-lg font-semibold mb-2">Booking Summary</h3>

          <p className="text-2xl font-bold mb-4">
            ${ticket.price}
            <span className="text-sm font-normal text-gray-500"> / ticket</span>
          </p>

          <button
            onClick={() => modalRef.current.showModal()}
            className="btn btn-primary w-full"
          >
            Book Now
          </button>

          <p className="text-xs text-gray-500 mt-3 text-center">
            Secure checkout • Instant confirmation
          </p>
        </div>
      </div>

      {/* Modal */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h3 className="font-semibold text-lg mb-4">Book Your Ticket</h3>

          <form onSubmit={handleBook}>
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
