import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import theme from "../theme";

export default function LetterLove() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    // Page fade in --- Start
    <div
      className="page-anim"
      style={{
        width: "100%",
      }}
    >
      <div
        className="centering"
        style={{
          paddingBottom: 0,
        }}
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
                width: "calc((100% / 1) - 0rem)",
              }}
            >
              <img
                style={{
                  alignSelf: "center",
                  width: "100%",
                  height: "auto",
                }}
                src="/letter_love/letterlove-postwork-v2.png"
                alt="Letter Love Chrome"
              ></img>
            </div>
          </div>

          <div
            className="project-flex-item"
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "60%",
              margin: "0 auto",
              paddingTop: 250,
            }}
          >
            <h2>Letter Love</h2>
            <p style={{ marginTop: 0 }}>
              This project uses an elegant typographic style built to express my
              love for letters. From my quick concept sketches, I knew I wanted
              to progress the idea of using an entangled heart within the
              flourishes (which also serves as a well-balanced container). I
              interlaced the letters in 3D space to achieve this effect. As I
              explored more noticeable heart alternatives, I decided that
              subtlety broke the cliché in a pleasant way.
            </p>
          </div>

          <div
            className="project-flex-item"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 250,
              width: "100%",
            }}
          >
            <div
              className="image-block"
              style={{
                display: "flex",
                width: "calc((100% / 1) - 0rem)",
                marginBottom: "2rem",
              }}
            >
              <img
                style={{
                  alignSelf: "center",
                  width: "100%",
                  height: "auto",
                }}
                src="/letter_love/letterlove-postwork-v3.png"
                alt="Letter Love: purple/blue gradient"
              ></img>
            </div>

            <div
              className="image-block"
              style={{
                display: "flex",
                width: "calc((100% / 1) - 0rem)",
                padding: "0% 10%",
                marginBottom: "2rem",
              }}
            >
              <img
                style={{
                  alignSelf: "center",
                  width: "100%",
                  height: "auto",
                }}
                src="/letter_love/letter-love-xray.jpg"
                alt="Process of Letter Love"
              ></img>
            </div>

            <div
              className="image-block"
              style={{
                display: "flex",
                width: "calc((100% / 1) - 0rem)",
                padding: "0% 10%",
              }}
            >
              <img
                style={{
                  alignSelf: "center",
                  width: "100%",
                  height: "auto",
                }}
                src="/letter_love/letter-love-process.png"
                alt="Side view of Letter Love to show dimensional effects"
              ></img>
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
              <li>+ 3D Typography</li>
              <hr className="spacer-line"></hr>
              <li>+ Custom Lettering</li>
              <hr className="spacer-line"></hr>
            </ul>
          </div>

          <div
            className="project-flex-item"
            style={{
              width: "100%",
            }}
          >
            <Link to="/logos" onClick={() => window.scrollTo(0, 0)}>
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
                      Logotypes &amp; Trademarks
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
