import React from "react";
import { Link } from "react-router-dom";
import theme from "../theme";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: theme.colors.light,
        textAlign: "center"
      }}
    >
      <a href="mailto: hi@ktype.xyz">
        <div style={{ padding: 200 }}>
          <p style={{ fontSize: "3em", fontWeight: "bold" }}>hi@ktype.xyz</p>
          <p
            style={{
              fontFamily: theme.fonts.sans,
              letterSpacing: theme.sizes.letterSpacingWide,
              fontWeight: 300
            }}
          >
            LET'S START A PROJECT
          </p>
        </div>
      </a>
      <p
        style={{
          backgroundColor: theme.colors.white,
          padding: 25,
          marginBottom: 0
        }}
      >
        All visual material &copy; Kade Tyler{" "}
        <span>
          <Link to="/credits">| Site Credit</Link>
        </span>
      </p>
    </footer>
  );
}
