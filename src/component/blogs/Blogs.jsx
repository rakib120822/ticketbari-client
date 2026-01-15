// Blogs.jsx
import React from "react";

const blogs = [
  { title: "Top 10 Travel Destinations", date: "Jan 10, 2026" },
  { title: "How to Save on Tickets", date: "Feb 2, 2026" },
  { title: "Traveling Safely in 2026", date: "Mar 5, 2026" },
];

const Blogs = () => {
  return (
    <section className="py-16 px-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          Latest <span className="text-primary">Blogs</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-base-100 p-6 rounded-xl shadow shadow-primary hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              <p className="text-gray-500 text-sm">{blog.date}</p>
              <button className="mt-4 btn btn-sm btn-primary">Read More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
