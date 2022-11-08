import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home";
import Services from "../Pages/Services";

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
        path: '/blog',
        element:<Blog></Blog>
      },
    ]
  }
])