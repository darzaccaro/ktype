import React from "react";
import theme from "../theme";
import BarLink from "./BarLink";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function WorkTemplateA({ title, description, images }) {
  const { width } = useWindowDimensions();
  return (
    <div>
      <div
        style={{
          maxWidth: theme.sizes.contentWidth,
          margin: "0 auto",
          marginBottom: theme.sizes.spacingV1,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          paddingLeft:
            width < theme.breakpoints.mobile ? theme.sizes.spacingV2 : 0
        }}
      >
        <h1 style={{ display: "inline-block" }}>{title}</h1>
        <p
          style={{
            display: "inline-block",
            marginTop: width < theme.breakpoints.mobile ? 0 : 23
          }}
        >
          {description}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: theme.sizes.contentWidth,
          margin: "0 auto",
          marginBottom: theme.sizes.spacingV1
        }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            style={{ marginBottom: theme.sizes.spacingV2, width: "100%" }}
          />
        ))}
      </div>
      <BarLink text="VIEW ALL WORK" to="/work" />
    </div>
  );
}
