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
import VendorRoutes from "./VendorRoutes";
import AdminRoutes from "./AdminRoutes";
import DashboardHome from "../pages/dashbaordLandingPage/DashboardLandingPage";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Loader from "../component/spinner/Loader";
import Skeleton from "../component/spinner/Skeleton";
import BlogDetail from "../pages/blogPage/BlogDetails";

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
        element: <DetailsPage />,
      },
      {
        path: "blog/:blogId",
        element: <BlogDetail />,
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
    hydrateFallbackElement: <Loader />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
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
        element: (
          <VendorRoutes>
            <AddTicket />
          </VendorRoutes>
        ),
      },
      {
        path: "my-ticket",
        element: <MyAddTicket />,
      },
      {
        path: "request-ticket",
        element: (
          <VendorRoutes>
            <VendorRequestPage />
          </VendorRoutes>
        ),
      },
      {
        path: "ticket-manage",
        element: (
          <AdminRoutes>
            <AdminTicketManage />
          </AdminRoutes>
        ),
      },
      {
        path: "advertize-manage",
        element: (
          <AdminRoutes>
            <AdminAdvertisePage />
          </AdminRoutes>
        ),
      },
      {
        path: "user-manage",
        element: (
          <AdminRoutes>
            <AdminUsersManage />
          </AdminRoutes>
        ),
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

export default router;
