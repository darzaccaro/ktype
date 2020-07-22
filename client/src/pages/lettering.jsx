import React from "react";
import theme from "../theme";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Lettering() {
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
        className="background-color"
        style={{ backgroundColor: theme.colors.light }}
      >
        <div className="centering">
          {/* Project Intro */}
          <h1>Lettering Collection</h1>
          <p
            style={{
              textAlign: "center",
            }}
          >
            As a lettering artist, I am to convey messages with character and
            emotion through technically precise letters.
          </p>

          <div
            className="project-flex"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <div
              className="project-flex-item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 150,
              }}
            >
              <img
                style={{
                  width: "calc(50% - 40px)",
                  height: "auto",
                  margin: 20,
                }}
                src="/lettering/artiswork.jpg"
                alt="Art Is Work"
              ></img>
              <img
                style={{
                  width: "calc(50% - 40px)",
                  height: "auto",
                  margin: 20,
                }}
                src="/lettering/loosenup.svg"
                alt="Loosen Up"
              ></img>

              <img
                style={{
                  width: "calc(60% - 50px)",
                  height: "auto",
                  margin: 20,
                }}
                src="/lettering/thanks.svg"
                alt="Thanks"
              ></img>
              <img
                className="rotate"
                style={{
                  width: "calc(40% - 50px)",
                  height: "auto",
                  margin: 30,
                }}
                src="/lettering/letter-n.svg"
                alt="Letter N"
              ></img>

              <img
                style={{
                  width: "calc(100% - 20px)",
                  height: "auto",
                  margin: 20,
                }}
                src="/lettering/jfs.svg"
                alt="JFS"
              ></img>

              <img
                style={{
                  width: "calc(33.33% - 40px)",
                  height: "auto",
                  margin: 20,
                }}
                src="/lettering/letter-a.svg"
                alt="Letter A"
              ></img>
              <img
                style={{
                  width: "calc(33.33% - 40px)",
                  height: "auto",
                  margin: 20,
                }}
                src="/lettering/letter-b.svg"
                alt="Letter B"
              ></img>
              <img
                style={{
                  width: "calc(33.33% - 40px)",
                  height: "auto",
                  margin: 20,
                }}
                src="/lettering/letter-c.svg"
                alt="Letter C"
              ></img>

              <img
                style={{
                  width: "calc(50% - 40px)",
                  height: "auto",
                  margin: 20,
                  paddingTop: 80,
                }}
                src="/lettering/sunday.svg"
                alt="Sunday"
              ></img>
              <img
                style={{
                  width: "calc(50% - 40px)",
                  height: "auto",
                  margin: 20,
                  paddingTop: 80,
                }}
                src="/lettering/refine.svg"
                alt="Refine"
              ></img>
              <img
                style={{
                  width: "calc(50% - 40px)",
                  height: "auto",
                  margin: 20,
                }}
                src="/lettering/ubn-collection.jpg"
                alt="Undefined By Numbers"
              ></img>
              <img
                style={{
                  width: "calc(50% - 40px)",
                  height: "auto",
                  margin: 20,
                }}
                src="/lettering/t-flourished.svg"
                alt="Letter T"
              ></img>

              <img
                style={{
                  width: "calc(100% - 20px)",
                  height: "auto",
                  margin: 20,
                }}
                src="/lettering/communicate.svg"
                alt="Communicate"
              ></img>

              <img
                style={{
                  width: "calc(50% - 40px)",
                  height: "auto",
                  margin: 20,
                }}
                src="/lettering/faux.svg"
                alt="Faux"
              ></img>
              <img
                style={{
                  width: "calc(50% - 40px)",
                  height: "auto",
                  margin: 20,
                }}
                src="/lettering/surreal.svg"
                alt="Surreal"
              ></img>

              <img
                style={{
                  width: "calc(50% - 40px)",
                  height: "auto",
                  margin: 20,
                }}
                src="/lettering/balance.svg"
                alt="Balance"
              ></img>
              <img
                style={{
                  width: "calc(50% - 40px)",
                  height: "auto",
                  margin: 20,
                }}
                src="/lettering/rhythm.svg"
                alt="Rhythm"
              ></img>
            </div>
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
            <li>+ Custom Lettering</li>
            <hr className="spacer-line"></hr>
          </ul>
        </div>

        <Link to="/daily-render" onClick={() => window.scrollTo(0, 0)}>
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
                <span className="underline">Daily Render</span>
              </h2>
            </div>
          </button>
        </Link>
      </div>
      {/* Deliverables + Next Project - END */}
    </div>
  );
}
