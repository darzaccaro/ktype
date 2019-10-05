import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ text, to, isMobile, isActive, onClick }) => {
  console.log(text, isActive);
  return (
    <Link
      className={`nav-link ${isActive && "nav-active"} ${isMobile &&
        "nav-link-mobile"}`}
      to={to}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default NavLink;
