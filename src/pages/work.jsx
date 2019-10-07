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
          margin: alignLeft ? 0 : "0 auto",
          padding: 15,
          paddingLeft: alignLeft ? theme.sizes.spacingV2 : 15
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

  function Card({ title, description, imgSrc, to, isMobile }) {
    const [visibility, setVisibility] = useState("hidden");
    if (isMobile) {
      return (
        <Link
          to={to}
          onClick={() => window.scrollTo(0, 0)}
          style={{ marginBottom: theme.sizes.spacingV3 }}
        >
          <div
            onMouseOver={() => setVisibility("visible")}
            onMouseLeave={() => setVisibility("hidden")}
          >
            <img src={imgSrc} width={"100%"} maxWidth="400px" alt={title}></img>
          </div>
          <CardTag
            title={title}
            description={description}
            visibility={"visible"}
            alignLeft
          />
        </Link>
      );
    } else {
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
            <CardTag
              title={title}
              description={description}
              visibility={visibility}
            />
          </div>
        </Link>
      );
    }
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
          fontSize: "27px",
          textAlign: "center",
          marginBottom: theme.sizes.spacingV1,
          padding: 20,
          lineHeight: "40px"
        }}
      >
        The strategic design studio of Kade Tyler&mdash;specializing in
        <br />
        thoughtful visual identities &amp; custom lettering.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent:
            width < theme.breakpoints.mobile ? "center" : "space-between",
          maxWidth:
            width < theme.breakpoints.mobile
              ? "100%"
              : theme.sizes.contentWidth,
          margin: "0 auto",
          marginBottom: theme.sizes.spacingV1,
          flexWrap: width < theme.breakpoints.mobile ? "wrap" : "nowrap"
        }}
      >
        {works.map((w, i) => (
          <Card
            isMobile={width < theme.breakpoints.mobile}
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
