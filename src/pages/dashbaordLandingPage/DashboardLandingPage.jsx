import React from "react";
import { FaTicketAlt, FaUsers, FaWallet, FaChartLine } from "react-icons/fa";
import useAuth from "../../hook/useAuth";

const DashboardHome = () => {
  const { user } = useAuth();

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
        <div className="stat bg-base-100 shadow rounded-2xl p-6 border border-base-200">
          <div className="stat-figure text-primary">
            <FaTicketAlt size={32} />
          </div>
          <div className="stat-title">Total Bookings</div>
          <div className="stat-value text-primary">25</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat bg-base-100 shadow rounded-2xl p-6 border border-base-200">
          <div className="stat-figure text-secondary">
            <FaWallet size={32} />
          </div>
          <div className="stat-title">Total Spent</div>
          <div className="stat-value text-secondary">$1,200</div>
          <div className="stat-desc">Includes pending payments</div>
        </div>

        <div className="stat bg-base-100 shadow rounded-2xl p-6 border border-base-200">
          <div className="stat-figure text-accent">
            <FaChartLine size={32} />
          </div>
          <div className="stat-title">Active Tickets</div>
          <div className="stat-value text-accent">4</div>
          <div className="stat-desc">Valid for the next 48h</div>
        </div>

        <div className="stat bg-base-100 shadow rounded-2xl p-6 border border-base-200">
          <div className="stat-figure text-info">
            <FaUsers size={32} />
          </div>
          <div className="stat-title">Referrals</div>
          <div className="stat-value text-info">12</div>
          <div className="stat-desc">Invite friends to earn</div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity Table */}
        <div className="lg:col-span-2 bg-base-100 p-6 rounded-2xl shadow border border-base-200">
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
                <tr>
                  <td>City Tour Bus</td>
                  <td>Dec 20, 2025</td>
                  <td>
                    <span className="badge badge-success badge-outline">
                      Confirmed
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-xs btn-ghost">Details</button>
                  </td>
                </tr>
                <tr>
                  <td>Luxury Cruise</td>
                  <td>Dec 22, 2025</td>
                  <td>
                    <span className="badge badge-warning badge-outline">
                      Pending
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-xs btn-ghost">Details</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions / Profile Card */}
        <div className="space-y-6">
          <div className="bg-primary text-primary-content p-6 rounded-2xl shadow-lg">
            <h3 className="font-bold text-lg">Need Help?</h3>
            <p className="text-sm opacity-90 mb-4">
              Check our documentation or contact support if you have issues with
              your tickets.
            </p>
            <button className="btn btn-sm btn-outline btn-white border-white text-white hover:bg-white hover:text-primary">
              Contact Support
            </button>
          </div>

          <div className="bg-base-100 p-6 rounded-2xl shadow border border-base-200">
            <h3 className="font-bold text-lg mb-4">Account Overview</h3>
            <ul className="space-y-3">
              <li className="flex justify-between text-sm">
                <span>Status:</span> <span className="font-bold">Verified</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Member Since:</span>{" "}
                <span className="font-bold">Jan 2025</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Last Login:</span>{" "}
                <span className="font-bold">2 hours ago</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
