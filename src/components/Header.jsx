import React from "react";
import { Link } from "react-router-dom";
import theme from "../theme";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header
      style={{
        width: theme.sizes.contentWidth,
        margin: "0 auto",
        marginBottom: theme.sizes.spacingV1,
        overflow: "hidden"
      }}
    >
      <Link to={"/"} style={{ width: 50, float: "left" }}>
        <img src="/logo.svg" alt="logo" />
      </Link>
      <nav
        style={{
          paddingTop: 20,
          float: "right"
        }}
      >
        <NavLink text="WORK" to="/work" />
        <NavLink text="ABOUT" to="/about" />
        <NavLink text="CONTACT" to="/contact" />
      </nav>
    </header>
  );
}
