import React from "react";
import WorkTemplateA from "../components/WorkTemplateA";

export default function LetteringSet() {
  return (
    <WorkTemplateA
      title="Lettering Set"
      description="A collection of custom hand-drawn lettering from over the years"
      images={[
        {
          src: "/lettering_set/01_rhythm.jpg",
          alt: "rhythm"
        },
        {
          src: "/lettering_set/02_correlate.jpg",
          alt: "correlate"
        },
        {
          src: "/lettering_set/03_sunday.jpg",
          alt: "sunday"
        },
        {
          src: "/lettering_set/04_thanks.jpg",
          alt: "thanks"
        },
        {
          src: "/lettering_set/05_balance.jpg",
          alt: "balance"
        },
        {
          src: "/lettering_set/06_surreal.jpg",
          alt: "surreal"
        },
        {
          src: "/lettering_set/07_format.jpg",
          alt: "format"
        },
        {
          src: "/lettering_set/08_jfs.jpg",
          alt: "jfs"
        },
        {
          src: "/lettering_set/09_faux.jpg",
          alt: "faux"
        },
        {
          src: "/lettering_set/10_refine.jpg",
          alt: "refine"
        }
      ]}
    />
  );
}
