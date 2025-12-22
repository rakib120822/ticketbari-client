import { useState } from "react";
import useAxiosSEcure from "../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hook/useAuth";
import LatestCard from "../../../component/card/LatestCard";


const MyAddTicket = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSEcure();
  const [tickets, setTickets] = useState();
  const { data } = useQuery({
    queryKey: ["tickets", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-ticket?email=${user?.email}`);
      setTickets(res.data);
      return res.data;
    },
  });

  const handleTransport = (e) => {

    const transport = e.target.value;
    setTickets(data.filter((c) => c.transportType === transport));
  };
  const handleSort = (e) => {
    const order = e.target.value;

    if (order === "high") {
      // High to Low
      const sorted = [...data].sort((a, b) => b.price - a.price);
      setTickets(sorted);
    } else if (order === "low") {
      // Low to High
      const sorted = [...data].sort((a, b) => a.price - b.price);
      setTickets(sorted);
    }
  };

  return (
    <div className="px-10 mb-10">
      <div className="flex flex-col mb-5 md:mb-0 md:flex-row justify-between items-center">
        <h1 className="text-4xl font-bold my-10 text-center">
          My <span className="text-primary">Tickets</span>
        </h1>
        <div className="flex gap-5">
          <select
            defaultValue="Pick a Framework"
            className="select select-info w-md"
            onChange={handleTransport}
          >
            <option value="">Transport Type</option>
            <option value="Train">Train</option>
            <option value="Bus">Bus</option>
            <option value="Flight">Flight</option>
            <option value="Boat">Boat</option>
          </select>
          <select
            defaultValue="Pick a Framework"
            className="select select-info"
            onChange={handleSort}
          >
            <option value="">Sort</option>
            <option value={"high"}>High To Low</option>
            <option value={"low"}>Low To High</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {tickets?.map((data) => (
          <LatestCard key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default MyAddTicket;
