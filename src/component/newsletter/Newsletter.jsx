// Newsletter.jsx
import React from "react";

const Newsletter = () => {
  return (
    <section className="py-16 bg-primary mx-10">
      <div className="container mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold">Subscribe to Our Newsletter</h2>
        <p>
          Get updates about new offers and travel tips directly in your inbox.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full md:w-96 "
          />
          <button className="btn btn-info">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
