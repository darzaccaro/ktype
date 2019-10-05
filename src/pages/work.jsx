import React, { useState } from "react";
import theme from "../theme";
import { Link } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function Work() {
  const { width } = useWindowDimensions();
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

  function CardTag({ title, description, alignLeft, visibility }) {
    return (
      <div
        style={{
          visibility,
          backgroundColor: "white",
          maxWidth: theme.sizes.cardWidth - 85,
          maxHeight: theme.sizes.cardHeight / 4,
          position: "relative",
          top: alignLeft ? 0 : 25,
          margin: "0 auto",
          padding: 15,
          paddingLeft: alignLeft ? 50 : 15
        }}
      >
        <h6
          style={{
            color: theme.colors.black,
            textAlign: alignLeft ? "left" : "center",
            marginBottom: 0
          }}
        >
          {title}
        </h6>
        <p
          style={{
            textAlign: alignLeft ? "left" : "center",
            marginTop: 0,
            fontStyle: "italic"
          }}
        >
          {description}
        </p>
      </div>
    );
  }

  function Card({ title, description, imgSrc, to }) {
    const [visibility, setVisibility] = useState("hidden");
    return (
      <Link
        to={to}
        onClick={() => window.scrollTo(0, 0)}
        style={{ marginBottom: theme.sizes.spacingV3 }}
      >
        <div
          onMouseOver={() => setVisibility("visible")}
          onMouseLeave={() => setVisibility("hidden")}
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: `${theme.sizes.cardWidth}px ${theme.sizes.cardHeight}px`,
            width: theme.sizes.cardWidth,
            height: theme.sizes.cardHeight
          }}
        >
          {width >= theme.breakpoints.work && (
            <CardTag
              title={title}
              description={description}
              visibility={visibility}
            />
          )}
        </div>
        {width < theme.breakpoints.work && (
          <CardTag
            title={title}
            description={description}
            visibility={"visible"}
            alignLeft
          />
        )}
      </Link>
    );
  }
  return (
    <div
      style={{
        marginTop: theme.sizes.spacingV1 - 65,
        width: "100%"
      }}
    >
      <p
        style={{
          fontSize: "1.5em",
          textAlign: "center",
          marginBottom: theme.sizes.spacingV1,
          padding: 20
        }}
      >
        The strategic visual design studio of Kade Tyler&mdash;specializing in
        <br />
        thoughtful visual identities &amp; custom lettering.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent:
            width < theme.breakpoints.work ? "center" : "space-between",
          maxWidth: theme.sizes.contentWidth,
          margin: "0 auto",
          marginBottom: theme.sizes.spacingV1,
          flexWrap: "wrap"
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
