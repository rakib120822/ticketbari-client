import { useEffect, useState } from "react";

import useAxiosSEcure from "../../../hook/useAxiosSecure";
import { useNavigate, useSearchParams } from "react-router";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSEcure();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!sessionId) {
      setMessage("Invalid payment session.");
      setLoading(false);
      return;
    }

    axiosSecure
      .patch(`/payment-success?session_id=${sessionId}`)
      .then((res) => {
        if (res.data?.success) {
          setMessage("🎉 Payment successful! Your booking is confirmed.");
        } else {
          setMessage("Payment processed, but something went wrong.");
        }
      })
      .catch((error) => {
        console.error(error);
        setMessage("Payment verification failed.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [sessionId, axiosSecure]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold">Verifying payment...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
        <h2 className="text-2xl font-bold text-primary mb-4">Payment Status</h2>

        <p className="text-gray-700 mb-6">{message}</p>
        <button
          onClick={() => navigate("/dashboard/booking")}
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go to My Bookings
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
