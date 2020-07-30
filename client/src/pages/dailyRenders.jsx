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
              width: "60%",
              margin: "0 auto",
            }}
          >
            <h2>Daily Renders</h2>
            <p style={{ marginTop: 0 }}>
              I tasked myself with the challenge of creating a 3D
              custom-lettered render each day for a month. I set some rules for
              myself being that I had to explore new lettering styles or 3D
              methods everyday.
            </p>
            <p style={{ marginTop: 0 }}>
              Beginning as sketches, the letters were then refined digitally and
              rendered using Cinema 4D + Arnold. For proper type, it is
              important to focus on the quality of the flat letterforms first
              before adding dimensional effects.
            </p>
            <p style={{ marginTop: 0 }}>
              These are the select works of the completed challenge. You can
              follow me on{" "}
              <a
                className="underline"
                href="https://instagram.com/ktype.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>{" "}
              to see the full project live next year!
            </p>
          </div>

          <div
            className="project-flex-item"
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              paddingTop: 200,
            }}
          >
            <p>Curated Letters:</p>
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
              paddingTop: 200,
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
              paddingTop: 200,
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
              paddingTop: 200,
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
              paddingTop: 200,
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
              paddingTop: 200,
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
              paddingTop: 200,
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
              paddingTop: 200,
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
              paddingTop: 200,
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
              paddingTop: 200,
            }}
          >
            <p>Curated Numbers:</p>
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
              paddingTop: 200,
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
              paddingTop: 200,
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
              paddingTop: 200,
            }}
          >
            <p>3D Process Video:</p>
          </div>
        </div>

        <ResponsivePlayer />
      </div>

      {/* Deliverables + Next Project - START */}
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
          <div
            className="project-flex-item"
            style={{
              margin: "0 auto",
              width: "60%",
              paddingBottom: 150,
            }}
          >
            <h2>Deliverables</h2>
            <ul className="services-stack">
              <li>+ 3D Typography</li>
              <hr className="spacer-line"></hr>
              <li>+ Custom Lettering</li>
              <hr className="spacer-line"></hr>
            </ul>
          </div>

          <div
            className="project-flex-item"
            style={{
              width: "100%",
            }}
          >
            <Link to="/letter-love" onClick={() => window.scrollTo(0, 0)}>
              <button
                className="k-button"
                style={{
                  width: "100%",
                  textAlign: "right",
                  height: 180,
                  paddingRight: 50,
                }}
              >
                <div>
                  <p
                    style={{
                      color: theme.colors.white,
                      letterSpacing: 2,
                      margin: 0,
                    }}
                  >
                    NEXT PROJECT:
                  </p>
                  <h2 style={{ margin: -5 }}>
                    <span className="underline-yellow">Letter Love</span>
                  </h2>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Deliverables + Next Project - END */}
    </div>
  );
}
