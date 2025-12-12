import React, { useState } from "react";

const AboutUs = () => {
  const [learnMore, setLearnMore] = useState(false);
  return (
    <section className="py-16 bg-gray-50 px-10">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        {/* Image */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
            alt="About Us"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">
            About <span className="text-primary">Us</span>
          </h2>
          <p className="text-gray-700 mb-4">
            Welcome to our ticket booking platform! We make it easy for you to
            book flights, buses, trains, and cruises across popular routes. Our
            goal is to provide a seamless, fast, and secure booking experience
            for all travelers.
          </p>
          <p className="text-gray-700 mb-4">
            With real-time availability, exclusive perks, and a user-friendly
            interface, planning your next journey has never been easier. Join
            thousands of satisfied customers and explore new destinations with
            confidence.
          </p>
          {learnMore ? (
            <>
              <p className="text-gray-700 mb-4">
                Our platform is designed to cater to both casual travelers and
                frequent commuters. We offer detailed schedules, flexible
                payment options, and instant confirmations so you can focus on
                enjoying your trip rather than worrying about logistics.
              </p>
              <p className="text-gray-700 mb-4">
                Safety and comfort are our top priorities. All transport
                partners are carefully vetted, and our booking system ensures
                secure transactions. Additionally, we provide personalized
                recommendations, travel tips, and customer support around the
                clock to assist you at every step.
              </p>
              <p className="text-gray-700 mb-4">
                Whether you're planning a weekend getaway, a business trip, or
                an international adventure, our platform empowers you to make
                informed choices, compare options, and find the best deals
                quickly. Discover new routes, enjoy exciting perks, and make
                every journey memorable with our all-in-one ticket booking
                solution.
              </p>
            </>
          ) : (
            ""
          )}

          <button
            onClick={() => setLearnMore(!learnMore)}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            {learnMore ? "See Less" : "Learn More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
