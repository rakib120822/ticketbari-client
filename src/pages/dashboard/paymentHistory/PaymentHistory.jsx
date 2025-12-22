import React from "react";
import useAxiosSEcure from "../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../component/spinner/Loader";
import useAuth from "../../../hook/useAuth";
const PaymentHistory = () => {
  const axiosSecure = useAxiosSEcure();
  const { user } = useAuth();

  // Fetch payments
  const { isLoading, data: payments } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  if (isLoading) return <Loader />;

  if (!payments || payments.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold">No payments found.</p>
      </div>
    );
  }



  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Payment History</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Transaction ID</th>
              <th>Ticket Title</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Paid At</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <td>{index + 1}</td>
                <td>{payment?.transactionId}</td>

                <td>{payment?.ticketTitle}</td>
                <td>{payment?.amount}</td>
                <td>
                  <span
                    className={`badge ${
                      payment?.status === "paid"
                        ? "badge-success"
                        : "badge-warning"
                    }`}
                  >
                    {payment?.status}
                  </span>
                </td>
                <td>{new Date(payment.paidAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
