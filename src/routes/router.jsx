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

import AddTicket from "../pages/addTicket/AddTicket";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../pages/profile/Profile";
import BookingPage from "../pages/dashboard/booking/BookingPage";
import PaymentSuccess from "../pages/dashboard/paymentPage/SuccessPage";
import PaymentHistory from "../pages/dashboard/paymentHistory/PaymentHistory";
import MyAddTicket from "../pages/dashboard/my-added-ticket/MyAddTicket";
import VendorRequestPage from "../pages/dashboard/booking/VendorRequestPage";
import AdminTicketManage from "../pages/dashboard/ticket-manage/AdminTicketManage";
import AdminAdvertisePage from "../pages/dashboard/advertize-manage/AdminAdvertisePage";
import AdminUsersManage from "../pages/dashboard/user-manage/AdminUserManage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "all-tickets",
        element: <AllTicket />,
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
        element: (
          <PrivateRoutes>
            <DetailsPage />
          </PrivateRoutes>
        ),
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
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "booking",
        element: <BookingPage />,
      },
      {
        path: "payment-success",
        element: (
          <PrivateRoutes>
            <PaymentSuccess />
          </PrivateRoutes>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoutes>
            <PaymentHistory />
          </PrivateRoutes>
        ),
      },
      {
        path: "add-ticket",
        element: <AddTicket />,
      },
      {
        path: "my-ticket",
        element: <MyAddTicket />,
      },
      {
        path: "request-ticket",
        element: <VendorRequestPage />,
      },
      {
        path: "ticket-manage",
        element: <AdminTicketManage />,
      },
      {
        path: "advertize-manage",
        element: <AdminAdvertisePage />,
      },
      {
        path: "user-manage",
        element: <AdminUsersManage />,
      },
    ],
  },
]);

export default router;
