import React from "react";
import { useQuery } from "@tanstack/react-query";

import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import useAxiosSEcure from "../../../hook/useAxiosSecure";
import { toast } from "react-toastify";

const AdminAdvertisePage = () => {
  const axiosSecure = useAxiosSEcure();

  // Fetch all admin-approved tickets
  const {
    data: tickets = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["adminTickets"],
    queryFn: async () => {
      const res = await axiosSecure.get("/ticket?adminApproved=approve");
      return res.data.tickets;
    },
  });

  const handleToggleAdvertise = async (ticket) => {
    try {
      const res = await axiosSecure.patch(`/ticket/${ticket._id}/advertise`, {
        advertised: !ticket.advertised, // toggle boolean
      });

      if (res.data.modifiedCount) {
        toast.success(
          !ticket.advertised
            ? "Ticket advertised successfully"
            : "Ticket unadvertised successfully"
        );
        refetch();
      }
    } catch (error) {
      console.error(error);
      // THIS is why you are seeing the error
      if (error.response?.status === 400) {
        toast.error(error.response.data.message); // 👈 show backend message
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  if (isLoading) {
    return <div className="text-center mt-10">Loading tickets...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Ticket Advertisement</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Ticket Title</th>
              <th>From</th>
              <th>To</th>
              <th>Price</th>
              <th>Advertise</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={ticket._id}>
                <td>{index + 1}</td>
                <td>{ticket.ticketTitle}</td>
                <td>{ticket.from}</td>
                <td>{ticket.to}</td>
                <td>${ticket.price}</td>
                <td>
                  <button
                    onClick={() => handleToggleAdvertise(ticket)}
                    className="text-xl"
                  >
                    {ticket.advertised ? (
                      <FaToggleOn className="text-green-500" />
                    ) : (
                      <FaToggleOff className="text-gray-400" />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAdvertisePage;
