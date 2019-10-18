import React, { useState } from "react";
import theme from "../theme";
import useWindowWidth from "../hooks/useWindowWidth";

export default function Footer() {
  const [siteLinkColor, setSiteLinkColor] = useState(theme.colors.grey);
  const width = useWindowWidth();
  return (
    <footer
      style={{
        backgroundColor: theme.colors.white,
        textAlign: "center",
        width: "100%"
      }}
    >
      <a href="mailto: hi@ktype.xyz">
        <div
          style={{
            margin: "0 auto",
            backgroundColor: theme.colors.light
          }}
          className={"trans-shrink"}
        >
          <p
            style={{
              fontSize: width > theme.breakpoints.mobile ? "2.8em" : "2.4em",
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
              fontSize: width > theme.breakpoints.mobile ? 18 : 15
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
            onMouseEnter={() => {
              setSiteLinkColor(theme.colors.brown);
            }}
            onMouseLeave={() => {
              setSiteLinkColor(theme.colors.grey);
            }}
            href="https://www.linkedin.com/in/darzaccaro/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: 12, color: siteLinkColor }}
          >
            Site Credit
          </a>
        </span>
      </p>
    </footer>
  );
}
