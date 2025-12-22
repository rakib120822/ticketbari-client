import React from "react";
import LatestCard from "../../component/card/LatestCard";
import { useState } from "react";
import { useEffect } from "react";
import useAxios from "../../hook/useAxios";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const AllTicket = () => {
  const axiosInstance = useAxios();
  const [tickets, setTickets] = useState();
  const [sortOrder, setSortOrder] = useState("");
  const [filterTransport, setFilterTransport] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  // const { data } = useQuery({
  //   queryKey: ["tickets", "alltickets",],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get("/ticket");
  //     setTickets(res.data);
  //     return res.data;
  //   },
  // });

  const limit = 10; // Number of tickets per page
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await axiosInstance.get(
          `/ticket?limit=${limit}&skip=${
            currentPage * limit
          }&adminApproved=approve&sort=${sortOrder}&transportType=${filterTransport}`
        );
        setTickets(res.data.tickets);
        const pages = Math.ceil(res.data.totalCount / limit);
        setTotalPages(pages);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };
    fetchTickets();
  }, [axiosInstance, currentPage, sortOrder, filterTransport]);

  const handleTransport = (e) => {
    const transport = e.target.value;

    setFilterTransport(transport);
  };
  const handleSort = (e) => {
    const order = e.target.value;

    if (order === "high") {
      // High to Low
      setSortOrder("desc");
    } else if (order === "low") {
      // Low to High
      setSortOrder("asc");
    }
  };

  return (
    <div className="px-10 mb-10">
      <p>total ticket : {tickets?.length}</p>
      <div className="flex flex-col mb-5 md:mb-0 md:flex-row justify-between items-center">
        <h1 className="text-4xl font-bold my-10 text-center">
          All <span className="text-primary">Tickets</span>
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
      <div className="flex flex-wrap justify-center gap-5 my-10">
        {currentPage === 0 ? (
          <button disabled className="btn btn-sm opacity-50 cursor-not-allowed">
            <FaArrowLeft />
            <span>prev</span>{" "}
          </button>
        ) : (
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            className="btn btn-sm flex items-center justify-center gap-2"
          >
            <FaArrowLeft />
            <span>prev</span>{" "}
          </button>
        )}
        {[...Array(totalPages).keys()].map((number) => (
          <button
            onClick={() => setCurrentPage(number)}
            className={`btn btn-sm ${
              currentPage === number ? "btn-primary text-white" : ""
            }`}
            key={number}
          >
            {number + 1}
          </button>
        ))}
        {currentPage >= totalPages - 1 ? (
          <button disabled className="btn btn-sm opacity-50 cursor-not-allowed">
            <span>Next</span> <FaArrowRight />
          </button>
        ) : (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="btn btn-sm"
          >
            <span>Next</span> <FaArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default AllTicket;
