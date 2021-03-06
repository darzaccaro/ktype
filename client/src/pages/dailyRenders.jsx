import React from "react";
import theme from "../theme";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ResponsivePlayer from "../components/ResponsivePlayer";

export default function DailyRenders() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    // Page fade in --- Start
    <div
      className="page-anim"
      style={{
        width: "100%",
      }}
    >
      <div className="content">
        {/* Project Title */}
        <div
          className="background-color"
          style={{ backgroundColor: theme.colors.light }}
        >
          <div className="centering-title">
            <h1 style={{ color: theme.colors.black, textAlign: "left" }}>
              Daily Renders
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
                <h4 className="service-tags">+ 3d Typography</h4>
                <h4 className="service-tags">+ Custom Lettering</h4>
              </div>

              <div
                className="project-flex-item"
                style={{
                  width: "calc(60%)",
                }}
              >
                <div className="intro-paragraph">
                  <p style={{ color: theme.colors.grey, marginTop: 0 }}>
                    I tasked myself with the challenge of creating a
                    custom-lettered 3D render each day for a month. I set some
                    rules for myself being that I had to explore new lettering
                    styles or 3D methods everyday.
                  </p>
                  <p style={{ color: theme.colors.grey, marginTop: 0 }}>
                    Each letter began with sessions of sketching before moving
                    to the computer for refinement. To achieve proper lettering
                    in 3D, it's important to focus on the quality of the flat
                    letters before adding dimensional effects. The renders were
                    completed using Cinema 4D + Arnold software.
                  </p>
                  <p style={{ color: theme.colors.grey, margin: 0 }}>
                    These are the select works of the completed challenge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services + Intro Paragraph - END */}

        <div
          className="centering"
          style={{
            paddingBottom: 0,
          }}
        >
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
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              <p
                style={{
                  color: theme.colors.grey,
                  marginTop: 0,
                }}
              >
                Curated Letters:
              </p>
            </div>

            <div
              className="project-flex-item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div
                className="image-block"
                style={{
                  /* Correct */
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                }}
              >
                <img
                  style={{
                    /* Correct */
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/daily_renders/d-postwork.jpg"
                  alt="Letter D"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/daily_renders/d-handles.gif"
                  alt="Letter D Process"
                ></img>
              </div>
            </div>

            <div
              className="project-flex-item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                paddingTop: "2rem",
              }}
            >
              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/daily_renders/e-postwork.jpg"
                  alt="Letter E"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/daily_renders/g-postwork.png"
                  alt="Letter G"
                ></img>
              </div>
            </div>

            <div
              className="project-flex-item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                paddingTop: "2rem",
              }}
            >
              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/daily_renders/h-postwork.png"
                  alt="Letter H"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/daily_renders/k-postwork.png"
                  alt="Letter K"
                ></img>
              </div>
            </div>

            <div
              className="project-flex-item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                paddingTop: "2rem",
              }}
            >
              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/daily_renders/l-postwork.gif"
                  alt="Letter L"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/daily_renders/m-postwork.png"
                  alt="Letter M"
                ></img>
              </div>
            </div>

            <div
              className="project-flex-item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                paddingTop: "2rem",
              }}
            >
              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/daily_renders/o-postwork.png"
                  alt="Letter O"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/daily_renders/p-postwork.png"
                  alt="Letter P"
                ></img>
              </div>
            </div>

            <div
              className="project-flex-item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                paddingTop: "2rem",
              }}
            >
              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/daily_renders/q-postwork.png"
                  alt="Letter Q"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/daily_renders/s-postwork-1x1.png"
                  alt="Letter S"
                ></img>
              </div>
            </div>

            <div
              className="project-flex-item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                paddingTop: "2rem",
              }}
            >
              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/daily_renders/u-postwork2.png"
                  alt="Letter U"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/daily_renders/u-flat.png"
                  alt="Letter U Process"
                ></img>
              </div>
            </div>

            <div
              className="project-flex-item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                paddingTop: "2rem",
              }}
            >
              <section
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                  position: "relative",
                }}
              >
                <img
                  className="top"
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                    position: "absolute",
                  }}
                  src="/daily_renders/v-wireframe.png"
                  alt="Letter V Process"
                ></img>

                <img
                  className="bottom"
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/daily_renders/v-postwork.png"
                  alt="Letter V"
                ></img>
              </section>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/daily_renders/w-postwork.png"
                  alt="Letter W"
                ></img>
              </div>
            </div>

            <div
              className="project-flex-item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                paddingTop: "2rem",
              }}
            >
              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/daily_renders/x-postwork.png"
                  alt="Letter X"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/daily_renders/y-postwork.png"
                  alt="Letter Y"
                ></img>
              </div>
            </div>

            <div
              className="project-flex-item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                paddingTop: 100,
              }}
            >
              <p style={{ color: theme.colors.grey, marginTop: 0 }}>
                Curated Numbers:
              </p>
            </div>

            <div
              className="project-flex-item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/daily_renders/0-postwork-1x1.png"
                  alt="Numeral 0"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/daily_renders/1-postwork-1x1.png"
                  alt="Numeral 1"
                ></img>
              </div>
            </div>

            <div
              className="project-flex-item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                paddingTop: "2rem",
              }}
            >
              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/daily_renders/2-postwork-1x1.png"
                  alt="Numeral 2"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/daily_renders/3-postwork.png"
                  alt="Numeral 3"
                ></img>
              </div>
            </div>

            <div
              className="project-flex-item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                paddingTop: "2rem",
              }}
            >
              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/daily_renders/4-postwork.png"
                  alt="Numeral 4"
                ></img>
              </div>

              <section
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 2) - 1rem)",
                  position: "relative",
                }}
              >
                <img
                  className="top"
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                    position: "absolute",
                  }}
                  src="/daily_renders/tapeirl3.png"
                  alt="5 Tape Process"
                ></img>

                <img
                  className="bottom"
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/daily_renders/5-postwork.png"
                  alt="Numeral 5"
                ></img>
              </section>
            </div>

            <div
              className="project-flex-item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                paddingTop: 100,
              }}
            >
              <p style={{ color: theme.colors.grey, marginTop: 0 }}>
                3D Process Video:
              </p>
            </div>
          </div>

          <ResponsivePlayer />
        </div>

        {/* Next Project - START */}
        <div
          className="project-flex"
          style={{
            paddingTop: 150,
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
            <Link to="/letter-love" onClick={() => window.scrollTo(0, 0)}>
              <button
                className="project-navigation"
                style={{
                  textAlign: "right",
                  paddingRight: 25,
                }}
              >
                Next project →
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
