import React from "react";
import Card from "../component/Card";
import useAuth from "../../../hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Loader from "../../../component/spinner/Loader";

const BookingPage = () => {
  const { user } = useAuth();
  console.log(user);
  const axiosSecure = useAxiosSecure();
  const { isLoading, data: tickets = [] } = useQuery({
    queryKey: ["tickets", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/booking?email=${user?.email}`);
      return res.data;
    },
  });
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <h1 className="text-4xl font-bold my-10">
        Total Booking: {tickets.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {tickets.map((ticket) => (
          <Card key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default BookingPage;
