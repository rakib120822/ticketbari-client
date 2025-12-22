import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center bg-white p-10 rounded-xl shadow-lg">
        <FaExclamationTriangle className="text-6xl text-red-500 mx-auto mb-6" />
        <h1 className="text-5xl font-bold mb-4 text-gray-800">Oops!</h1>
        <p className="text-lg text-gray-600 mb-6">
          The page you are looking for does not exist or something went wrong.
        </p>
        <button
          onClick={() => navigate("/")}
          className="btn btn-primary btn-md"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
