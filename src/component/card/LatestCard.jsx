import React from "react";
import { Link } from "react-router";

const LatestCard = ({ data }) => {
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img src={data?.image} alt="Shoes" className="h-65" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data?.ticketTitle}</h2>
        <p className="">Transport type: {data?.transportType}</p>
        <p className="">Ticket Quantity : {data?.ticketQuantity}</p>

        <p className="">Price : $ {data?.price} </p>
        <p>{data?.perks}</p>

        <div className="card-actions justify-center">
          <Link to={`/details/${data.id}`} className="btn btn-primary">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestCard;
