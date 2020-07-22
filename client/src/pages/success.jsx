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
          <h1>Thank you for your submission!</h1>
          <p style={{ textAlign: "center" }}>
            We'll be in touch as soon as possible. I do my best to respond
            within 24 hours.
          </p>
          <p style={{ textAlign: "center" }}>
            <Link to="/work" onClick={() => window.scrollTo(0, 0)}>
              <span className="underline">Back to Work</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
