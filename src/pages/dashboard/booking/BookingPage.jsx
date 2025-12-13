import React from "react";
import Card from "../component/Card";
import useAuth from "../../../hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";

const BookingPage = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: tickets = [] } = useQuery({
    queryKey: ["tickets", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/booking?email=${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h1>this is booking page : {tickets.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {tickets.map((ticket) => (
          <Card key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default BookingPage;
