import { useState, useEffect } from "react";

function getWindowWidth() {
  return window.innerWidth;
}

export default function useWindowWidth() {
  // lastDimensions is used because iOS generates arbitrary resize events when scrolling. :(
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  const [lastWidth, setLastWidth] = useState(windowWidth);

  useEffect(() => {
    function handleResize() {
      const newWidth = getWindowWidth();
      if (newWidth !== lastWidth) {
        setWindowWidth(newWidth);
        setLastWidth(newWidth);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return windowWidth;
}
