import React from "react";
import { withRouter, Link } from "react-router-dom";
import theme from "../theme";
import NavLink from "./NavLink";
import useWindowWidth from "../hooks/useWindowWidth";
import { useState, useEffect } from "react";
import ScrollLock, { TouchScrollable } from "react-scrolllock";

function Header({ location }) {
  const width = useWindowWidth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function MobileMenuButton() {
    return (
      <div>
        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <img
              src="/icons/x.svg"
              alt="x"
              width="25px"
              style={{ position: "relative", bottom: 5, right: 10 }}
            ></img>
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
          backgroundColor: theme.colors.white
        }}
      >
        <ScrollLock isActive={isMenuOpen}></ScrollLock>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link
            to={"/"}
            onClick={() => setIsMenuOpen(false)}
            style={{
              width: 35,
              float: "left",
              position: "relative",
              top: 10,
              paddingLeft: theme.sizes.spacingV2
            }}
          >
            <img className="logo" src="/logo.svg" alt="logo" />
          </Link>
          <MobileMenuButton />
        </div>
        <div
          style={{
            zIndex: 2,
            position: "absolute",
            display: isMenuOpen ? "inherit" : "none",
            width: "100%",
            height: "calc(100vh - 79px)",
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
              onClick={() => setIsMenuOpen(false)}
            />
            <NavLink
              isMobile
              text="ABOUT"
              to="/about"
              isActive={location.pathname.split("/")[1] === "about"}
              onClick={() => setIsMenuOpen(false)}
            />
            <NavLink
              isMobile
              text="CONTACT"
              to="/contact"
              isActive={location.pathname.split("/")[1] === "contact"}
              onClick={() => setIsMenuOpen(false)}
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
          overflow: "hidden"
        }}
      >
        <Link
          to={"/"}
          style={{ width: 35, float: "left", position: "relative", top: 10 }}
        >
          <img className="logo" src="/logo.svg" alt="logo" />
        </Link>
        <nav
          style={{
            paddingTop: 10,
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
