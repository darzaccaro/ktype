import React from "react";
import WorkTemplateA from "../components/WorkTemplateA";

export default function SketchBook() {
  return (
    <WorkTemplateA
      title="Sketchbook"
      description="Various in-progress lettering sketches, vector processes, and play."
      images={[
        {
          src: "/sketchbook/01_process_wip.jpg",
          alt: "process (WIP)"
        },
        {
          src: "/sketchbook/02_thanks_progression.gif",
          alt: "thanks (progression)"
        },
        {
          src: "/sketchbook/03_quiver_sketch.jpg",
          alt: "quiver (sketch)"
        },
        {
          src: "/sketchbook/04_quiver_sketch2.jpg",
          alt: "another quiver (sketch)"
        },
        {
          src: "/sketchbook/05_jfs_progression.gif",
          alt: "jfs (progression)"
        },
        {
          src: "/sketchbook/06_a_sketch_play.gif",
          alt: "a playful sketch (progression)"
        },
        {
          src: "/sketchbook/07_push_through.jpg",
          alt: "push through"
        }
      ]}
    />
  );
}
