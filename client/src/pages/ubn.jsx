import React from "react";
import WorkTemplateB from "../components/WorkTemplateB";

export default function UBN() {
  return (
    <WorkTemplateB
      title="Undefined By Numbers"
      description="Services: Custom Lettering"
      data={[
        {
          img: {
            src: "/ubn/01_textured_black.jpg",
            alt:
              "Undefined By Numbers: white lettering on a textured black background"
          }
        },
        {
          txt: {
            title: "PROJECT INITIATION",
            text:
              "A bold reminder that the work we create is undefined by social media popularity. The number of likes or shares dictated by an empty algorithm does not reflect the quality of our work. Design to evoke emotion, pleasure, or imagination—don't design for algorithms."
          }
        },
        {
          img: {
            src: "/ubn/02_white_full.jpg",
            alt: "Undefined By Numbers: black lettering on a white background"
          }
        },
        {
          img: {
            src: "/ubn/03_strokes.jpg",
            alt:
              "Analogue brush strokes using ink on paper to show how the lettering was created"
          }
        }
      ]}
    />
  );
}
