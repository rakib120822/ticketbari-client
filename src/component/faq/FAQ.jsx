// FAQ.jsx
import React, { useState } from "react";

const faqData = [
  {
    question: "How do I book a ticket?",
    answer:
      "Select your travel, choose date, and confirm payment to book tickets.",
  },
  {
    question: "Can I cancel my booking?",
    answer: "Yes, you can cancel within 24 hours for a full refund.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16  px-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently <span className="text-primary">Asked Questions</span>
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, idx) => (
            <div
              key={idx}
              className="bg-base-100 p-6 rounded-xl shadow shadow-primary hover:shadow-lg transition"
            >
              <h3
                className="font-bold cursor-pointer flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {faq.question}
                <span>{openIndex === idx ? "-" : "+"}</span>
              </h3>
              {openIndex === idx && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
