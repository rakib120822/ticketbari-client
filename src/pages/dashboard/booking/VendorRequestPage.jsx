import { useQuery } from "@tanstack/react-query";
import useAxiosSEcure from "../../../hook/useAxiosSecure";
import Loader from "../../../component/spinner/Loader";
import { toast } from "react-toastify";

const VendorRequestPage = () => {
  const axiosSecure = useAxiosSEcure();

  // Fetch vendor requests / tickets
  const {
    isLoading,
    data: requests,
    refetch,
  } = useQuery({
    queryKey: ["vendor-requests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/booking-ticket"); // your backend endpoint
      return res.data;
    },
  });

  const handleAction = async (id, action) => {
    try {
      const res = await axiosSecure.patch(`/booking/${id}?status=${action}`);
      console.log("this is modifided respponse : ", res);
      if (res.data.modifiedCount) {
        toast.info(`successfully ${action}`);
        // Refresh data after action
        refetch();
      }
    } catch (error) {
      console.error("Action failed:", error);
    }
  };

  if (isLoading) return <Loader />;

  if (!requests || requests.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold">No requests found.</p>
      </div>
    );
  }

  return (
    <div className="p-4 min-h-screen bg-base-200">
      <h2 className="text-2xl font-bold mb-4">Vendor Requests</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Ticket Title</th>
              <th>Quantity</th>
              <th>From</th>
              <th>To</th>
              <th>Price</th>
              <th>Buyer Email</th>
              <th>Action</th> {/* Action column */}
            </tr>
          </thead>
          <tbody>
            {requests.map((req, index) => (
              <tr key={req._id}>
                <td>{index + 1}</td>
                <td>{req.ticketTitle}</td>
                <td>{req.bookingQuantity}</td>
                <td>{req.from}</td>
                <td>{req.to}</td>
                <td>{req.totalPrice}</td>
                <td>{req.buyerEmail}</td>
                <td className="space-x-2">
                  {req.status === "pending" ? (
                    <>
                      <button
                        className="btn btn-sm btn-success"
                        onClick={() => handleAction(req._id, "accepted")}
                      >
                        Accept
                      </button>
                      <button
                        className="btn btn-sm btn-error"
                        onClick={() => handleAction(req._id, "rejected")}
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <p
                      className={`${
                        req.status === "accepted" || req.status === "paid"
                          ? "text-green-600"
                          : "text-red-600"
                      } `}
                    >
                      {req.status}
                    </p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorRequestPage;
