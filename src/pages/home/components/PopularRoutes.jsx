import React from "react";

import Marquee from "react-fast-marquee";

import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hook/useAxios";

const PopularRoutes = () => {
  const axiosInstance = useAxios();
  const { data: tickets = [] } = useQuery({
    queryKey: ["ticket", "popular"],
    queryFn: async () => {
      const res = await axiosInstance.get("/ticket-latest");
      return res.data;
    },
  });
  return (
    <div className="px-10 mb-10">
      <h1 className="text-4xl font-bold my-10 text-center">
        Popular <span className="text-primary">Route</span>
      </h1>
      <div className="flex overflow-x-auto space-x-4">
        <Marquee autoFill={true}>
          {tickets.map((route) => (
            <div
              key={route.ticketTitle}
              className=" bg-gray-100  px-4 py-2 rounded mr-5 dark:bg-gray-900 dark:text-white"
            >
              <p className="font-semibold">
                {route.from} → {route.to}
              </p>
              <p>
                •{route.transportType}
                {"   "}${route.price}
                <br></br>• {route.departureDateTime.split("T")[1]}
                <br></br>• {route.departureDateTime.split("T")[0]}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default PopularRoutes;
