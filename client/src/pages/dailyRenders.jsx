import React from "react";
import theme from "../theme";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ResponsivePlayer from "../components/ResponsivePlayer";

export default function DailyRender() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    // Page fade in --- Start
    <div
      className="anim-fade-in"
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
              /* Correct */
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              className="image-block"
              style={{
                /* Correct */
                display: "flex",
                width: "calc((100% / 1) - 0rem)",
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
          </div>

          <div
            className="project-flex-item"
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "55%",
              margin: "0 auto",
              paddingTop: 250,
            }}
          >
            <h2>Daily Renders</h2>
            <p style={{ marginTop: 0 }}>
              I tasked myself with the challenge of creating a 3D
              custom-lettered render each day for a month. I set some rules for
              myself being that I had to explore new lettering styles or 3D
              methods everyday. All letters were sketched by hand, refined
              digitally, and rendered using Cinema 4D + Arnold. These are the
              select works of the completed challenge.
            </p>
          </div>

          <div
            className="project-flex-item"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 250,
            }}
          >
            <div
              className="image-block"
              style={{
                display: "flex",
                width: "calc((100% / 1) - 0rem)",
                padding: "0% 10%",
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
              justifyContent: "center",
              alignItems: "center",
              width: "55%",
              margin: "0 auto",
              paddingTop: 250,
            }}
          >
            <p>
              When developing type, it is important to focus on the quality of
              the flat letterforms first before adding dimensional effects.
            </p>
          </div>

          <div
            className="project-flex-item"
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              paddingTop: 250,
            }}
          >
            <p>Selected Letters:</p>
          </div>

          <div
            className="project-flex-item"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              className="image-block"
              style={{
                display: "flex",
                width: "calc((100% / 1) - 0rem)",
                marginBottom: "2rem",
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
                src="/daily_renders/o-postwork.png"
                alt="Letter O"
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
              paddingTop: 250,
            }}
          >
            <div
              className="image-block"
              style={{
                display: "flex",
                width: "calc((100% / 1) - 0rem)",
                marginBottom: "2rem",
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
              padding: "250px 10%",
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
                src="/daily_renders/v-postwork.png"
                alt="Letter V"
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
                src="/daily_renders/v-wireframe.jpg"
                alt="Letter V Process"
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
            }}
          >
            <div
              className="image-block"
              style={{
                display: "flex",
                width: "calc((100% / 1) - 0rem)",
                marginBottom: "2rem",
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
              paddingTop: 250,
            }}
          >
            <p>Selected Numerals:</p>
          </div>

          <div
            className="project-flex-item"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              className="image-block"
              style={{
                display: "flex",
                width: "calc((100% / 1) - 0rem)",
                marginBottom: "2rem",
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
          </div>

          <div
            className="project-flex-item"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 250,
            }}
          >
            <div
              className="image-block"
              style={{
                display: "flex",
                width: "calc((100% / 1) - 0rem)",
                marginBottom: "2rem",
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
                src="/daily_renders/5-postwork.png"
                alt="Numeral 5"
              ></img>
            </div>
          </div>
        </div>

        <ResponsivePlayer />

        <div
          className="project-flex-item"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            width: "55%",
            margin: "0 auto",
            paddingTop: 250,
            paddingBottom: 250,
          }}
        >
          <p>
            Feel free to follow me on{" "}
            <a
              className="underline"
              href="https://instagram.com/ktype.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>{" "}
            to see the daily progression of it next time!
          </p>
        </div>
      </div>

      {/* Deliverables + Next Project - START */}
      <div className="centering">
        <div
          className="project-flex-item"
          style={{
            width: "50%",
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
                <span className="underline">Letter Love</span>
              </h2>
            </div>
          </button>
        </Link>
      </div>
      {/* Deliverables + Next Project - END */}
    </div>
  );
}
