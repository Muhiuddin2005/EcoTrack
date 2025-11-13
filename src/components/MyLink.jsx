import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ children,to,className }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-green-500" : `${className} font-semibold`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;