import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import theme from "../theme";

export default function Thanks() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  /* ^^^ Disable for scroll down feature to work */

  return (
    // Page fade in --- Start
    <div
      className="page-anim"
      style={{
        width: "100%",
      }}
    >
      <div className="content">
        {/* Project Title + Services - START */}
        <div
          className="background-color"
          style={{ backgroundColor: theme.colors.black }}
        >
          <div className="centering">
            <h1 style={{ color: theme.colors.white, textAlign: "center" }}>
              Thanks Card
            </h1>
            <h4
              style={{
                color: theme.colors.yellow,
                margin: 0,
                fontWeight: 700,
                textAlign: "center",
                padding: 10,
              }}
            >
              SERVICES:
            </h4>

            <div
              className="project-flex"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                width: "100%",
              }}
            >
              <div className="project-flex-item-tags">
                <h4 className="service-tags">+ Custom Lettering</h4>
              </div>
              <div className="project-flex-item-tags">
                <h4 className="service-tags">+ Greeting Card Design</h4>
              </div>
            </div>
          </div>
        </div>
        {/* Project Title + Services - END */}

        <div
          className="background-color"
          style={{ backgroundColor: theme.colors.light }}
        >
          <div
            className="centering-logos"
            style={{ paddingTop: "1rem", paddingBottom: 0 }}
          >
            <div
              className="project-flex"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                position: "relative",
              }}
            >
              <div
                className="project-flex-item"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div
                  className="image-block"
                  style={{
                    display: "flex",
                    width: "calc(100%)",
                  }}
                >
                  <img
                    style={{
                      alignSelf: "center",
                      width: "100%",
                      height: "auto",
                    }}
                    src="/thanks/thanks.svg"
                    alt="Thanks hand lettering"
                  ></img>
                </div>
              </div>
            </div>
          </div>

          <div
            className="centering"
            style={{ paddingTop: 0, paddingBottom: 0 }}
          >
            <div
              className="project-flex"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div
                className="project-flex-item"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div
                  className="image-block"
                  style={{
                    display: "flex",
                    width: "calc(100%)",
                    paddingTop: "1rem",
                  }}
                >
                  <img
                    style={{
                      alignSelf: "center",
                      width: "100%",
                      height: "auto",
                    }}
                    src="/thanks/thankscard_ktype.jpg"
                    alt="Thanks greeting card"
                  ></img>
                </div>

                <div
                  className="image-block"
                  style={{
                    display: "flex",
                    width: "calc(100%)",
                    paddingTop: "1rem",
                  }}
                >
                  <img
                    style={{
                      alignSelf: "center",
                      width: "100%",
                      height: "auto",
                    }}
                    src="/thanks/01_ProcessWIP_ktype.jpg"
                    alt="Lettering refinement process"
                  ></img>
                </div>

                <div
                  className="image-block"
                  style={{
                    display: "flex",
                    width: "calc(100%)",
                    paddingTop: "1rem",
                  }}
                >
                  <img
                    style={{
                      alignSelf: "center",
                      width: "100%",
                      height: "auto",
                    }}
                    src="/thanks/03_approach.jpg"
                    alt="Lettering bezier curves and anchor points"
                  ></img>
                </div>
              </div>
            </div>
          </div>

          {/* Services + Intro Paragraph - END */}

          {/* Next Project - START */}
          <div
            className="project-flex"
            style={{
              paddingTop: 150,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              className="project-flex-item"
              style={{
                width: "100%",
              }}
            >
              <Link to="/logos" onClick={() => window.scrollTo(0, 0)}>
                <button
                  className="project-navigation"
                  style={{
                    textAlign: "right",
                    paddingRight: 25,
                  }}
                >
                  Next project →
                </button>
              </Link>
            </div>
          </div>
          {/* Next Project - END */}

          {/* Let's work together - START */}
          <div
            className="background-color"
            style={{ backgroundColor: theme.colors.dark }}
          >
            <div className="centering">
              <div
                className="project-flex"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <div
                  className="project-flex-item"
                  style={{
                    margin: "0 auto",
                    width: "80%",
                    paddingBottom: 25,
                  }}
                >
                  <h1
                    style={{
                      color: theme.colors.white,
                    }}
                  >
                    Let's build together.
                  </h1>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "22px",
                      lineHeight: "44px",
                    }}
                  >
                    I enjoy contributing meaningful and well-planned logos that
                    are strong for your industry. If you're dreaming of a new
                    identity or are in need of a fresh update to an existing
                    logo, let's go!
                  </p>
                </div>

                <div
                  className="project-flex-item"
                  style={{
                    width: "50%",
                    textAlign: "center",
                  }}
                >
                  <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                    <button className="lets-start-button">LET'S START</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Let's work together - END */}
        </div>
      </div>
    </div>
  );
}
