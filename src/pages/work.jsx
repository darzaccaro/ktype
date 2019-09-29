import React, { useState } from "react";
import theme from "../theme";
import { Link } from "react-router-dom";

export default function Work() {
  const works = [
    {
      title: "LETTERING SET",
      description: "Custom Lettering",
      imgSrc: "/work/01_Thumbnail_LetteringSet.jpg",
      to: "/lettering-set"
    },
    {
      title: "SKETCHBOOK",
      description: "Custom Lettering",
      imgSrc: "/work/02_Thumbnail_Sketchbook.jpg",
      to: "/sketchbook"
    }
  ];
  function Card({ title, description, imgSrc, to }) {
    const [visibility, setVisibility] = useState("hidden");
    return (
      <Link to={to}>
        <div
          onMouseOver={() => setVisibility("visible")}
          onMouseLeave={() => setVisibility("hidden")}
          style={{
            backgroundImage: `url(${imgSrc})`,
            width: theme.sizes.cardWidth,
            height: theme.sizes.cardHeight
          }}
        >
          <div
            style={{
              visibility,
              backgroundColor: "white",
              width: theme.sizes.cardWidth - 85,
              height: theme.sizes.cardHeight / 4,
              position: "relative",
              top: 25,
              margin: "0 auto",
              padding: 15
            }}
          >
            <h6
              style={{
                color: theme.colors.black,
                textAlign: "center",
                marginBottom: 0
              }}
            >
              {title}
            </h6>
            <p
              style={{
                textAlign: "center",
                marginTop: 0,
                fontStyle: "italic"
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <div
      style={{
        marginTop: theme.sizes.spacingV1
      }}
    >
      <p
        style={{
          fontSize: "1.5em",
          textAlign: "center",
          marginBottom: theme.sizes.spacingV1
        }}
      >
        The strategic visual design studio of Kade Tyler&mdash;specializing in
        <br />
        thoughtful visual identities &amp; custom lettering.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: theme.sizes.contentWidth,
          margin: "0 auto",
          marginBottom: theme.sizes.spacingV1
        }}
      >
        {works.map((w, i) => (
          <Card
            key={i}
            title={w.title}
            description={w.description}
            imgSrc={w.imgSrc}
            to={w.to}
          />
        ))}
      </div>
    </div>
  );
}
