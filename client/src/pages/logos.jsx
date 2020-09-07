import React from "react";
import theme from "../theme";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Logos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    // Page fade in
    <div
      className="page-anim"
      style={{
        width: "100%",
      }}
    >
      {/* Project Title + Services - START */}
      <div
        className="background-color"
        style={{ backgroundColor: theme.colors.black }}
      >
        <div className="centering">
          <h1 style={{ color: theme.colors.white, textAlign: "center" }}>
            Logotypes &amp; Trademarks
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
              <h4 className="service-tags">+ Brand Strategy</h4>
            </div>
            <div className="project-flex-item-tags">
              <h4 className="service-tags">+ Identity Design</h4>
            </div>
            <div className="project-flex-item-tags">
              <h4 className="service-tags">+ Logotype Design</h4>
            </div>
          </div>
        </div>
      </div>
      {/* Project Title + Services - END */}

      <div
        className="background-color"
        style={{ backgroundColor: theme.colors.light }}
      >
        <div className="centering-logos">
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
                  width: "calc((100% / 2) - 1rem)",
                  marginBottom: "2rem",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/logos/humility.svg"
                  alt="Humility Logotype"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                  marginBottom: "2rem",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/logos/d-mark.svg"
                  alt="D Logomark"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                  marginBottom: "2rem",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/logos/variant.svg"
                  alt="Variant Logotype V1"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                  marginBottom: "2rem",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/logos/variant-v2.svg"
                  alt="Variant Logotype V2"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                  marginBottom: "2rem",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/logos/yield-serif.svg"
                  alt="Yield Serif Logotype"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                  marginBottom: "2rem",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/logos/yield-script.svg"
                  alt="Yield Script Logotype"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                  marginBottom: "2rem",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/logos/plant-mark.svg"
                  alt="Plant Logomark"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                  marginBottom: "2rem",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/logos/m-mark.svg"
                  alt="M Logomark"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/logos/ktype-script.svg"
                  alt="KTYPE Logotype"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/logos/pen-gods.png"
                  alt="Griffin Badge"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Project - START */}
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
            width: "100%",
          }}
        >
          <Link to="/lettering" onClick={() => window.scrollTo(0, 0)}>
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
                  fontSize: "23px",
                  lineHeight: "38px",
                }}
              >
                I enjoy contributing meaningful and well-planned logos that are
                strong for your industry. If you're dreaming of a new identity
                or are in need of a fresh update to an existing logo, let's go!
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
  );
}
