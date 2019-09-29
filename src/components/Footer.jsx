import React from "react";
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
        <div style={{ paddingTop: 200, paddingBottom: 200 }}>
          <p style={{ fontSize: "2.8em", fontWeight: "bold" }}>hi@ktype.xyz</p>
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
          marginBottom: 0,
          fontSize: "0.8em"
        }}
      >
        All visual material &copy; Kade Tyler{" "}
        <span>
          <p style={{ marginLeft: 10, display: "inline" }}>|</p>
          <a
            href="https://www.linkedin.com/in/darzaccaro/"
            style={{ marginLeft: 15 }}
          >
            Site Credit
          </a>
        </span>
      </p>
    </footer>
  );
}
