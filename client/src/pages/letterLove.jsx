import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import theme from "../theme";

export default function DailyRender() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    // Page fade in --- Start
    <div
      className="anim-fade-in"
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
          className="intro-flex"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <img
            style={{ width: "100%", height: "auto" }}
            src="/letter_love/letterlove-postwork-v2.png"
            alt="1"
          ></img>
        </div>

        <div
          className="project-flex"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <div
            className="project-flex-item"
            style={{
              width: "calc(30% - 60px)",
              paddingTop: 250,
              paddingRight: 60,
            }}
          >
            <h2>Letter Love</h2>
            <p>
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
              width: "70%",
              paddingTop: 250,
            }}
          >
            <img
              style={{ width: "100%", height: "auto" }}
              src="/letter_love/letterlove-postwork-v3.png"
              alt="1"
            ></img>
            <img
              style={{ width: "100%", height: "auto" }}
              src="/letter_love/letter-love-xray.jpg"
              alt="1"
            ></img>
          </div>

          <div
            className="project-flex-item"
            style={{
              width: "100%",
              paddingTop: 250,
            }}
          >
            <img
              style={{ width: "100%", height: "auto" }}
              src="/letter_love/letter-love-process.png"
              alt="1"
            ></img>
          </div>
        </div>
      </div>

      {/* Deliverables + Next Project - START */}
      <div className="centering">
        <div
          className="project-flex-item"
          style={{
            width: "50%",
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
                <span className="underline">Logotypes &amp; Trademarks</span>
              </h2>
            </div>
          </button>
        </Link>
      </div>
      {/* Deliverables + Next Project - END */}
    </div>
  );
}
