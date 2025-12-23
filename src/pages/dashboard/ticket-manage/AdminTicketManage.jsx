import { useQuery } from "@tanstack/react-query";
import useAxiosSEcure from "../../../hook/useAxiosSecure";
import { toast } from "react-toastify";
import Loader from "../../../component/spinner/Loader";
import { FaCheck, FaTimes } from "react-icons/fa";

const AdminTicketManage = () => {
  const axiosSecure = useAxiosSEcure();

  const {
    data: tickets = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["admin-tickets"],
    queryFn: async () => {
      const res = await axiosSecure.get("/ticket");
      return res.data.tickets;
    },
  });

  const handleAction = async (id, action) => {
    try {
      const res = await axiosSecure.patch(
        `/tickets/${id}?adminApproved=${action}`
      );

      if (res.data.modifiedCount) {
        toast.info(`Ticket ${action}ed successfully`);
        refetch();
      }
    } catch (error) {
      toast.error("Action failed");
      console.error(error);
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🎟️ Manage Tickets</h2>

      <div className="overflow-x-auto  rounded-xl shadow">
        <table className="table table-zebra">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Route</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Vendor</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={ticket._id}>
                <td>{index + 1}</td>

                <td>
                  <img
                    src={ticket.image}
                    alt="ticket"
                    className="w-14 h-14 rounded object-cover"
                  />
                </td>

                <td className="font-semibold">{ticket.ticketTitle}</td>

                <td>
                  {ticket.from} → {ticket.to}
                </td>

                <td>${ticket.price}</td>

                <td>{ticket.ticketQuantity}</td>

                <td>{ticket.vendorEmail}</td>

                <td>
                  {ticket.adminApproved === "approve" ? (
                    <span className="badge badge-success">Approved</span>
                  ) : (
                    <span className="badge badge-warning">Pending</span>
                  )}
                </td>

                <td className="flex gap-2">
                  <button
                    disabled={ticket.adminApproved === "approve"}
                    onClick={() => handleAction(ticket._id, "approve")}
                    className="btn  btn-primary btn-sm"
                  >
                    <FaCheck />
                  </button>

                  <button
                    onClick={() => handleAction(ticket._id, "reject")}
                    className="btn btn-sm btn-error"
                  >
                    <FaTimes />
                  </button>
                </td>
              </tr>
            ))}

            {tickets.length === 0 && (
              <tr>
                <td colSpan="9" className="text-center py-6">
                  No tickets found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTicketManage;
