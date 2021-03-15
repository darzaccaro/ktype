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
      <div className="content">
        {/* Project Title */}
        <div
          className="background-color"
          style={{ backgroundColor: theme.colors.light }}
        >
          <div className="centering-title">
            <h1 style={{ color: theme.colors.black, textAlign: "left" }}>
              Letter Love
            </h1>
          </div>
        </div>

        {/* Services + Intro Paragraph - START */}
        <div
          className="background-color"
          style={{ backgroundColor: theme.colors.black }}
        >
          <div className="centering-tags">
            <div
              className="project-flex"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "start",
                position: "relative",
                width: "100%",
              }}
            >
              <div className="project-flex-item">
                <h4
                  style={{
                    color: theme.colors.yellow,
                    margin: 0,
                    fontWeight: 700,
                    paddingBottom: 10,
                  }}
                >
                  SERVICES:
                </h4>
                <h4 className="service-tags">+ 3d Typography</h4>
                <h4 className="service-tags">+ Custom Lettering</h4>
              </div>

              <div
                className="project-flex-item"
                style={{
                  width: "calc(60%)",
                }}
              >
                <div className="intro-paragraph">
                  <p style={{ color: theme.colors.grey, marginTop: 0 }}>
                    This project uses an elegant typographic style built to
                    express my love for letters.
                  </p>
                  <p style={{ color: theme.colors.grey, margin: 0 }}>
                    Identified in my concept sketches, I progressed the idea of
                    using an entangled heart within the flourishes. This heart
                    also serves as a well-balanced container for the overall
                    piece. I interlaced the letters in 3D space to achieve the
                    desired effect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services + Intro Paragraph - END */}

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
                  marginBottom: "2rem",
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
            <Link to="/grand-place" onClick={() => window.scrollTo(0, 0)}>
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
                  Are you searching for an artist with lettering expertise to
                  elevate your brand's story? Well-designed letters will
                  captivate your audience and ensure it's clear about what you
                  stand for. Get in touch!
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
  );
}
