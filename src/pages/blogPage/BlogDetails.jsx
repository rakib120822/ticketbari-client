import React from "react";
import { useNavigate, useParams } from "react-router";

const BlogDetail = () => {
  const { blogId } = useParams(); // Assume you pass blog id or index in URL
  const navigate = useNavigate();
  const blogs = [
    {
      title: "Top 10 Travel Destinations",
      date: "Jan 10, 2026",
      author: "Sophia Bennett",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      excerpt:
        "Discover the world’s most breathtaking destinations that should be on every traveler’s bucket list in 2026.",
      content: `
      Traveling opens up new horizons, cultures, and experiences. In 2026, these ten destinations stand out as must-visits:

      1. **Bali, Indonesia** – Famous for its beaches, rice terraces, and spiritual vibes.
      2. **Kyoto, Japan** – A serene escape with ancient temples, cherry blossoms, and traditional culture.
      3. **Santorini, Greece** – Stunning sunsets, whitewashed buildings, and Aegean sea views.
      4. **Patagonia, Chile & Argentina** – Dramatic landscapes, glaciers, and adventure trekking.
      5. **Amalfi Coast, Italy** – Colorful cliffs, Mediterranean cuisine, and charming villages.
      6. **Queenstown, New Zealand** – Adventure capital: bungee, skydiving, and lakeside beauty.
      7. **Iceland** – Northern lights, geothermal hot springs, and volcanic landscapes.
      8. **Marrakech, Morocco** – Vibrant markets, architecture, and desert excursions.
      9. **Banff, Canada** – Majestic mountains, turquoise lakes, and hiking trails.
      10. **Cape Town, South Africa** – Beaches, Table Mountain, and rich wildlife experiences.

      Each destination offers unique experiences that will make your travel memorable. Plan wisely and immerse yourself in local culture for the ultimate adventure.
    `,
    },
    {
      title: "How to Save on Tickets",
      date: "Feb 2, 2026",
      author: "Liam Carter",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
      excerpt:
        "Learn tips and tricks to get the best deals on flights, trains, and buses without compromising comfort or convenience.",
      content: `
      Travel doesn’t have to break the bank. Here are some proven strategies to save money on tickets:

      1. **Book Early** – Most airlines and trains offer early bird discounts.
      2. **Use Price Alerts** – Tools like Google Flights, Skyscanner, or Hopper notify you when prices drop.
      3. **Be Flexible with Dates** – Mid-week flights are often cheaper than weekends.
      4. **Consider Alternative Airports** – Nearby smaller airports sometimes offer lower fares.
      5. **Join Loyalty Programs** – Frequent traveler programs can give you discounts or points.
      6. **Bundle Travel** – Booking flights + hotel together may reduce the total cost.
      7. **Use Cashback or Credit Card Offers** – Many cards give points or discounts on travel bookings.

      Saving on tickets allows you to allocate more budget for experiences, local cuisine, and souvenirs.
    `,
    },
    {
      title: "Traveling Safely in 2026",
      date: "Mar 5, 2026",
      author: "Emma Johnson",
      image: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef",
      excerpt:
        "Safety should always be a priority. Follow these tips to ensure a worry-free trip wherever you go in 2026.",
      content: `
      Traveling in 2026 comes with new challenges and considerations. Here’s how to stay safe:

      1. **Stay Updated on Travel Advisories** – Check government websites for alerts or restrictions.
      2. **Purchase Travel Insurance** – Covers medical emergencies, trip cancellations, and lost baggage.
      3. **Keep Digital & Physical Copies of Documents** – Passport, tickets, and insurance.
      4. **Be Mindful of Health** – Vaccinations, hygiene, and local health advisories are crucial.
      5. **Secure Your Belongings** – Use anti-theft bags, keep valuables close, and avoid risky areas.
      6. **Stay Connected** – Share your itinerary with family/friends and use location services.
      7. **Follow Local Laws & Customs** – Respect local traditions, rules, and guidelines.

      By taking a few precautions, you can enjoy your travels fully while staying safe and stress-free.
    `,
    },
  ];
  // Find blog by title or id (here we use index as blogId for simplicity)
  const blog = blogs[parseInt(blogId)] || null;

  if (!blog) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Blog not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="btn btn-primary px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className=" mx-auto px-10 py-16 space-y-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="btn btn-outline btn-primary px-4 py-2 rounded"
      >
        &larr; Back to Blogs
      </button>

      {/* Blog Image */}
      <div className="w-full h-80 md:h-96 overflow-hidden rounded-xl shadow-lg">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blog Title & Info */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-primary">{blog.title}</h1>
        <p className=" text-sm">
          By <span className="font-medium">{blog.author}</span> | {blog.date}
        </p>
        <p className=" mt-2">{blog.excerpt}</p>
      </div>

      {/* Blog Content */}
      <div className="prose prose-lg max-w-full ">
        {blog.content.split("\n").map((line, idx) => {
          if (
            line.startsWith("1.") ||
            line.startsWith("2.") ||
            line.startsWith("3.") ||
            line.startsWith("4.") ||
            line.startsWith("5.") ||
            line.startsWith("6.") ||
            line.startsWith("7.")
          ) {
            return <li key={idx}>{line.replace(/^\d+\.\s*/, "")}</li>;
          } else if (line.trim() === "") {
            return <br key={idx} />;
          } else {
            return <p key={idx}>{line}</p>;
          }
        })}
      </div>
    </div>
  );
};

export default BlogDetail;
