import { useState, useEffect } from "react";

function getWindowHeight() {
  return window.innerHeight;
}

export default function useWindowHeight() {
  // lastDimensions is used because iOS generates arbitrary resize events when scrolling. :(
  const [windowHeight, setWindowHeight] = useState(getWindowHeight());
  const [lastHeight, setLastHeight] = useState(windowHeight);

  useEffect(() => {
    function handleResize() {
      const newHeight = getWindowHeight();
      if (newHeight !== lastHeight) {
        setWindowHeight(newHeight);
        setLastHeight(newHeight);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return windowHeight;
}
