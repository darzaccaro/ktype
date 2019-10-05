import React from "react";
import { withRouter, Link } from "react-router-dom";
import theme from "../theme";
import NavLink from "./NavLink";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useState } from "react";

function Header({ location }) {
  const { width } = useWindowDimensions();
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
    return (
      <div>
        <button
          className="mobile-menu-button"
          onClick={() => toggleMenu(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <img src="/icons/x.svg" alt="x" width="25px"></img>
          ) : (
            "MENU"
          )}
        </button>
      </div>
    );
  }

  if (width < theme.breakpoints.mobile) {
    return (
      <header
        style={{
          width: "100%",
          paddingTop: 15,
          overflow: "hidden",
          backgroundColor: theme.colors.white,
          marginBottom: theme.sizes.spacingV1
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link
            to={"/"}
            onClick={() => toggleMenu(false)}
            style={{
              width: 35,
              float: "left",
              position: "relative",
              top: 10,
              paddingLeft: theme.sizes.spacingV2
            }}
          >
            <img src="/logo.svg" alt="logo" />
          </Link>
          <MobileMenuButton />
        </div>
        <div
          style={{
            zIndex: 2,
            position: "absolute",
            display: isMenuOpen ? "inherit" : "none",
            width: "100%",
            height: "100%",
            backgroundColor: theme.colors.white,
            paddingTop: 75
          }}
        >
          <nav style={{ width: "100%" }}>
            <NavLink
              isMobile
              text="WORK"
              to="/work"
              isActive={
                location.pathname.split("/")[1] === "work" ||
                location.pathname === "/"
              }
              onClick={() => toggleMenu(false)}
            />
            <NavLink
              isMobile
              text="ABOUT"
              to="/about"
              isActive={location.pathname.split("/")[1] === "about"}
              onClick={() => toggleMenu(false)}
            />
            <NavLink
              isMobile
              text="CONTACT"
              to="/contact"
              isActive={location.pathname.split("/")[1] === "contact"}
              onClick={() => toggleMenu(false)}
            />
          </nav>
        </div>
      </header>
    );
  } else {
    return (
      <header
        style={{
          maxWidth: theme.sizes.contentWidth,
          margin: "0 auto",
          paddingTop: 25,
          overflow: "hidden",
          marginBottom: theme.sizes.spacingV1
        }}
      >
        <Link
          to={"/"}
          style={{ width: 35, float: "left", position: "relative", top: 10 }}
        >
          <img src="/logo.svg" alt="logo" />
        </Link>
        <nav
          style={{
            paddingTop: 15,
            paddingBottom: 10,
            float: "right"
          }}
        >
          <NavLink
            text="WORK"
            to="/work"
            isActive={
              location.pathname.split("/")[1] === "work" ||
              location.pathname === "/"
            }
          />
          <NavLink
            text="ABOUT"
            to="/about"
            isActive={location.pathname.split("/")[1] === "about"}
          />
          <NavLink
            text="CONTACT"
            to="/contact"
            isActive={location.pathname.split("/")[1] === "contact"}
          />
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
