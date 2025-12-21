import React from "react";
import { FaLock, FaHome, FaArrowLeft } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";
import { Link } from "react-router";

const ForbiddenPage = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-lg w-full text-center">
        {/* Icon Header */}
        <div className="relative flex justify-center mb-8">
          <div className="bg-red-50 p-6 rounded-full">
            <FaLock className="text-red-500 text-5xl" />
          </div>
          <div className="absolute -top-2 -right-2 bg-amber-400 p-2 rounded-full border-4 border-white">
            <MdReportProblem className="text-white text-xl" />
          </div>
        </div>

        {/* Text Section */}
        <h1 className="text-6xl font-extrabold text-slate-800 mb-2">403</h1>
        <h2 className="text-2xl font-bold text-slate-700 mb-4">
          Access Forbidden
        </h2>
        <p className="text-slate-500 mb-10 leading-relaxed">
          It looks like you don't have permission to access this resource. If
          you believe this is an error, please reach out to support.
        </p>

        {/* Navigation Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={handleGoBack}
            className="flex items-center justify-center gap-2 px-5 py-3 border-2 border-slate-200 rounded-xl text-slate-600 font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all"
          >
            <FaArrowLeft /> Go Back
          </button>

          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-5 py-3 bg-slate-800 rounded-xl text-white font-semibold hover:bg-slate-900 shadow-lg shadow-slate-200 transition-all"
          >
            <FaHome /> Home Page
          </Link>
        </div>
      </div>

      <p className="mt-8 text-slate-400 text-sm font-medium">
        Error Reference:{" "}
        <span className="underline decoration-red-300">#AUTH_REQUIRED</span>
      </p>
    </div>
  );
};

export default ForbiddenPage;
