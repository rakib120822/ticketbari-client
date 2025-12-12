import React from "react";
import { useLoaderData } from "react-router";
import LatestCard from "../../component/card/LatestCard";

const AllTicket = () => {
  const AllTickets = useLoaderData();
  return (
    <div className="px-10 mb-10">
      <div className="flex flex-col mb-5 md:mb-0 md:flex-row justify-between items-center">
        <h1 className="text-4xl font-bold my-10 text-center">
          All <span className="text-primary">Tickets</span>
        </h1>
        <div className="flex gap-5">
          <select
            defaultValue="Pick a Framework"
            className="select select-info w-md"
          >
            <option>Transport Type</option>
            <option>Train</option>
            <option>Bus</option>
            <option>Flight</option>
            <option>Boat</option>
          </select>
          <select
            defaultValue="Pick a Framework"
            className="select select-info"
          >
            <option>Sort</option>
            <option>High To Low</option>
            <option>Low To High</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {AllTickets.map((data) => (
          <LatestCard data={data} />
        ))}
      </div>
    </div>
  );
};

export default AllTicket;
