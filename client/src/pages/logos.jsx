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
      <div
        className="background-color"
        style={{ backgroundColor: theme.colors.light }}
      >
        <div className="centering">
          {/* Project Intro */}
          <h1>Logotypes &amp; Trademarks</h1>

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
                paddingTop: 150,
                width: "100%",
              }}
            >
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
                  src="/logos/variant-v1.svg"
                  alt="Variant Logotype V1"
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
                  src="/logos/variant-v2-update.svg"
                  alt="Variant Logotype V2"
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
                  src="/logos/humility-tagline.svg"
                  alt="Humility Logotype"
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
                  src="/logos/d-mark.svg"
                  alt="D Logomark"
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
                  src="/logos/yield-and-co-script.svg"
                  alt="Yield Script Logotype"
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
                  src="/logos/yield-and-co-serif.svg"
                  alt="Yield Serif Logotype"
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
                  src="/logos/plant-mark.svg"
                  alt="Plant Logomark"
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
                  src="/logos/m-mark.svg"
                  alt="M Logomark"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deliverables + Next Project - START */}
      <div className="centering">
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
              margin: "0 auto",
              width: "60%",
              paddingBottom: 150,
            }}
          >
            <h2>Deliverables</h2>
            <ul className="services-stack">
              <li>+ Brand Stategy</li>
              <hr className="spacer-line"></hr>
              <li>+ Identity Design</li>
              <hr className="spacer-line"></hr>
            </ul>
          </div>

          <div
            className="project-flex-item"
            style={{
              width: "100%",
            }}
          >
            <Link to="/lettering" onClick={() => window.scrollTo(0, 0)}>
              <button
                className="k-button"
                style={{
                  width: "100%",
                  textAlign: "right",
                  height: 180,
                  paddingRight: 50,
                }}
              >
                <div>
                  <p
                    style={{
                      color: theme.colors.white,
                      letterSpacing: 2,
                      margin: 0,
                    }}
                  >
                    NEXT PROJECT:
                  </p>
                  <h2 style={{ margin: -5 }}>
                    <span className="underline-yellow">
                      Lettering Collection
                    </span>
                  </h2>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Deliverables + Next Project - END */}
    </div>
  );
}
