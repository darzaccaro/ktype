import React from "react";
import { Link } from "react-router-dom";
import theme from "../theme";
import NavLink from "./NavLink";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useState } from "react";
export default function Header() {
  const { width, height } = useWindowDimensions();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu(isOpen) {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "inherit";
    }
    setIsMenuOpen(isOpen);
  }

  function MobileMenuButton() {
    if (isMenuOpen) {
      return (
        <div>
          <img
            onClick={() => toggleMenu(false)}
            src="/icons/x.svg"
            alt="x"
            width="25px"
          ></img>
        </div>
      );
    } else {
      return (
        <div>
          <a onClick={() => toggleMenu(true)} style={{ marginLeft: 0 }}>
            MENU GET STYLE FROM .NAV-LINK
          </a>
        </div>
      );
    }
  }

  if (width < theme.sizes.mobileWidth) {
    return (
      <header
        style={{
          width: theme.sizes.contentWidth,
          margin: "0 auto",
          marginBottom: theme.sizes.spacingV1,
          marginTop: 15,
          overflow: "hidden"
        }}
      >
        <Link to={"/"} style={{ width: 50, float: "left" }}>
          <img src="/logo.svg" alt="logo" />
        </Link>
        <MobileMenuButton />
        <div
          style={{
            zIndex: 2,
            position: "absolute",
            display: isMenuOpen ? "inherit" : "none",
            width: "100%",
            height: "100%",
            backgroundColor: theme.colors.white,
            marginTop: 75
          }}
        >
          <nav style={{}}>
            <NavLink isMobile text="WORK" to="/work" />
            <NavLink isMobile text="ABOUT" to="/about" />
            <NavLink isMobile text="CONTACT" to="/contact" />
          </nav>
        </div>
      </header>
    );
  } else {
    return (
      <header
        style={{
          width: theme.sizes.contentWidth,
          margin: "0 auto",
          marginBottom: theme.sizes.spacingV1,
          marginTop: 15,
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
}
