import React from "react";
import { withRouter, Link } from "react-router-dom";
import theme from "../theme";
import NavLink from "./NavLink";
import useWindowWidth from "../hooks/useWindowWidth";
import useWindowHeight from "../hooks/useWindowHeight";
import { useState } from "react";

/* START -- Mobile Menu */
function Header({ location }) {
  const width = useWindowWidth();
  const height = useWindowHeight();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function MobileMenuButton() {
    return (
      <button
        className="mobile-menu-button"
        style={{
          position: "fixed",
          zIndex: 5,
          top: 0,
          right: 0,
          padding: "14px 25px",
        }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <img
            style={{
              color: "white",
              position: "fixed",
              top: 0,
              right: 0,
              padding: "14px 25px",
            }}
            src="/icons/x.svg"
            alt="x"
            width="30px"
          ></img>
        ) : (
          <div
            className="underline-yellow"
            style={{
              fontWeight: "bold",
            }}
          >
            MENU
          </div>
        )}
      </button>
    );
  }

  if (width < theme.breakpoints.mobile || height < theme.breakpoints.height) {
    return (
      <header>
        <nav>
          <div
            className="mobile-nav-container"
            style={{
              backgroundColor: theme.colors.light,
              width: "100%",
              position: "fixed",
              display: "block",
              padding: "10px 25px",
              zIndex: 3,
            }}
          >
            <div className="mobile-nav-logo-small">
              <Link
                style={{
                  display: "block",
                  width: 60,
                }}
                to={"/"}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setIsMenuOpen(false);
                }}
              >
                <img
                  className="logo"
                  style={{
                    display: "block",
                    width: 60,
                  }}
                  src="/pentool-gods-simplified.svg"
                  alt="Logo V2"
                ></img>
              </Link>
            </div>
          </div>
          <MobileMenuButton />

          <div
            className="mobile-nav-bg menu-anim"
            style={{
              zIndex: 3,
              top: 0,
              position: "fixed",
              display: isMenuOpen ? "inherit" : "none",
              width: "100vw",
              height: "100vh",
              backgroundColor: theme.colors.black,
            }}
          >
            <div
              className="mobile-nav-links"
              style={{
                display: "flex",
                position: "absolute",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                msTransform: "translateY(-50%)",
                transform: "translateY(-50%)",
                top: "50%",
                left: 0,
                margin: 0,
              }}
            >
              <div className="mobile-nav-logo-large">
                <Link
                  to={"/"}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setIsMenuOpen(false);
                  }}
                  style={{
                    display: "block",
                    paddingBottom: 25,
                    paddingTop: 30,
                  }}
                >
                  <img
                    className="logo"
                    style={{ width: 230, height: "auto" }}
                    src="/kt-logo.svg"
                    alt="Logo"
                  />
                </Link>
              </div>

              <NavLink
                isMobile
                text="WORK"
                to="/work"
                isActive={
                  location.pathname.split("/")[1] === "work" ||
                  location.pathname === "/"
                }
                onClick={() => {
                  window.scrollTo(0, 0);
                  setIsMenuOpen(false);
                }}
              ></NavLink>
              <NavLink
                isMobile
                text="ABOUT"
                to="/about"
                isActive={location.pathname.split("/")[1] === "about"}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setIsMenuOpen(false);
                }}
              ></NavLink>
              <NavLink
                isMobile
                text="CONTACT"
                to="/contact"
                isActive={location.pathname.split("/")[1] === "contact"}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setIsMenuOpen(false);
                }}
              ></NavLink>

              {/* Mobile Social Icons -- START 
              <div className="mobile-nav-social">
                <a
                  href="https://instagram.com/ktype.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="social-icons"
                    style={{
                      width: "2.2em",
                      padding: "20px 20px",
                    }}
                    src="/icons/instagram.svg"
                    alt="Instagram"
                  ></img>
                </a>
                <a
                  href="https://dribbble.com/ktype"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="social-icons"
                    style={{
                      width: "2.2em",
                      padding: "20px 20px",
                    }}
                    src="/icons/dribbble.svg"
                    alt="Dribbble"
                  ></img>
                </a>
                <a
                  href="https://behance.net/ktype"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="social-icons"
                    style={{
                      width: "2.2em",
                      padding: "20px 20px",
                    }}
                    src="/icons/behance-network.svg"
                    alt="Behance"
                  ></img>
                </a>
              </div>
             Mobile Social Icons -- END */}
            </div>
          </div>
        </nav>
      </header>

      /* END -- Mobile Menu */
    );
  } else {
    return (
      <div
        className="page-anim"
        style={{
          width: "100%",
        }}
      >
        <header>
          <nav
            className="nav-container"
            style={{
              height: "100%",
              top: 0,
              left: 0,
              width: "14.5vw",
              /*
            width: 315,
            */
              paddingLeft: "0.781vw",
              paddingRight: "0.781vw",
              display: "block",
              position: "fixed",
              borderRight: "0.0781vw solid #f9b110",
              zIndex: 2,
              overflowX: "hidden",
            }}
          >
            <div className="nav-logo">
              <Link
                to={"/"}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setIsMenuOpen(false);
                }}
                style={{
                  position: "relative",
                  paddingTop: "1.4vw",
                  display: "block",
                  maxWidth: "28vh",
                  width: "90%",
                  /*
            width: 315,
            */
                  height: "auto",
                  margin: "0 auto",
                  zIndex: 1,
                }}
              >
                <img className="logo" src="/kt-logo.svg" alt="KTYPE logo" />
              </Link>
            </div>

            {/* WORK - ABOUT - CONTACT */}
            <div
              className="nav-links"
              style={{
                display: "flex",
                position: "absolute",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                msTransform: "translateY(-100%)",
                transform: "translateY(-100%)",
                top: "100%",
                left: 0,
                margin: 0,
                zIndex: 2,
              }}
            >
              <NavLink
                text="WORK"
                to="/work"
                isActive={
                  location.pathname.split("/")[1] === "work" ||
                  location.pathname === "/"
                }
                onClick={() => {
                  window.scrollTo(0, 0);
                  setIsMenuOpen(false);
                }}
              ></NavLink>
              <NavLink
                text="ABOUT"
                to="/about"
                isActive={location.pathname.split("/")[1] === "about"}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setIsMenuOpen(false);
                }}
              ></NavLink>
              <NavLink
                text="CONTACT"
                to="/contact"
                isActive={location.pathname.split("/")[1] === "contact"}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setIsMenuOpen(false);
                }}
              ></NavLink>
            </div>

            {/* Social Icons - REMOVE
          <div
            className="nav-social"
            style={{
              display: "flex",
              position: "absolute",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              left: 0,
              bottom: 0,
              paddingBottom: 40,
            }}
          >
            <a
              href="https://instagram.com/ktype.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social-icons"
                style={{
                  width: "1.8em",
                  padding: "15px 30px",
                }}
                src="/icons/instagram.svg"
                alt="Instagram"
              ></img>
            </a>
            <a
              href="https://dribbble.com/ktype"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social-icons"
                style={{
                  width: "1.8em",
                  padding: "15px 30px",
                }}
                src="/icons/dribbble.svg"
                alt="Dribbble"
              ></img>
            </a>
            <a
              href="https://behance.net/ktype"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social-icons"
                style={{
                  width: "1.8em",
                  padding: "15px 30px",
                }}
                src="/icons/behance-network.svg"
                alt="Behance"
              ></img>
            </a>
          </div>
          */}
          </nav>
        </header>
      </div>
    );
  }
}

export default withRouter(Header);
