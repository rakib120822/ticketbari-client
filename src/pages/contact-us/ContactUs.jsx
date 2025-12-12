import React from "react";
import { toast } from "react-toastify";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.info("Thanks For Your Feedback ");
    e.target.reset();
  };
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Contact <span className="text-primary">Us</span>
        </h2>
        <p className="text-gray-700 text-center mb-10">
          Have a question or need support? Fill out the form below and our team
          will get back to you as soon as possible.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your message here..."
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>

          {/* Optional contact info */}
          <div className="mt-10 border-t pt-6 text-gray-700">
            <p className="mb-2">📞 Phone: +880 123 456 789</p>
            <p className="mb-2">✉️ Email: payelrakibulislam@gmail.com</p>
            <p>📍 Address: 123 Main Street, Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
