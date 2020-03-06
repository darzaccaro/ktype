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
              "Humility was self-initiated as a way of developing a logotype with a sense of friendliness and modesty. Typically, I take the time to perfect a sketch before I move onto the computer. However, for this project, I wanted to explore digitally as quickly as possible — so really rough thumbnail sketches had to suffice."
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
              "The resemblance of the ‘H’ and ‘Y’ adds a familiar touch while also providing an enclosure for the tagline/wordmark. With so much letterform similarity, however, it was important to ensure that every element was unique, but similar enough to maintain consistency. "
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
          txt: {
            title: "TAGLINE EXPLORATION",
            text:
              "Although uppercase nicely contrasted the lowercase wordmark, finalizing a lowercase tagline felt more appropriate due to the humbleness of the project."
          }
        },
        {
          img: {
            src: "/humility/06_tagline.jpg",
            alt: "Digital tagline testing"
          }
        },

        {
          img: {
            src: "/humility/07_image.jpg",
            alt: "The final logotype on a blurred image of a sewing machine"
          }
        }
      ]}
    />
  );
}
