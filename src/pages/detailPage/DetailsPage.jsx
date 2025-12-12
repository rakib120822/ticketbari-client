import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const DetailsPage = () => {
  const data = useLoaderData(); // array of tickets
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    // Find the ticket with matching id
    const detailTicket = data.find((d) => d.id === parseInt(id));
    setTicket(detailTicket || null);
  }, [id, data]);

  if (!ticket) {
    return (
      <div className="text-center py-10 text-gray-500">Ticket not found</div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow my-10">
      <img
        src={ticket.image}
        alt={ticket.ticketTitle}
        className="w-full h-64 object-cover rounded mb-6"
      />
      <h2 className="text-2xl font-bold mb-2">{ticket.ticketTitle}</h2>
      <p className="text-gray-700 mb-1">
        <strong>From:</strong> {ticket.from}
      </p>
      <p className="text-gray-700 mb-1">
        <strong>To:</strong> {ticket.to}
      </p>
      <p className="text-gray-700 mb-1">
        <strong>Transport Type:</strong> {ticket.transportType}
      </p>
      <p className="text-gray-700 mb-1">
        <strong>Price:</strong> ${ticket.price}
      </p>
      <p className="text-gray-700 mb-1">
        <strong>Quantity Available:</strong> {ticket.ticketQuantity}
      </p>
      <p className="text-gray-700 mb-1">
        <strong>Perks:</strong> {ticket.perks}
      </p>
      <p className="text-gray-700 mb-1">
        <strong>Departure:</strong>{" "}
        {new Date(ticket.departureDateTime).toLocaleString()}
      </p>
    </div>
  );
};

export default DetailsPage;
