import React from "react";
import LatestCard from "../../../component/card/LatestCard";
import { useQuery } from "@tanstack/react-query";

import useAxios from "../../../hook/useAxios";
import Loader from "../../../component/spinner/Loader";

const LatestSection = () => {
  const axiosInstance = useAxios();
  const { data: tickets = [], isLoading } = useQuery({
    queryKey: ["tickets", "latest"],
    queryFn: async () => {
      const res = await axiosInstance.get("/ticket-latest");

      return res.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }


  return (
    <div className="px-10">
      <h1 className="text-4xl font-bold my-10 text-center">
        Latest <span className="text-primary">Section</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {tickets?.map((ticket) => (
          <LatestCard key={ticket._id} data={ticket} />
        ))}
      </div>
    </div>
  );
};

export default LatestSection;
