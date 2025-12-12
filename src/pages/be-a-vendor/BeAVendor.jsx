import React from "react";

const BeAVendor = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded my-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Vendor <span className="text-primary">Registration</span>
      </h2>
      <form className="space-y-4">
        {/* Vendor Name */}
        <div>
          <label className="block text-gray-700 mb-2">Vendor Name</label>
          <input
            type="text"
            name="vendorName"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name or Company"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
            required
          />
        </div>

        {/* Transport Type */}
        <div>
          <label className="block text-gray-700 mb-2">Transport Type</label>
          <select
            name="transportType"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Transport Type</option>
            <option value="Flight">Flight</option>
            <option value="Bus">Bus</option>
            <option value="Train">Train</option>
            <option value="Boat">Boat</option>
          </select>
        </div>

        {/* Route */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-gray-700 mb-2">From</label>
            <input
              type="text"
              name="routeFrom"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Starting Point"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 mb-2">To</label>
            <input
              type="text"
              name="routeTo"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Destination"
              required
            />
          </div>
        </div>

        {/* Price and Ticket Quantity */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-gray-700 mb-2">Price (৳)</label>
            <input
              type="number"
              name="price"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Price per ticket"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 mb-2">Ticket Quantity</label>
            <input
              type="number"
              name="ticketQuantity"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Available tickets"
              required
            />
          </div>
        </div>

        {/* Perks */}
        <div>
          <label className="block text-gray-700 mb-2">Perks</label>
          <input
            type="text"
            name="perks"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="E.g., Free WiFi, Snacks"
          />
        </div>

        {/* Departure Date & Time */}
        <div>
          <label className="block text-gray-700 mb-2">
            Departure Date & Time
          </label>
          <input
            type="datetime-local"
            name="departureDateTime"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-gray-700 mb-2">Image URL</label>
          <input
            type="url"
            name="imageUrl"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Link to image of transport"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BeAVendor;
