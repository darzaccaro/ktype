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
        <h4
          style={{
            color: isHover ? theme.colors.white : theme.colors.brown,
            textAlign: "center",
            padding: 50,
            marginBottom: 0,
            marginTop: 0
          }}
        >
          {text}
        </h4>
      </div>
    </Link>
  );
};

export default BarLink;
