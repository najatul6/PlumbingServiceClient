import AuthLayout from "@/Layout/AuthLayout";
import DashboardLayout from "@/Layout/DashboardLayout";
import RootLayout from "@/Layout/RootLayout";
import LogIn from "@/pages/Common/Auth/LogIn";
import Register from "@/pages/Common/Auth/Register";
import Error from "@/pages/Common/Error/Error";
import UserAccount from "@/pages/Common/UserAccount/UserAccount";
import Overview from "@/pages/DashboardView/Overview/Overview";
import UserControls from "@/pages/DashboardView/UserControls/UserControls";
import About from "@/pages/RootView/About/About";
import Home from "@/pages/RootView/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import AdminRoute from "./AdminRoute";
import UnAuthorization from "@/pages/Common/UnAuthorization/UnAuthorization";
import PrivateRoute from "./PrivateRoute";
import ServicesPage from "@/pages/RootView/Services/Services";
import ServiceDetail from "@/pages/RootView/Services/ServiceDetail";
import ServiceAreas from "@/pages/RootView/ServiceAreas/ServiceAreas";
import ContactPage from "@/pages/RootView/ContactPage/ContactPage";
import MyOrders from "@/pages/DashboardView/MyOrders/MyOrders";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "services/:id",
        element: <ServiceDetail />,
      },
      {
        path: "serviceAreas",
        element: <ServiceAreas />
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "contact-us",
        element:<ContactPage />,
      },
      {
        path: "my-profile",
        element: <PrivateRoute><UserAccount /></PrivateRoute>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "users-control",
        element: <AdminRoute><UserControls /></AdminRoute>,
      },
      {
        path: "my-profile",
        element: <UserAccount />,
      },
      {
        path:"my-orders",
        element:<MyOrders/>,
      }
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/un-auth",
    element: <UnAuthorization />,
  },
]);

export default Router;
