import React from "react";
import WorkTemplateC from "../components/WorkTemplateC";
import ResponsivePlayer from "../components/ResponsivePlayer";
import BarLink from "../components/BarLink";

export default function TapedNumerals() {
  return (
    <div>
      <WorkTemplateC
        title="Taped Numerals"
        description="Services: 3D Typography, Custom Lettering"
        data={[
          {
            img: {
              src: "/taped_numerals/5-postwork.png",
              alt:
                "A 3D typographic render of a number 5 in a black tape theme."
            }
          },
          {
            txt: {
              title: "PROJECT INITIATION",
              text:
                "A typographic style aimed to explore dimensional effects with an expression of rebellious tone. The custom type was carefully refined in vector format before creating tape distortions using 3D sculpting tools (see the process video below)."
            }
          },
          {
            img: {
              src: "/taped_numerals/4-postwork.png",
              alt:
                "A 3D typographic render of a number 4 in a black tape theme."
            }
          },
          {
            img: {
              src: "/taped_numerals/3-postwork.png",
              alt:
                "A 3D typographic render of a number 3 in a black tape theme."
            }
          }
        ]}
      />
      <ResponsivePlayer url="https://vimeo.com/395014003" />
      <BarLink text="VIEW ALL WORK" to="/work" />
    </div>
  );
}
