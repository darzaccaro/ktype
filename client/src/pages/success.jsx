import React from "react";
import theme from "../theme";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Success() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div
      className="page-anim"
      style={{
        width: "100%",
      }}
    >
      <div className="content">
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
                  Thank you for your submission!
                </h1>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "23px",
                    lineHeight: "38px",
                  }}
                >
                  We'll be in touch as soon as possible. I do my best to respond
                  within 24 hours.
                </p>
              </div>

              <div
                className="project-flex-item"
                style={{
                  width: "50%",
                  textAlign: "center",
                }}
              >
                <Link to="/work" onClick={() => window.scrollTo(0, 0)}>
                  <button className="lets-start-button">BACK TO WORK</button>
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
