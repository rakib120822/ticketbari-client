import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hook/useAuth";
import { toast } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { logIn, setUser, setLoading, googleSignIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (data) => {
    console.log(data);
    setLoading(true);
    logIn(data.email, data.password).then((res) => {
      setUser(res.user);
      setLoading(false);
      toast.info("Successfully Logged In");
      navigate(`${location?.state || "/"}`);
    });
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    googleSignIn().then((res) => {
      console.log(res.user);
      setUser(res.user);
      setLoading(false);
      toast.info("Successfully Logged In");
      navigate(`${location?.state || "/"}`);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="max-w-md w-full p-8 bg-white rounded shadow">
        <h2 className="text-4xl font-bold mb-6 text-center text-primary">
          Login
        </h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email", { required: true })}
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">Password must be 6 character</p>
            )}
          </div>

          <div className="flex justify-between text-sm ">
            <Link
              to="/forgot-password"
              className="hover:underline text-primary"
            >
              Forgot Password?
            </Link>
            <p>
              Have not any Account?{" "}
              <Link
                to="/auth/register"
                className="hover:underline text-primary"
              >
                Please Register
              </Link>
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-gray-500">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 transition"
        >
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
          <span className="ml-2">Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
