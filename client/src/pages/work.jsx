import React, { useState } from "react";
import theme from "../theme";
import { Link } from "react-router-dom";
import useWindowWidth from "../hooks/useWindowWidth";

export default function Work() {
  const width = useWindowWidth();
  const works = [
    {
      title: "LETTERING SET",
      description: "Custom Lettering",
      imgSrc: "/work/01_lettering_set.jpg",
      to: "/lettering-set"
    },
    {
      title: "HUMILITY",
      description: "Identity Design",
      imgSrc: "/work/02_humility.jpg",
      to: "/humility"
    },
    {
      title: "COMMUNICATE",
      description: "Custom Lettering",
      imgSrc: "/work/03_communicate.jpg",
      to: "/communicate"
    },
    {
      title: "UNDEFINED BY NUMBERS",
      description: "Custom Lettering",
      imgSrc: "/work/04_undefined_by_numbers.jpg",
      to: "/undefined-by-numbers"
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
            marginTop: 13,
            marginBottom: 0,
            lineHeight: 1
          }}
        >
          {title}
        </h6>
        <p
          style={{
            textAlign: alignLeft ? "left" : "center",
            marginTop: 0,
            fontStyle: "italic",
            fontSize: 16,
            color: theme.colors.grey,
            letterSpacing: 0
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
          lineHeight: "44px"
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
          marginBottom: theme.sizes.spacingV1 - 10,
          flexWrap: "wrap"
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
