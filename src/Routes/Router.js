import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import EditReview from "../Pages/EditReview";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyReviews from "../Pages/MyReviews";
import Reviews from "../Pages/Reviews";
import ServiceDetails from "../Pages/ServiceDetails";
import Services from "../Pages/Services";
import SignUp from "../Pages/SignUp";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/home',
        element:<Home></Home>
      },
      {
        path: '/services',
        element:<Services></Services>
      },
      {
        path: '/services/:id',
        loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`),
        element: <ServiceDetails></ServiceDetails>
      },
      {
        path: '/myReviews',
        element:<MyReviews></MyReviews>
      },
      {
        path: '/editReview/:id',
        element:<EditReview></EditReview>
      },
      {
        path: '/blog',
        element:<Blog></Blog>
      },
      {
        path: '/reviews',
        element:<Reviews></Reviews>
      },
      
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/signup',
        element:<SignUp></SignUp>
      },
    ]
  }
])