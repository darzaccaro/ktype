import React from "react";
import theme from "../theme";
import { Link } from "react-router-dom";

export default function Work() {
  return (
    <div
      className="page-anim"
      style={{
        width: "100%",
      }}
    >
      <div className="content">
        {/* Intro Statement */}
        <div
          className="intro-background"
          style={{
            width: "100%",
            backgroundColor: theme.colors.light,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="centering-work">
            <h1
              className="intro-statement"
              style={{
                fontWeight: 400,
              }}
            >
              <span className="main-underline">KTYPE</span> is the
              purpose-driven design studio of{" "}
              <span className="main-underline line">Kade Tyler.</span>
              <br></br>
              Thoughtful Brand Identities &amp; Custom Type.
            </h1>
            <img
              className="logo-v2"
              style={{
                display: "block",
                margin: "0 auto",
              }}
              src="/pentool-gods-simplified.svg"
              alt="Logo V2"
            />
          </div>
        </div>

        <p className="project-notice">
          Full projects on the inside
          <img
            className="mouse-click"
            style={{
              position: "absolute",
              width: 28,
              padding: 4,
            }}
            src="/icons/mouse-click.svg"
            alt="Mouse click"
          ></img>
        </p>

        <div
          className="work-flex"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <article
            className="work-flex-item"
            style={{
              width: "calc(50% - 1rem)",
              height: "auto",
              position: "relative",
              paddingBottom: "2rem",
            }}
          >
            <Link className="card-link" to="/grand-place">
              <img
                src="/work/GrandPlace_Avatar_Logomark_Color.jpg"
                className="thumbnail"
                alt="Grand Place Project Cover"
              />

              <div className="info-container">
                <div className="project-info">
                  <h2 className="card-title">Grand Place</h2>
                  <p className="card-details">
                    Strategy, Identity Design, Signage &amp; more
                  </p>
                </div>
              </div>
            </Link>
          </article>

          <article
            className="work-flex-item"
            style={{
              width: "calc(50% - 1rem)",
              height: "auto",
              position: "relative",
              paddingBottom: "2rem",
            }}
          >
            <Link className="card-link" to="/logos">
              <img
                src="/work/work-logos-black.gif"
                className="thumbnail"
                alt="Logos Cover"
              />
              <div className="info-container">
                <div className="project-info">
                  <h2 className="card-title">Logos &amp; Marks</h2>
                  <p className="card-details">
                    Strategy, Identity Design, Lettering
                  </p>
                </div>
              </div>
            </Link>
          </article>

          <article
            className="work-flex-item"
            style={{
              width: "calc(50% - 1rem)",
              height: "auto",
              position: "relative",
              paddingBottom: "2rem",
            }}
          >
            <Link className="card-link" to="/lettering">
              <img
                src="/work/work-b.jpg"
                className="thumbnail"
                alt="Lettering Project Cover"
              />
              <div className="info-container">
                <div className="project-info">
                  <h2 className="card-title">Lettering Collection</h2>
                  <p className="card-details">Custom Type</p>
                </div>
              </div>
            </Link>
          </article>

          <article
            className="work-flex-item"
            style={{
              width: "calc(50% - 1rem)",
              height: "auto",
              position: "relative",
              paddingBottom: "2rem",
            }}
          >
            <Link className="card-link" to="/daily-renders">
              <img
                src="/work/work-w-postwork.png"
                className="thumbnail"
                alt="Daily Renders Project Cover"
              />
              <div className="info-container">
                <div className="project-info">
                  <h2 className="card-title">Daily Renders</h2>
                  <p className="card-details">
                    Custom Lettering, 3D Typography
                  </p>
                </div>
              </div>
            </Link>
          </article>

          <article
            className="work-flex-item"
            style={{
              width: "calc(50% - 1rem)",
              height: "auto",
              position: "relative",
            }}
          >
            <Link className="card-link" to="/letter-love">
              <img
                src="/work/work-letterlove.png"
                className="thumbnail"
                alt="Letter Love Project Cover"
              />
              <div className="info-container">
                <div className="project-info">
                  <h2 className="card-title">Letter Love</h2>
                  <p className="card-details">
                    Custom Lettering, 3D Typography
                  </p>
                </div>
              </div>
            </Link>
          </article>
        </div>

        <p className="project-notice">
          <br></br>
        </p>

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
                  I have a strong passion for design and unique letters that
                  portray the important values of your brand. Through close
                  attention to detail, I build custom typography, logos, and
                  branding systems for others. If you would like to work
                  together, I'm excited to hear your story.
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
