import { useParams } from "react-router";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../component/spinner/Loader";

const DetailsPage = () => {
  const { id } = useParams();

  const axiosSecure = useAxiosSecure();
  const { data: ticket = {} } = useQuery({
    queryKey: ["ticket", id],
    queryFn: async () => {
      const res = await axiosSecure(`/ticket/${id}`);
      return res.data;
    },
  });
  const handleBook = () => {
    toast.info("booking successful");
  };

  if (!ticket) {
    return <Loader />;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow my-10">
      <img
        src={ticket.image}
        alt={ticket.ticketTitle}
        className="w-full h-64 object-cover rounded mb-6"
      />
      <h2 className="text-2xl font-bold mb-2">{ticket.ticketTitle}</h2>
      <p className="text-gray-700 mb-1">
        <strong>From:</strong> {ticket.from}
      </p>
      <p className="text-gray-700 mb-1">
        <strong>To:</strong> {ticket.to}
      </p>
      <p className="text-gray-700 mb-1">
        <strong>Transport Type:</strong> {ticket.transportType}
      </p>
      <p className="text-gray-700 mb-1">
        <strong>Price:</strong> ${ticket.price}
      </p>
      <p className="text-gray-700 mb-1">
        <strong>Quantity Available:</strong> {ticket.ticketQuantity}
      </p>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-700 mb-1">
            <strong>Perks:</strong> {ticket.perks}
          </p>
          <p className="text-gray-700 mb-1">
            <strong>Departure:</strong>{" "}
            {new Date(ticket.departureDateTime).toLocaleString()}
          </p>
        </div>
        <button onClick={handleBook} className="btn btn-primary">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;
