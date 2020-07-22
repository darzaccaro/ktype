import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <div className="centering">
        <div
          className="about-flex"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <div
            className="about-flex-item"
            style={{
              width: "calc(50%)",
              paddingBottom: 100,
            }}
          >
            <h2>
              Hi, I'm Kade Tyler, a designer and typographic artist (aka problem
              solver).
            </h2>

            <p>
              I'm dedicated to designing meaningful brands and expressive visual
              communication. This means that I ask questions, plan strategic
              approaches, and build enduring solutions.
            </p>
            <p>
              My introduction to graphic design came at a young age. At
              fourteen, I taught myself graphics software in order to build 3D
              web banners for e-sports teams. Over the years, original ambitions
              of learning and creating beautiful work still lead my current
              projects.
            </p>
            <p>
              Aside from honing my design skills, I enjoy video games, writing
              front-end code, exercising, and seeking new approaches to creative
              insight.
            </p>
            <p>
              I’m currently available for freelance and exploring new
              opportunities.{" "}
              <Link
                className="underline"
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
              >
                I'd love to hear from you
              </Link>{" "}
              about your new project!
            </p>
          </div>

          <div
            className="about-flex-item"
            style={{
              width: "calc(30%)",
              paddingBottom: 100,
            }}
          >
            <h2>Services I Focus on</h2>

            <ul className="services-stack">
              <li>+ Brand Strategy</li>
              <hr className="spacer-line"></hr>
              <li>+ Identity Design</li>
              <hr className="spacer-line"></hr>
              <li>+ 3D Typography</li>
              <hr className="spacer-line"></hr>
              <li>+ Custom Lettering</li>
              <hr className="spacer-line"></hr>
              <li>+ Illustration</li>
              <hr className="spacer-line"></hr>
              <li>+ Web Design</li>
              <hr className="spacer-line"></hr>
            </ul>
          </div>

          <div
            className="about-flex-item"
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              paddingTop: 150,
              paddingBottom: 150,
            }}
          >
            <img
              style={{
                width: "65%",
                height: "auto",
                position: "relative",
                filter: "drop-shadow(0px 0px 10px #000000)",
              }}
              src="/about/kt-profile.jpg"
              alt="Kade Tyler"
            />
            <img
              style={{
                width: "calc(35% + 150px)",
                height: "auto",
                margin: -150,
              }}
              src="/about/kt-working.jpg"
              alt="Lettering Revisions"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
