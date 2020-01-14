import React from "react";
import WorkTemplateB from "../components/WorkTemplateB";

export default function Communicate() {
  return (
    <WorkTemplateB
      title="Dimensional Type"
      description="Services: 3D Type, Custom Lettering"
      data={[
        {
          img: {
            src: "/dimensional_type/d_edit.jpg",
            alt:
              "Hyper-realistic 3D custom typography. A fancy letter 'D' in gold on a red background"
          }
        },

        {
          img: {
            src: "/dimensional_type/d-process.jpg",
            alt:
              "Left image: Untextured letter 'D' to show my process. Right image: Vector anchor points of the letter 'D' to show my process"
          }
        },

        {
          img: {
            src: "/dimensional_type/e-V2-edit.jpg",
            alt:
              "3D custom typography of the letter 'E' in a purple and blue color scheme"
          }
        },

        {
          img: {
            src: "/dimensional_type/f-edit.jpg",
            alt: "3D lettering of the letter 'f' in a fancy copper scheme"
          }
        }
      ]}
    />
  );
}
