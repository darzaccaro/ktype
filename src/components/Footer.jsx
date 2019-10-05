import React, { useState } from "react";
import theme from "../theme";

export default function Footer() {
  const [siteLinkColor, setSiteLinkColor] = useState(theme.colors.grey);
  return (
    <footer
      style={{
        backgroundColor: theme.colors.light,
        textAlign: "center"
      }}
    >
      <a href="mailto: hi@ktype.xyz">
        <div style={{ paddingTop: 200, paddingBottom: 200 }}>
          <p
            style={{
              fontSize: "2.8em",
              fontWeight: "bold",
              marginBottom: 16
            }}
          >
            hi@ktype.xyz
          </p>
          <p
            style={{
              fontFamily: theme.fonts.sans,
              letterSpacing: 6,
              fontWeight: 300,
              color: theme.colors.black,
              fontSize: 18
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
          <span
            style={{
              marginLeft: 10,
              display: "inline",
              color: theme.colors.grey
            }}
          >
            |
          </span>
          <a
            onMouseEnter={() => setSiteLinkColor(theme.colors.brown)}
            onMouseLeave={() => setSiteLinkColor(theme.colors.grey)}
            href="https://www.linkedin.com/in/darzaccaro/"
            style={{ marginLeft: 12, color: siteLinkColor }}
          >
            Site Credit
          </a>
        </span>
      </p>
    </footer>
  );
}
