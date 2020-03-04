import React from "react";
import WorkTemplateB from "../components/WorkTemplateB";

export default function LoosenUp() {
  return (
    <WorkTemplateB
      title="Loosen Up"
      description="Services: Custom Lettering"
      data={[
        {
          img: {
            src: "/loosen_up/loosenup.jpg",
            alt:
              "Brown handlettering on a yellow background that reads 'Loosen Up'"
          }
        },
        {
          txt: {
            title: "PROJECT INITIATION",
            text:
              "An opportunity to explore looser styles of lettering with bouncy rhythm and meandering baselines."
          }
        },
        {
          img: {
            src: "/loosen_up/loosenup-bw.jpg",
            alt: "Black and white image of handlettering that reads 'Loosen Up'"
          }
        }
      ]}
    />
  );
}
