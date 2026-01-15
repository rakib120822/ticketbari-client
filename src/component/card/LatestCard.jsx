import React from "react";
import { Link } from "react-router";

const LatestCard = ({ data }) => {
  const { image, ticketTitle, transportType, ticketQuantity, perks, _id } =
    data;
  return (
    <div className="card bg-base-100 shadow-md shadow-primary hover:shadow-lg transition">
      {/* Image */}
      <figure className="h-40">
        <img
          src={image}
          alt={ticketTitle}
          className="h-full w-full object-cover"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body p-4">
        <h2 className="card-title text-lg">{ticketTitle}</h2>

        <span className="badge badge-info w-fit">{transportType}</span>

        <p className="text-sm">
          🎟 Tickets: <span className="font-medium">{ticketQuantity}</span>
        </p>

        <p className="text-sm text-gray-600">✨ {perks}</p>

        {/* Details Button */}
        <div className="card-actions justify-end mt-2">
          <Link
            to={`/details/${_id}`}
            className="btn btn-sm btn-outline btn-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestCard;
