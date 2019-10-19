import React, { useState } from "react";
import { Link } from "react-router-dom";
import theme from "../theme";
import useWindowWidth from "../hooks/useWindowWidth";

const BarLink = ({ text, to }) => {
  const [isHover, setIsHover] = useState(false);
  const width = useWindowWidth();
  return (
    <Link
      to={to}
      onClick={() => window.scrollTo(0, 0)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        style={{
          transition: "background-color 0.4s, color 0.2s",
          backgroundColor: isHover ? theme.colors.brown : theme.colors.white
        }}
      >
        <h2
          style={{
            color: isHover ? theme.colors.white : theme.colors.brown,
            textAlign: "center",
            padding: 50,
            paddingLeft: width > theme.breakpoints.mobile ? 50 : 10,
            paddingRight: width > theme.breakpoints.mobile ? 50 : 10,
            paddingTop: 55,
            marginBottom: 0,
            fontSize: width > theme.breakpoints.mobile ? 21 : 18,
            letterSpacing: 10
          }}
        >
          {text}
        </h2>
      </div>
    </Link>
  );
};

export default BarLink;
