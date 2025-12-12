import React from "react";

const AddTicket = () => {
  return (
    <div className="my-10">
      <form className="max-w-xl mx-auto p-6 bg-base-200 rounded-lg shadow-lg space-y-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Add <span className="text-primary">Ticket</span>
        </h2>

        <div className="form-control">
          <label className="label">
            <span className="label-text">ID</span>
          </label>
          <input
            type="number"
            name="id"
            required
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            name="image"
            required
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Ticket Title</span>
          </label>
          <input
            type="text"
            name="ticketTitle"
            required
            className="input input-bordered w-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">From</span>
            </label>
            <input
              type="text"
              name="from"
              required
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">To</span>
            </label>
            <input
              type="text"
              name="to"
              required
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Transport Type</span>
          </label>
          <select
            name="transportType"
            className="select select-bordered w-full"
          >
            <option>Bus</option>
            <option>Car</option>
            <option>Flight</option>
            <option>Train</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              required
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Ticket Quantity</span>
            </label>
            <input
              type="number"
              name="ticketQuantity"
              required
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Perks</span>
          </label>
          <input
            type="text"
            name="perks"
            placeholder="Camel ride, Dinner"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Departure Date & Time</span>
          </label>
          <input
            type="datetime-local"
            name="departureDateTime"
            required
            className="input input-bordered w-full"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full mt-4">
          Add Ticket
        </button>
      </form>
    </div>
  );
};

export default AddTicket;
