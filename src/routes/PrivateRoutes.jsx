import React from "react";
import useAuth from "../hook/useAuth";
import { Navigate, useLocation } from "react-router";
import Loader from "../component/spinner/Loader";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center h-screen items-center">
        <Loader />
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/auth/login"} state={location.pathname} />;
  }
  return children;
};

export default PrivateRoutes;
