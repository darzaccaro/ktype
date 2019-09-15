import React from "react";
import { withRouter, Link } from "react-router-dom";
import theme from "../theme";

const NavLink = ({ text, to, location }) => {
  let path = location.pathname;
  return (
    <Link className={`nav-link ${to === path && "nav-active"}`} to={to}>
      {text}
    </Link>
  );
};

export default withRouter(NavLink);
