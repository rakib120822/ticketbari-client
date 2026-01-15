import React from "react";
import { FaTicketAlt, FaUsers, FaWallet, FaChartLine } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hook/useAuth";
import useAxiosSEcure from "../../hook/useAxiosSecure";
import Loader from "../../component/spinner/Loader";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const DashboardHome = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSEcure();
  const navigate = useNavigate();

  // Fetch tickets
  const { data: tickets = [], isLoading: ticketsLoading } = useQuery({
    queryKey: ["tickets", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/latest-ticket/${user?.email}`);
      return res.data;
    },
  });

  // Fetch cost
  const { data: cost = [{ totalPrice: 0 }], isLoading: costLoading } = useQuery(
    {
      queryKey: ["cost", user?.email],
      enabled: !!user?.email,
      queryFn: async () => {
        const res = await axiosSecure.get(
          `/booking/total-cost?email=${user?.email}`
        );
        return res.data;
      },
    }
  );

  // Fetch active tickets
  const {
    data: activeTicket = { upcomingCount: 0 },
    isLoading: activeTicketLoading,
  } = useQuery({
    queryKey: ["activeTicket", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/booking/upcoming-count?email=${user?.email}`
      );
      return res.data;
    },
  });

  // Fetch user info
  const { data: userInfo = {}, isLoading: userLoading } = useQuery({
    queryKey: ["user", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user?email=${user?.email}`);
      return res.data;
    },
  });

  // Loading state
  if (
    loading ||
    ticketsLoading ||
    costLoading ||
    activeTicketLoading ||
    userLoading
  ) {
    return <Loader />;
  }

  // Member since
  const createdAtStr = userInfo?.createdAt;
  const memberSince = createdAtStr
    ? new Date(Number(createdAtStr)).toLocaleDateString()
    : "N/A";

  // Example chart data
  const bookingsData = tickets.map((t, i) => ({
    date: new Date(t.departureDateTime).toLocaleDateString(),
    bookings: i + 1,
  }));

  const revenueData = [
    { name: "Bookings", value: cost[0]?.totalPrice || 0 },
    { name: "Other", value: 500 },
  ];

  const COLORS = ["#4ade80", "#60a5fa"];

  return (
    <div className="p-6 space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">
          Welcome back, {user?.displayName || "User"}!
        </h1>
        <p className="text-gray-500">
          Here’s what’s happening with your account today.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="stat bg-base-100 shadow rounded-2xl p-6 border border-primary">
          <div className="stat-figure text-primary">
            <FaTicketAlt size={32} />
          </div>
          <div className="stat-title">Total Bookings</div>
          <div className="stat-value text-primary">{tickets.length}</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat bg-base-100 shadow rounded-2xl p-6 border border-primary">
          <div className="stat-figure text-secondary">
            <FaWallet size={32} />
          </div>
          <div className="stat-title">Total Spent</div>
          <div className="stat-value text-secondary">
            ${cost[0]?.totalPrice || 0}
          </div>
          <div className="stat-desc">Includes pending payments</div>
        </div>

        <div className="stat bg-base-100 shadow rounded-2xl p-6 border border-primary">
          <div className="stat-figure text-accent">
            <FaChartLine size={32} />
          </div>
          <div className="stat-title">Active Tickets</div>
          <div className="stat-value text-accent">
            {activeTicket.upcomingCount}
          </div>
          <div className="stat-desc">Valid for the next 48h</div>
        </div>

        <div className="stat bg-base-100 shadow rounded-2xl p-6 border border-primary">
          <div className="stat-figure text-info">
            <FaUsers size={32} />
          </div>
          <div className="stat-title">Referrals</div>
          <div className="stat-value text-info">{userInfo.referrals || 0}</div>
          <div className="stat-desc">Invite friends to earn</div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Line Chart */}
        <div className="lg:col-span-2 bg-base-100 shadow rounded-2xl p-6 border border-primary">
          <h3 className="text-xl font-bold mb-4">Bookings Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={bookingsData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="bookings"
                stroke="#4ade80"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-base-100 shadow rounded-2xl p-6 border border-primary">
          <h3 className="text-xl font-bold mb-4">Revenue Breakdown</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={revenueData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {revenueData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Bookings Table */}
      <div className="bg-base-100 p-6 rounded-2xl shadow border border-primary">
        <h3 className="text-xl font-bold mb-4">Recent Bookings</h3>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Ticket</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket._id}>
                  <td>{ticket.ticketTitle}</td>
                  <td>
                    {new Date(ticket.departureDateTime).toLocaleDateString()}
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        ticket.status === "confirmed"
                          ? "badge-success"
                          : "badge-warning"
                      } badge-outline`}
                    >
                      {ticket.status}
                    </span>
                  </td>
                  <td>
                    <Link
                      to={`/details/${ticket._id}`}
                      className="btn btn-xs btn-ghost"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions & Account Overview */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-primary text-primary-content p-6 rounded-2xl shadow-lg">
          <h3 className="font-bold text-lg mb-2">Need Help?</h3>
          <p className="text-sm opacity-90 mb-4">
            Check documentation or contact support if you have issues with your
            tickets.
          </p>
          <button
            onClick={() => navigate("/contact-us")}
            className="btn btn-sm btn-outline btn-white border-white text-white hover:bg-white hover:text-primary"
          >
            Contact Support
          </button>
        </div>

        <div className="flex-1 bg-base-100 p-6 rounded-2xl shadow border border-primary">
          <h3 className="font-bold text-lg mb-4">Account Overview</h3>
          <ul className="space-y-3">
            <li className="flex justify-between text-sm">
              <span>Status:</span> <span className="font-bold">Verified</span>
            </li>
            <li className="flex justify-between text-sm">
              <span>Member Since:</span>{" "}
              <span className="font-bold">{memberSince}</span>
            </li>
            <li className="flex justify-between text-sm">
              <span>Email:</span>{" "}
              <span className="font-bold">{user?.email}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
