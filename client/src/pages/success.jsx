import React from "react";
import theme from "../theme";
import useWindowWidth from "../hooks/useWindowWidth";
export default function Success() {
  const width = useWindowWidth();
  return (
    <div
      className="anim-fade-in"
      style={{
        marginTop: theme.sizes.spacingV1 - 65,
        width: "100%"
      }}
    >
      <div
        style={{
          maxWidth:
            width < theme.breakpoints.mobile
              ? "325px"
              : theme.sizes.contentWidth,
          margin: "0 auto",
          marginTop: 64,
          marginBottom: theme.sizes.spacingV1 - 10,
          minHeight: 800
        }}
      >
        <h1>Thank you for your submission!</h1>
        <p>
          We'll be in touch as soon as possible. I do my best to respond within
          1-2 days.
        </p>
      </div>
    </div>
  );
}
