import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../layouts/mainlayout/MainLayout";
import Home from "../pages/home/Home";
import AllTicket from "../pages/all-tickets/AllTicket";
import AboutUs from "../pages/about-us/AboutUs";
import ContactUs from "../pages/contact-us/ContactUs";
import DashboardLayout from "../layouts/dashboardlayout/DashboardLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import DetailsPage from "../pages/detailPage/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "all-tickets",
        element: <AllTicket />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "details/:id",
        element: <DetailsPage />,
        loader: () => fetch("/data.json"),
      },
    ],
  },
  {
    path: "auth",
    element: <MainLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
  },
]);

export default router;
