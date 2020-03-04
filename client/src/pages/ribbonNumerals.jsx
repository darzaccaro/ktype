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
            alt:
              "Hyper-realistic 3D custom typography. A fancy letter 'D' in gold on a red background"
          }
        },

        {
          img: {
            src: "/ribbon_numerals/1-postwork-1x1.png",
            alt:
              "Left image: Untextured letter 'D' to show my process. Right image: Vector anchor points of the letter 'D' to show my process"
          }
        },

        {
          img: {
            src: "/ribbon_numerals/2-postwork-1x1.png",
            alt:
              "3D custom typography of the letter 'E' in a purple and blue color scheme"
          }
        }
      ]}
    />
  );
}
