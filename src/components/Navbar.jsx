import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="fixed top-0 w-full flex justify-center bg-transparent backdrop-blur-md p-4 z-50">
    <ul className="flex space-x-8">
      {["Home", "Projects", "Hobby"].map((item) => (
        <li key={item}>
          <NavLink
            to={`/${item.toLowerCase()}`}
            className="text-xl font-semibold text-gray-800 hover:underline transition"
          >
            {item}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
