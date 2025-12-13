import React from "react";
import useAuth from "../../hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure";

const Profile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: userInfo } = useQuery({
    queryKey: ["user", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user?email=${user.email}`);
      return res.data;
    },
  });
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={userInfo?.photoURL}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{user?.displayName}!</h1>
          <p className="pt-2">
            <span className="font-bold">Email :</span> {userInfo?.email}
          </p>
          <p className="pb-2">
            <span className="font-bold">Role :</span> {userInfo?.role}
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
