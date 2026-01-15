// CTA.jsx
import React from "react";
import { useNavigate } from "react-router";

const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 bg-primary  text-center mx-10">
      <h2 className="text-3xl font-bold mb-4">Ready to Book Your Next Trip?</h2>
      <p className="mb-6">
        Experience the easiest and fastest ticket booking today!
      </p>
      <button
        onClick={() => navigate("/booking")}
        className="btn btn-outline  btn-lg"
      >
        Book Now
      </button>
    </section>
  );
};

export default CTA;
