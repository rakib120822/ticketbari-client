import axios from "axios";
import React from "react";

const axiosInstance = axios.create({
  baseURL: "https://ticket-bari-server-nine.vercel.app",
});

function useAxios() {
  return axiosInstance;
}

export default useAxios;
