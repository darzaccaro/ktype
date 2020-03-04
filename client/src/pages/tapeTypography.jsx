import React from "react";
import WorkTemplateC from "../components/WorkTemplateC";
import ResponsivePlayer from "../components/ResponsivePlayer";
import BarLink from "../components/BarLink";

export default function TapeTypography() {
  return (
    <div>
      <WorkTemplateC
        title="Tape Typography"
        description="Services: 3D Typography, Custom Lettering"
        data={[
          {
            img: {
              src: "/tape_typography/5-postwork.png",
              alt:
                "Brown handlettering on a yellow background that reads 'Loosen Up'"
            }
          },
          {
            img: {
              src: "/tape_typography/4-postwork.png",
              alt:
                "Black and white image of handlettering that reads 'Loosen Up'"
            }
          },
          {
            img: {
              src: "/tape_typography/3-postwork.png",
              alt:
                "Black and white image of handlettering that reads 'Loosen Up'"
            }
          }
        ]}
      />
      <ResponsivePlayer url="https://vimeo.com/395014003" />
      <BarLink text="VIEW ALL WORK" to="/work" />
    </div>
  );
}
