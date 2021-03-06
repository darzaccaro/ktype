import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import theme from "../theme";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div
      className="page-anim"
      style={{
        width: "100%",
      }}
    >
      <div className="content">
        <div className="centering">
          <div
            className="about-flex"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "start",
              position: "relative",
              width: "100%",
            }}
          >
            <div
              className="about-flex-item"
              style={{
                width: "calc(60% - 2rem)",
                paddingBottom: 100,
              }}
            >
              <h2>
                Hi, I'm Kade Tyler, a designer and typographic artist (aka
                problem solver).
              </h2>

              <p>
                I'm dedicated to designing meaningful brands and expressive
                visual communication. This means that I ask questions, plan
                strategic approaches, and build enduring solutions.
              </p>
              <p>
                My introduction to graphic design came at a young age. At
                fourteen, I taught myself graphics software in order to build 3D
                web banners for e-sports teams. Over the years, original
                ambitions of learning and creating beautiful work still lead my
                current projects.
              </p>
              <p>
                Aside from honing my design skills, I enjoy video games, writing
                front-end code, exercising, and seeking new approaches to
                creative insight.
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
                width: "30%",
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
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingTop: 150,
                paddingBottom: 150,
                width: "100%",
              }}
            >
              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "65%",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                    filter: "drop-shadow(0px 0px 10px #000000)",
                  }}
                  src="/about/kt-profile.jpg"
                  alt="Kade Tyler"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc(35% + 150px)",
                  margin: -150,
                  zIndex: -1,
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/about/kt-working.jpg"
                  alt="Lettering Revisions"
                ></img>
              </div>
            </div>
          </div>
        </div>

        {/* Let's work together - START */}
        <div
          className="background-color"
          style={{ backgroundColor: theme.colors.dark }}
        >
          <div className="centering">
            <div
              className="project-flex"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <div
                className="project-flex-item"
                style={{
                  margin: "0 auto",
                  width: "80%",
                  paddingBottom: 25,
                }}
              >
                <h1
                  style={{
                    color: theme.colors.white,
                  }}
                >
                  Let's build together.
                </h1>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "22px",
                    lineHeight: "44px",
                  }}
                >
                  I'm always interested in hearing about new projects. I'd love
                  to know more about your story.
                </p>
              </div>

              <div
                className="project-flex-item"
                style={{
                  width: "50%",
                  textAlign: "center",
                }}
              >
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                  <button className="lets-start-button">LET'S START</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Let's work together - END */}
      </div>
    </div>
  );
}
