import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService";
import Blog from "../Pages/Blog";
import EditReview from "../Pages/EditReview";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyReviews from "../Pages/MyReviews";
import ServiceDetails from "../Pages/ServiceDetails";
import Services from "../Pages/Services";
import SignUp from "../Pages/SignUp";
import AdminRoute from "./AdminRoute";
import ProtectedRoute from "./ProtectedRoute";
import UserRoute from "./UserRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(`https://lara-cripton-server.vercel.app/services/${params.id}`),
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/myReviews",
        element: (
          <ProtectedRoute>
            <UserRoute><MyReviews></MyReviews></UserRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: "/editReview/:id",
        loader: ({ params }) =>
          fetch(
            `https://lara-cripton-server.vercel.app/editReviews/${params.id}`
          ),
        element: <EditReview></EditReview>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/addService",
        element: (
          <ProtectedRoute>
            <AdminRoute><AddService></AddService></AdminRoute>
          </ProtectedRoute>
        ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
