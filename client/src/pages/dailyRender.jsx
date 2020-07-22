import React from "react";
import theme from "../theme";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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
            justifyContent: "space-between",
            alignContent: "flex-start",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <div
            className="project-flex-item"
            style={{
              width: "40%",
            }}
          >
            <h2>Daily Render</h2>
            <p>
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
              paddingTop: 250,
            }}
          >
            <img
              style={{
                width: "calc(33.33% - 30px)",
                height: "auto",
                margin: 15,
              }}
              src="/daily_render/0-postwork-1x1.png"
              alt="Numeral 0"
            ></img>
            <img
              style={{
                width: "calc(33.33% - 30px)",
                height: "auto",
                margin: 15,
              }}
              src="/daily_render/1-postwork-1x1.png"
              alt="Numeral 1"
            ></img>
            <img
              style={{
                width: "calc(33.33% - 30px)",
                height: "auto",
                margin: 15,
              }}
              src="/daily_render/2-postwork-1x1.png"
              alt="Numeral 2"
            ></img>
            <img
              style={{
                width: "calc(33.33% - 30px)",
                height: "auto",
                margin: 15,
              }}
              src="/daily_render/3-postwork.png"
              alt="Numeral 3"
            ></img>
            <img
              style={{
                width: "calc(33.33% - 30px)",
                height: "auto",
                margin: 15,
              }}
              src="/daily_render/4-postwork.png"
              alt="Numeral 4"
            ></img>
            <img
              style={{
                width: "calc(33.33% - 30px)",
                height: "auto",
                margin: 15,
              }}
              src="/daily_render/5-postwork.png"
              alt="Numeral 5"
            ></img>
          </div>

          <div
            className="project-flex-item"
            style={{
              display: "flex",
              flexWrap: "wrap",
              paddingTop: 250,
            }}
          >
            <img
              style={{
                width: "calc(50% - 30px)",
                height: "auto",
                margin: 15,
              }}
              src="/daily_render/d-handles.gif"
              alt="Letter D Process"
            ></img>
            <img
              style={{
                width: "calc(50% - 30px)",
                height: "auto",
                margin: 15,
              }}
              src="/daily_render/d-postwork.jpg"
              alt="Letter D"
            ></img>
          </div>

          <div
            className="project-flex-item"
            style={{
              width: "40%",
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
              paddingTop: 250,
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "calc(33.33% - 30px)",
                height: "auto",
                margin: 15,
              }}
              src="/daily_render/e-postwork.jpg"
              alt="Letter E"
            ></img>
            <img
              style={{
                width: "calc(33.33% - 30px)",
                height: "auto",
                margin: 15,
              }}
              src="/daily_render/f-postwork.jpg"
              alt="Letter F"
            ></img>
            <img
              style={{
                width: "calc(33.33% - 30px)",
                height: "auto",
                margin: 15,
              }}
              src="/daily_render/g-postwork.png"
              alt="Letter G"
            ></img>
          </div>

          <div
            className="project-flex-item"
            style={{
              display: "flex",
              flexWrap: "wrap",
              padding: "250px 5%",
            }}
          >
            <img
              style={{ width: "calc(50% - 30px)", height: "auto", margin: 15 }}
              src="/daily_render/h-postwork.png"
              alt="Letter H"
            ></img>
            <img
              style={{ width: "calc(50% - 30px)", height: "auto", margin: 15 }}
              src="/daily_render/j-postwork.png"
              alt="Letter J"
            ></img>

            <img
              style={{ width: "calc(50% - 30px)", height: "auto", margin: 15 }}
              src="/daily_render/k-postwork.png"
              alt="Letter K"
            ></img>
            <img
              style={{ width: "calc(50% - 30px)", height: "auto", margin: 15 }}
              src="/daily_render/l-postwork.gif"
              alt="Letter L"
            ></img>

            <img
              style={{ width: "calc(50% - 30px)", height: "auto", margin: 15 }}
              src="/daily_render/m-postwork.png"
              alt="Letter M"
            ></img>
            <img
              style={{ width: "calc(50% - 30px)", height: "auto", margin: 15 }}
              src="/daily_render/o-postwork.png"
              alt="Letter O"
            ></img>
          </div>

          <div
            className="project-flex-item"
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <img
              style={{
                width: "calc(50% - 30px)",
                height: "auto",
                margin: 15,
              }}
              src="/daily_render/p-postwork.png"
              alt="Letter P"
            ></img>
            <img
              style={{
                width: "calc(50% - 30px)",
                height: "auto",
                margin: 15,
              }}
              src="/daily_render/q-postwork.png"
              alt="Letter Q"
            ></img>
            <img
              style={{
                width: "calc(50% - 30px)",
                height: "auto",
                margin: 15,
              }}
              src="/daily_render/s-postwork-1x1.png"
              alt="Letter S"
            ></img>
            <img
              style={{
                width: "calc(50% - 30px)",
                height: "auto",
                margin: 15,
              }}
              src="/daily_render/u-postwork2.png"
              alt="Letter U"
            ></img>
          </div>

          <div
            className="project-flex-item"
            style={{
              display: "flex",
              flexWrap: "wrap",
              padding: "250px 5%",
            }}
          >
            <img
              style={{
                width: "calc(50% - 30px)",
                height: "auto",
                margin: 15,
              }}
              src="/daily_render/v-wireframe.jpg"
              alt="Letter V Process"
            ></img>
            <img
              style={{
                width: "calc(50% - 30px)",
                height: "auto",
                margin: 15,
              }}
              src="/daily_render/v-postwork.png"
              alt="Letter V"
            ></img>
          </div>

          <div
            className="project-flex-item"
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <img
              style={{
                width: "calc(50% - 30px)",
                height: "auto",
                margin: 15,
              }}
              src="/daily_render/w-postwork.png"
              alt="Letter W"
            ></img>

            <img
              style={{ width: "calc(50% - 30px)", height: "auto", margin: 15 }}
              src="/daily_render/x-postwork.png"
              alt="Letter X"
            ></img>
            <img
              style={{ width: "calc(50% - 30px)", height: "auto", margin: 15 }}
              src="/daily_render/y-postwork.png"
              alt="Letter Y"
            ></img>
            <img
              style={{ width: "calc(50% - 30px)", height: "auto", margin: 15 }}
              src="/daily_render/letter-z.jpg"
              alt="Letter Y"
            ></img>
          </div>
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
