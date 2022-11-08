import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ service }) => {
  return (
    <ul className="flex-1 space-y-2">
      <Link to={`/services/${service._id}`}>
        <li className="flex items-center space-x-2 p-2 mb-2 hover:bg-pink-700 cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="flex-shrink-0 w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>{service.title}</span>
        </li>
      </Link>
    </ul>
  );
};

export default Sidebar;
