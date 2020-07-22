import React from "react";
import theme from "../theme";
import BarLink from "./BarLink";

export default function WorkTemplateA({ title, description, images }) {
  return (
    <div className="anim-fade-in">
      <div
        style={{
          width: "100%",
          margin: "0 auto",
          marginBottom: theme.sizes.spacingV1 + 5,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          paddingLeft: theme.breakpoints.mobile ? theme.sizes.spacingV2 : 0,
        }}
      >
        <h1 style={{ display: "inline-block" }}>{title}</h1>
        <p
          style={{
            display: "inline-block",
            marginTop: theme.breakpoints.mobile ? 0 : 23,
            paddingRight: 0,
          }}
        >
          {description}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          margin: "0 auto",
          marginBottom: theme.sizes.spacingV1,
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
