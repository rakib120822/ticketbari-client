// Testimonials.jsx
import React from "react";

const testimonials = [
  {
    name: "Alice Johnson",
    feedback: "Amazing experience! Highly recommend this service.",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Mark Smith",
    feedback: "Fast, reliable, and great customer support.",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-10 ">
      <div className="container mx-auto text-center space-y-12">
        <h2 className="text-4xl mb-12 font-bold">
          What Our <span className="text-primary">Customers Say</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 bg-base-100 rounded-xl shadow shadow-primary hover:shadow-lg transition"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 italic">"{t.feedback}"</p>
              <p className="font-bold mt-4">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
