import React from "react";
import WorkTemplateB from "../components/WorkTemplateB";

export default function RibbonNumerals() {
  return (
    <WorkTemplateB
      title="Ribbon Numerals"
      description="Services: 3D Typography, Custom Lettering"
      data={[
        {
          img: {
            src: "/ribbon_numerals/0-postwork-1x1.png",
            alt: "A 3D typographic render of a number 0 in a ribbon theme."
          }
        },
        {
          txt: {
            title: "PROJECT INITIATION",
            text:
              "An elegant typographic style aimed to incorporate the behavior of ribbons. With every 3D type project, I always focus on the quality of the flat, 2D letterforms first. The numerals were later turned into ribbon using Cinema 4D + Arnold Render."
          }
        },
        {
          img: {
            src: "/ribbon_numerals/1-postwork-1x1.png",
            alt: "A 3D typographic render of a number 1 in a ribbon theme."
          }
        },
        {
          img: {
            src: "/ribbon_numerals/2-postwork-1x1.png",
            alt: "A 3D typographic render of a number 2 in a ribbon theme."
          }
        }
      ]}
    />
  );
}
