import React from "react";
import theme from "../theme";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Success() {
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
      {/* Project Title */}
      <div
        className="background-color"
        style={{ backgroundColor: theme.colors.light }}
      >
        <div className="centering-title">
          <h1 style={{ color: theme.colors.black, textAlign: "left" }}>
            KTYPE Site Details
          </h1>
        </div>
      </div>

      {/* Services + Intro Paragraph - START */}
      <div
        className="background-color"
        style={{ backgroundColor: theme.colors.black }}
      >
        <div className="centering-tags">
          <div
            className="project-flex"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "start",
              position: "relative",
              width: "100%",
            }}
          >
            <div className="project-flex-item">
              <h4
                style={{
                  color: theme.colors.yellow,
                  margin: 0,
                  fontWeight: 700,
                  paddingBottom: 10,
                }}
              >
                SERVICES:
              </h4>
              <h4 className="service-tags">+ Web Design</h4>
              <h4 className="service-tags">+ Brand Guidelines</h4>
            </div>

            <div
              className="project-flex-item"
              style={{
                width: "calc(60%)",
              }}
            >
              <div className="intro-paragraph">
                <p style={{ color: theme.colors.grey, marginTop: 0 }}>
                  This website was made in collaboration with{" "}
                  <a
                    style={{ color: theme.colors.grey }}
                    className="underline"
                    href=" https://www.linkedin.com/in/darzaccaro/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dar Zaccaro
                  </a>
                  , a talented software engineer.
                </p>
                <p style={{ color: theme.colors.grey, marginTop: 0 }}>
                  My role was to design and provide in-depth visual guidelines,
                  which he would then use to code the framework of this site
                  from scratch.
                </p>
                <p
                  style={{
                    color: theme.colors.grey,
                    margin: 0,
                  }}
                >
                  Since our initial release in late 2019, I have refreshed my
                  branding, web design, and handled much of the code in the
                  version you see currently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services + Intro Paragraph - END */}

      <div
        className="background-color"
        style={{ backgroundColor: theme.colors.black }}
      >
        <div className="centering">
          <div
            className="project-flex"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              position: "relative",
            }}
          >
            <p
              style={{
                color: theme.colors.grey,
                marginTop: 0,
              }}
            >
              Website Design (Version 1, 2019):
            </p>

            <div
              className="project-flex-item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                margin: "0 auto",
              }}
            >
              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc(33.33%)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                    filter: "drop-shadow(0px 0px 5px #a1a1a1)",
                  }}
                  src="/details/work-page-v1.jpg"
                  alt="Work Page Version 1"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc(33.33% - 40px)",
                  paddingLeft: 20,
                  paddingRight: 20,
                  float: "right",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                    filter: "drop-shadow(0px 0px 5px #a1a1a1)",
                  }}
                  src="/details/about-page-v1.jpg"
                  alt="About Page Version 1"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc(33.33%)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                    filter: "drop-shadow(0px 0px 5px #a1a1a1)",
                  }}
                  src="/details/contact-page-v1.jpg"
                  alt="Contact Page Version 1"
                ></img>
              </div>

              <p
                style={{
                  color: theme.colors.grey,
                  marginTop: 0,
                  paddingTop: 100,
                }}
              >
                Site Guidelines (Version 1, 2019):
              </p>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc(100%)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                    filter: "drop-shadow(0px 0px 5px #a1a1a1)",
                  }}
                  src="/details/site-guidelines-v1.jpg"
                  alt="Site Guidelines Version 1"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="centering" style={{ paddingTop: 0 }}>
          <p
            style={{
              textAlign: "center",
              color: theme.colors.grey,
              marginTop: 0,
            }}
          >
            Thanks to Dar for sparking my interest in web development by
            demonstrating his process and sharing coding resources.
          </p>
          <p
            style={{ textAlign: "center", color: theme.colors.grey, margin: 0 }}
          >
            ❤
          </p>
        </div>
      </div>

      {/* Next Project - START */}
      <div
        className="project-flex"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          className="project-flex-item"
          style={{
            width: "100%",
          }}
        >
          <Link to="/work" onClick={() => window.scrollTo(0, 0)}>
            <button
              className="project-navigation"
              style={{
                textAlign: "right",
                paddingRight: 25,
              }}
            >
              View all work →
            </button>
          </Link>
        </div>
      </div>
      {/* Next Project - END */}

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
                  fontSize: "23px",
                  lineHeight: "38px",
                }}
              >
                I have a strong passion for design and unique letters that
                portray the important values of your brand. Through close
                attention to detail, I build custom typography, logos, and
                branding systems for others. If you would like to work together,
                I'm excited to hear your story.
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
  );
}
