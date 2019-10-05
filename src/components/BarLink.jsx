import React, { useState } from "react";
import { Link } from "react-router-dom";
import theme from "../theme";

const BarLink = ({ text, to }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Link
      to={to}
      onClick={() => window.scrollTo(0, 0)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        style={{
          backgroundColor: isHover ? theme.colors.brown : theme.colors.white
        }}
      >
        <h2
          style={{
            color: isHover ? theme.colors.white : theme.colors.brown,
            textAlign: "center",
            padding: 50,
            paddingTop: 55,
            marginBottom: 0,
            fontSize: 21
          }}
        >
          {text}
        </h2>
      </div>
    </Link>
  );
};

export default BarLink;
