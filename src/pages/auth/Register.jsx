import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="max-w-md w-full p-8 bg-white rounded shadow">
        <h2 className="text-4xl font-bold mb-6 text-center text-primary">
          Register
        </h2>

        {/* Registration Form */}
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Pick a file</legend>
              <input type="file" className="file-input w-full" />
              <label className="label">Max size 2MB</label>
            </fieldset>
          </div>

          <div className="flex justify-center text-sm ">
            <p>
              Already Have an Account?{" "}
              <Link to="/auth/login" className="hover:underline text-primary">
                Please Login
              </Link>
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-gray-500">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Google Login */}

        <button className="btn bg-white text-black border-[#e5e5e5] w-full">
          <svg
            aria-label="Google logo"
            width="26"
            height="26"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
