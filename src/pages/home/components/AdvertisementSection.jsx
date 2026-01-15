import React, { useState } from "react";
import LatestCard from "../../../component/card/LatestCard";
import { useQuery } from "@tanstack/react-query";

import useAxios from "../../../hook/useAxios";

import Skeleton from "../../../component/spinner/Skeleton";

const AdvertisementSection = () => {
  const [loading, setLoading] = useState(false);
  const axiosInstance = useAxios();
  const { data: tickets = [] } = useQuery({
    queryKey: ["tickets", "advertisment"],
    queryFn: async () => {
      setLoading(true);
      const res = await axiosInstance.get("/ticket-advertise");
      setLoading(false);
      return res.data;
    },
  });

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div className="px-10 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Advertise <span className="text-primary">Section</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {tickets.map((ticket) => (
          <LatestCard key={ticket._id} data={ticket} />
        ))}
      </div>
    </div>
  );
};

export default AdvertisementSection;
