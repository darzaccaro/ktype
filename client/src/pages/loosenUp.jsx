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
            src: "/loosen_up/loosen-up-final.jpg",
            alt:
              "Brown handlettering on a yellow background that reads 'Loosen Up'"
          }
        },
        {
          txt: {
            title: "PROJECT INITIATION",
            text:
              "An opportunity to explore looser styles of lettering with bouncy rhythm and meandering baselines. The lettering was influenced by rapid calligraphy with a chisel tip marker."
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
