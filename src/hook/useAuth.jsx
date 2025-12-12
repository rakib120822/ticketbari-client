import { useContext } from "react";
import AuthContext from "../context/AuthContext";

import React from "react";

const useAuth = () => {
  const authInfo = useContext(AuthContext);
  return authInfo;
};

export default useAuth;
