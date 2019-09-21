import React from "react";
import theme from "../theme";
import BarLink from "./BarLink";

export default function WorkTemplateA({ title, description, images }) {
  return (
    <div>
      <div
        style={{
          width: theme.sizes.contentWidth,
          margin: "0 auto",
          marginBottom: theme.sizes.spacingV1,
          overflow: "hidden"
        }}
      >
        <h1 style={{ display: "inline-block" }}>{title}</h1>
        <p
          style={{
            display: "inline-block",
            float: "right",
            marginTop: 35
          }}
        >
          {description}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: theme.sizes.contentWidth,
          margin: "0 auto",
          marginBottom: theme.sizes.spacingV1
        }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            width={theme.sizes.contentWidth}
            style={{ marginBottom: theme.sizes.spacingV2 }}
          />
        ))}
      </div>
      <BarLink text="VIEW ALL WORK" to="/work" />
    </div>
  );
}
