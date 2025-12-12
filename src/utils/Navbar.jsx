import React from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../hook/useAuth";
import { toast } from "react-toastify";
import Loader from "../component/spinner/Loader";

const Navbar = () => {
  const { user, logOut, loading, setLoading, setUser } = useAuth();
  console.log(user);
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/all-tickets"}>All Tickets</NavLink>
      </li>
      <li>
        <NavLink to={"/add-ticket"}>Add Ticket</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to={"/be-a-vendor"}>Be a Vendor</NavLink>
      </li>
      <li>
        <NavLink to={"/contact-us"}>Contact us</NavLink>
      </li>
      <li>
        <NavLink to={"/about-us"}>About us</NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    setLoading(true);
    logOut().then(() => {
      toast.info("Successfully Log Out");
      setUser(null);
      setLoading(false);
    });
  };
  return (
    <nav className="navbar  shadow-sm sticky top-0 backdrop-blur-2xl px-10 z-500">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="font-bold  text-2xl">
          <div className="flex items-center gap-2">
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/fluency/48/ticket-booth.png"
              alt="ticket-booth"
            />
            <p>
              Ticket<span className="text-sky-500">Bari</span>
            </p>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 items-center px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-4">
        {loading ? (
          <Loader />
        ) : user ? (
          <>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link to={"/auth/register"} className="btn btn-primary btn-outline">
              Sign Up
            </Link>
            <Link to={"/auth/login"} className="btn btn-primary ">
              Sign In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
