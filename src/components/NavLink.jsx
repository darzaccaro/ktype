import React from "react";
import { withRouter, Link } from "react-router-dom";

const NavLink = ({ text, to, location, isMobile, onClick }) => {
  let path = location.pathname;
  //TODO: THIS DOESN'T WORK UNLESS YOU CLICK THE LINK
  if (path === "/") path = "/work/";
  return (
    <Link
      className={`nav-link ${to === path && "nav-active"} ${isMobile &&
        "nav-link-mobile"}`}
      to={to}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default withRouter(NavLink);
