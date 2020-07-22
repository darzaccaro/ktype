import React from "react";
import theme from "../theme";
import BarLink from "./BarLink";

export default function WorkTemplateA({ title, description, data }) {
  return (
    <div className="anim-fade-in">
      <div
        style={{
          width: "100%",
          margin: "0 auto",
          marginBottom: theme.sizes.spacingV1 + 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <h1
          style={{
            display: "inline-block",
            textAlign: "center",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            textAlign: "center",
            color: theme.colors.grey,
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
        {data.map((e, i) => {
          if (e.img) {
            return (
              <img
                key={i}
                src={e.img.src}
                alt={e.img.alt}
                style={{ marginBottom: theme.sizes.spacingV2, width: "100%" }}
              />
            );
          } else if (e.txt) {
            return (
              <div
                style={{
                  paddingLeft: theme.breakpoints.mobile
                    ? theme.sizes.spacingV2
                    : 0,
                  marginBottom: theme.sizes.spacingV3 - 2,
                  width: "100%",
                }}
              >
                <h2
                  style={{
                    color: theme.colors.grey,
                    marginTop: theme.sizes.spacingV3 - 15,
                    fontWeight: "normal",
                    fontSize: 15,
                  }}
                >
                  {e.txt.title}
                </h2>
                <p>{e.txt.text}</p>
              </div>
            );
          }
        })}
      </div>
      <BarLink text="VIEW ALL WORK" to="/work" />
    </div>
  );
}
