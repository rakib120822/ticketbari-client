// Highlights.jsx
import React from "react";

const highlightsData = [
  { title: "Fast Booking", description: "Book tickets in seconds." },
  { title: "Best Prices", description: "Competitive pricing guaranteed." },
  { title: "24/7 Support", description: "We are always here for you." },
];

const Highlights = () => {
  return (
    <section className="py-16  px-10">
      <div className=" text-center space-y-12">
        <h2 className="text-4xl mb-12 font-bold">
          Why <span className="text-primary">Choose Us</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {highlightsData.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-base-100 rounded-xl shadow shadow-primary hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
