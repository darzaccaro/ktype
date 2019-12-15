import React from "react";
import WorkTemplateB from "../components/WorkTemplateB";

export default function Communicate() {
  return (
    <WorkTemplateB
      title="Communicate"
      description="Services: Custom Lettering"
      data={[
        {
          img: {
            src: "/communicate/01_full.jpg",
            alt:
              "Communicate: orange lettering in a formal spencerian style on a textured black background"
          }
        },
        {
          txt: {
            title: "PROJECT INITIATION",
            text:
              "The task was to develop an encouraging (but courteous) message directed towards aspirational self-improvement. The decision for a flourished formal script was fitting as it provided the soft sense of delicacy I was looking for. The script was drawn by hand, vectorized, and textured using analogue and digital methods."
          }
        },
        {
          img: {
            src: "/communicate/02_detail.jpg",
            alt: "Communicate lettering zoomed in to show detail"
          }
        }
      ]}
    />
  );
}
