import React from "react";
import theme from "../theme";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Lettering() {
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
        className="background-color"
        style={{ backgroundColor: theme.colors.light }}
      >
        <div className="centering">
          {/* Project Intro */}
          <h1>Lettering Collection</h1>
          <p
            style={{
              textAlign: "center",
              color: theme.colors.yellow,
            }}
          >
            As a lettering artist, I aim to convey messages with character and
            emotion through technically precise letters.
          </p>

          <div
            className="project-flex"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              className="project-flex-item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 150,
                width: "100%",
              }}
            >
              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc(60% - 1rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/lettering/thanks.svg"
                  alt="Thanks"
                ></img>
              </div>

              <div
                className="image-block rotate"
                style={{
                  display: "flex",
                  width: "calc(40% - 1rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/lettering/letter-n.svg"
                  alt="Letter N"
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
                  src="/lettering/artiswork.jpg"
                  alt="Art Is Work"
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
                  src="/lettering/loosenup.svg"
                  alt="Loosen Up"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc(65% - 1rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/lettering/jfs.svg"
                  alt="JFS"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc(35% - 1rem)",
                }}
              >
                <figure
                  style={{
                    margin: 40,
                  }}
                >
                  <img
                    style={{
                      alignSelf: "center",
                      width: "100%",
                      height: "auto",
                    }}
                    src="/lettering/typism-book-feature.jpg"
                    alt="Typism Book 6"
                  />
                  <figcaption className="caption">
                    I'm excited to have my work published in{" "}
                    <span className="main-underline">Typism Book 6</span> among
                    so many admirable artists!
                  </figcaption>
                </figure>
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
                  src="/lettering/sunday.svg"
                  alt="Sunday"
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
                  src="/lettering/refine.svg"
                  alt="Refine"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 3) - 1rem)",
                  paddingTop: 20,
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/lettering/letter-a.svg"
                  alt="Letter A"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 3) - 1rem)",
                  paddingTop: 20,
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/lettering/letter-b.svg"
                  alt="Letter B"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 3) - 1rem)",
                  paddingTop: 20,
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/lettering/letter-c.svg"
                  alt="Letter C"
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
                  src="/lettering/ubn-collection.jpg"
                  alt="Undefined By Numbers"
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
                  src="/lettering/t-flourished.svg"
                  alt="Letter T"
                ></img>
              </div>

              <div
                className="image-block"
                style={{
                  display: "flex",
                  width: "calc((100% / 1) - 0rem)",
                }}
              >
                <img
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/lettering/communicate.svg"
                  alt="Communicate"
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
                  src="/lettering/faux.svg"
                  alt="Faux"
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
                  src="/lettering/surreal.svg"
                  alt="Surreal"
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
                  src="/lettering/balance.svg"
                  alt="Balance"
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
                  src="/lettering/rhythm.svg"
                  alt="Rhythm"
                ></img>
              </div>
            </div>
          </div>
        </div>
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
            <Link to="/daily-renders" onClick={() => window.scrollTo(0, 0)}>
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
                    <span className="underline-yellow">Daily Renders</span>
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
