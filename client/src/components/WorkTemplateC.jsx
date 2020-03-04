import React from "react";
import theme from "../theme";
import useWindowWidth from "../hooks/useWindowWidth";

{
  /* WorkTemplateC was created to remove BarLink footer. */
}

export default function WorkTemplateA({ title, description, data }) {
  const windowWidth = useWindowWidth();
  return (
    <div className="anim-fade-in">
      <div
        style={{
          maxWidth: theme.sizes.contentWidth,
          margin: "0 auto",
          marginBottom: theme.sizes.spacingV1 + 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexWrap: "wrap",
          paddingLeft:
            windowWidth < theme.breakpoints.mobile ? theme.sizes.spacingV2 : 0
        }}
      >
        <h1 style={{ display: "inline-block" }}>{title}</h1>
        <p
          style={{
            color: theme.colors.grey,
            fontStyle: "italic"
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
                  paddingLeft:
                    windowWidth < theme.breakpoints.mobile
                      ? theme.sizes.spacingV2
                      : 0,
                  marginBottom: theme.sizes.spacingV3 - 2,
                  width: windowWidth < theme.breakpoints.mobile ? "85%" : "65%"
                }}
              >
                <h2
                  style={{
                    color: theme.colors.grey,
                    marginTop: theme.sizes.spacingV3 - 15,
                    fontWeight: "normal",
                    fontSize: 15
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
      {/* BarLink footer removed so that embedded video can be inserted before "VIEW ALL WORK" */}
    </div>
  );
}
