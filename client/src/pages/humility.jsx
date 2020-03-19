import React from "react";
import WorkTemplateB from "../components/WorkTemplateB";

export default function Humility() {
  return (
    <WorkTemplateB
      title="Humility"
      description="Services: Identity Design, Custom Lettering"
      data={[
        { img: { src: "/humility/01_logotype.jpg", alt: "Humility logotype" } },
        {
          img: {
            src: "/humility/02_outline.jpg",
            alt: "Filled and outlined version of the logotype"
          }
        },
        {
          txt: {
            title: "PROJECT INITIATION",
            text:
              "Humility was self-initiated as a way of developing a logotype with a sense of friendliness and modesty. Typically, I take the time to perfect sketches before I move onto the computer. However, for this project I wanted to explore digitally as quickly as possible, so I moved forward with loose preliminary sketches."
          }
        },
        {
          img: {
            src: "/humility/roughsketches.jpg",
            alt: "Scan of quick logo sketches."
          }
        },
        {
          img: {
            src: "/humility/03_explore.jpg",
            alt:
              "On the computer making digital explorations and refinements to the logo"
          }
        },
        {
          txt: {
            title: "LOGOTYPE REVISIONS",
            text:
              "The resemblance of the ‘H’ and ‘Y’ adds a familiar touch while also providing an enclosure for the tagline/wordmark. Yet with so much letterform similarity, it was important to ensure that every element was unique but similar enough to be consistent."
          }
        },
        {
          img: {
            src: "/humility/04_refinement.jpg",
            alt: "Wordmark refinement pencil annotations"
          }
        },
        {
          img: {
            src: "/humility/05_beziers.jpg",
            alt: "Vector bezier curves and handles"
          }
        },
        {
          img: {
            src: "/humility/humility_tote.jpg",
            alt: "The final logotype on a tote bag."
          }
        },
        {
          img: {
            src: "/humility/07_image.jpg",
            alt: "The final logotype on a blurred background image."
          }
        }
      ]}
    />
  );
}
