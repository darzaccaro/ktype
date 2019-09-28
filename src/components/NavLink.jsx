import React from "react";
import { withRouter, Link } from "react-router-dom";

const NavLink = ({ text, to, location, isMobile }) => {
  let path = location.pathname;
  if (path === "/") path = "/work";
  return (
    <Link
      className={`nav-link ${to === path && "nav-active"} ${isMobile &&
        "nav-link-mobile"}`}
      to={to}
    >
      {text}
    </Link>
  );
};

export default withRouter(NavLink);
