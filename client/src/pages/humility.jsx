import React from "react";
import WorkTemplateB from "../components/WorkTemplateB";

export default function Humility() {
    return (
        <WorkTemplateB
            title="Humility"
            description="Services: Identity Design, Logotype Design, Custom Lettering"
            data={[
                { img: { src: "/humility/01_logotype.jpg", alt: "humility logotype" } },
                { img: { src: "/humility/02_outline.jpg", alt: "humility outline" } },
                { txt: { title: "PROJECT INITIATION", text: "Humility was self-initiated as a way of developing a logotype with a sense of friendliness and modesty. Typically, I take the time to perfect a sketch before I move onto the computer. However, for this project, I wanted to explore digitally as quickly as possible — so really rough thumbnail sketches had to suffice." } },
                { img: { src: "/humility/03_explore.jpg", alt: "explore" } },
                { txt: { title: "REVISIONS & CONSIDERATIONS", text: "The resemblance of the ‘H’ and ‘Y’ adds a familiar touch while also providing an enclosure for the tagline/wordmark. With so much letterform similarity, however, it was important to ensure that every element was unique, but similar enough to maintain consistency. " } },
                { img: { src: "/humility/04_refinement.jpg", alt: "refinement" } },
                { img: { src: "/humility/05_beziers.jpg", alt: "beziers" } },
                { txt: { title: "TAGLINE EXPLORATION", text: "Although uppercase nicely contrasted the lowercase wordmark, finalizing a lowercase tagline felt more appropriate due to the humbleness of the project." } },
                { img: { src: "/humility/06_tagline.jpg", alt: "tagline" } },
                { img: { src: "/humility/07_image.jpg", alt: "final" } },
            ]}
        />
    );
}
