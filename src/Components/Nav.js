import { useState } from "react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "../Styles/Nav.css";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import toast from "react-hot-toast";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext)
  
  //logout
  const handleLogOut = () => {
    logout()
      .then(() => { })
      .catch(err => {
        toast.error(err.message)
        console.error(err)
      })
  }
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <Link
          to="/"
          aria-label="laraCripton"
          title="laraCripton"
          className="inline-flex items-center"
        >
          <img className="w-12" src={logo} alt="" />
          <div>
            <span className="ml-2 text-xl font-bold tracking-wide text-pink-600 uppercase block">
              Lara Cripton
            </span>
            <span className="text-gray-500 ml-2">Life Coach</span>
          </div>
        </Link>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/home"
              aria-label="home"
              title="home"
              className={`font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400 ${(
                isActive
              ) => (isActive ? "active" : "undefined")}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              aria-label="services"
              title=""
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Services
            </NavLink>
          </li>
          {
            user?.uid &&
            <>
              <li>
            <NavLink
              to='/myReviews'
              aria-label="Product pricing"
              title="Product pricing"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              My Reviews
            </NavLink>
              </li>
              <li>
            <NavLink
              to='/addService'
              aria-label="Product pricing"
              title="Product pricing"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Add Service
            </NavLink>
          </li>
            </>
          }
          <li>
            <NavLink
              to="/blog"
              aria-label="About us"
              title="About us"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/reviews'
              aria-label="Product pricing"
              title="Product pricing"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Reviews
            </NavLink>
          </li>
          {
            user?.uid ?
            <li onClick={handleLogOut}>
            <Link
              to="/home"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-bl from-pink-400  via-pink-600 to-pink-400 focus:shadow-outline focus:outline-none"
              aria-label="Sign up"
              title="Sign up"
            >
              Sign Out
            </Link>
              </li>
              :
              <li>
              <Link
                to="/login"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-bl from-pink-400  via-pink-600 to-pink-400 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign In
              </Link>
            </li>    
          }
          
        </ul>
        <div className="lg:hidden z-40">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      aria-label="laraCripton"
                      title="laraCripton"
                      className="inline-flex items-center"
                    >
                      <img className="w-12" src={logo} alt="" />
                      <div>
                        <span className="ml-2 text-xl font-bold tracking-wide text-pink-600 uppercase block">
                          Lara Cripton
                        </span>
                        <span className="text-gray-500 ml-2">Life Coach</span>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4 ">
                    <li>
                      <NavLink
                        to="/home"
                        aria-label="home"
                        title="home"
                        className={`font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400 ${(
                          isActive
                        ) => (isActive ? "active" : "undefined")}`}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services"
                        aria-label="services"
                        title=""
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Services
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Pricing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog"
                        aria-label="About us"
                        title="About us"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Blog
                      </NavLink>
                    </li>
                    {
            user?.uid ?
            <li onClick={handleLogOut}>
            <Link
              to="/home"
              className="inline-flex items-center justify-center h-12 w-full px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-bl from-pink-400  via-pink-600 to-pink-400 focus:shadow-outline focus:outline-none"
              aria-label="Sign up"
              title="Sign up"
            >
              Sign Out
            </Link>
              </li>
              :
              <li>
              <Link
                to="/login"
                className="inline-flex items-center justify-center h-12 w-full px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-bl from-pink-400  via-pink-600 to-pink-400 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign In
              </Link>
            </li>    
          }
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Nav;
