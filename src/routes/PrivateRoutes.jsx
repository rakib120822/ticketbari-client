import React from "react";
import useAuth from "../hook/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to={"/auth/login"} state={location.pathname} />;
  }
  return children;
};

export default PrivateRoutes;
