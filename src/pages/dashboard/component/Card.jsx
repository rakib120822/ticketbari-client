import { useEffect, useState } from "react";

const Card = ({ ticket }) => {
  const {
    ticketTitle,
    image,
    bookingQuantity,
    price,
    from,
    to,
    departureDateTime,
    status = "pending",
  } = ticket;

  // Countdown logic
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const departure = new Date(departureDateTime);
      const diff = departure - now;

      if (diff <= 0) {
        setCountdown("Departed");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      setCountdown(`${days}d ${hours}h ${minutes}m`);
    }, 1000);

    return () => clearInterval(interval);
  }, [departureDateTime]);

  // Status badge color
  const statusColor = {
    pending: "badge-warning",
    accepted: "badge-info",
    rejected: "badge-error",
    paid: "badge-success",
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt={ticketTitle}
          className="h-48 w-full object-cover"
        />
      </figure>

      <div className="card-body space-y-2">
        <h2 className="card-title">{ticketTitle}</h2>

        <p className="text-sm text-gray-500">
          {from} → {to}
        </p>

        <p>
          <strong>Departure:</strong>{" "}
          {new Date(departureDateTime).toLocaleString()}
        </p>

        <p>
          <strong>Booking Quantity:</strong> {bookingQuantity}
        </p>

        <p>
          <strong>Total Price:</strong> ${price}
        </p>

        <div className="flex items-center justify-between">
          {status === "pending" ? (
            <span className={`badge ${statusColor[status]}`}>{status}</span>
          ) : (
            <button className="btn btn-primary">Pay Now</button>
          )}

          <span className="text-sm text-primary">⏳ {countdown}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
