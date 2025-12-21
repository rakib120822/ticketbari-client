import React from "react";
import useAxiosSEcure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const axiosSecure = useAxiosSEcure();
  const { user } = useAuth();

  const { data, isLoading } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/user/${user?.email}/role`);
      console.log("this is from userrole hook ; ", res.data, " ", user?.email);
      return res.data;
    },
  });

  const userRole = {
    data,
    isLoading,
  };

  return userRole;
};

export default useRole;
