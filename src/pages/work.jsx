import React, { useState } from "react";
import theme from "../theme";
import { Link } from "react-router-dom";
import useWindowWidth from "../hooks/useWindowWidth";

export default function Work() {
  const width = useWindowWidth();
  //const width = 400;
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

  function CardTag({ title, description, alignLeft, style }) {
    return (
      <div
        style={{
          backgroundColor: "white",
          maxWidth: theme.sizes.cardWidth - 85,
          maxHeight: theme.sizes.cardHeight / 4,
          position: "relative",
          top: alignLeft ? 0 : 25,
          margin: alignLeft ? 0 : "0 auto",
          padding: 15,
          paddingLeft: alignLeft ? theme.sizes.spacingV2 : 15,
          ...style
        }}
        className={"trans-fade"}
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
    const [tagOpacity, setTagOpacity] = useState(0);
    if (isMobile) {
      return (
        <Link
          to={to}
          onClick={() => window.scrollTo(0, 0)}
          style={{ marginBottom: theme.sizes.spacingV3 }}
        >
          <div>
            <img src={imgSrc} width={"100%"} maxWidth="400px" alt={title}></img>
          </div>
          <CardTag
            title={title}
            description={description}
            alignLeft
            style={{ opacity: 1 }}
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
            onMouseOver={() => setTagOpacity(1)}
            onMouseLeave={() => setTagOpacity(0)}
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
              style={{ opacity: tagOpacity }}
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
      className="anim-fade-in"
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
