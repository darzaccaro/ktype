import React from "react";
import WorkTemplateA from "../components/WorkTemplateA";

export default function LetteringSet() {
  return (
    <WorkTemplateA
      title="Lettering Set"
      description="A collection of custom hand-drawn lettering from over the years."
      images={[
        {
          src: "/lettering_set/01_rhythm.jpg",
          alt: "Rhythm: brush script lettering"
        },
        {
          src: "/lettering_set/02_correlate.jpg",
          alt: "Correlate: monoline lettering"
        },
        {
          src: "/lettering_set/03_sunday.jpg",
          alt: "Sunday: brush script lettering"
        },
        {
          src: "/lettering_set/04_thanks.jpg",
          alt: "Thanks!: spencerian formal script lettering"
        },
        {
          src: "/lettering_set/05_balance.jpg",
          alt: "Balance: script lettering"
        },
        {
          src: "/lettering_set/06_surreal.jpg",
          alt: "Surreal: backslant script lettering"
        },
        {
          src: "/lettering_set/07_format.jpg",
          alt: "Format: brush script lettering"
        },
        {
          src: "/lettering_set/08_jfs.jpg",
          alt: "Just Fucking Start: spencerian formal script lettering"
        },
        {
          src: "/lettering_set/09_faux.jpg",
          alt: "Faux: brush script lettering"
        },
        {
          src: "/lettering_set/10_refine.jpg",
          alt: "Refine: bouncy brush script lettering"
        }
      ]}
    />
  );
}
