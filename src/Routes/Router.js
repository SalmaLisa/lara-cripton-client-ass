import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Reviews from "../Pages/Reviews";
import ServiceDetails from "../Pages/ServiceDetails";
import Services from "../Pages/Services";
import SignUp from "../Pages/SignUp";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement:<div>page is not found !</div>,
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
        path: '/reviews',
        element:<Reviews></Reviews>
      },
      {
        path: '/blog',
        element:<Blog></Blog>
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