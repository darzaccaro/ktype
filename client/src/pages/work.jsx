import React from "react";
import theme from "../theme";
import { Link } from "react-router-dom";

export default function Work() {
  return (
    <div className="page">
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
            <span className="main-underline">KTYPE</span> is the purpose-driven
            design studio of <span className="main-underline">Kade Tyler.</span>
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
            width: 30,
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
          maxWidth: "1800px",
          margin: "0 auto",
        }}
      >
        <article
          className="work-flex-item"
          style={{ width: "50%", height: "auto", position: "relative" }}
        >
          <Link className="card-link" to="/logos">
            <img
              src="/work/work-logos-black.gif"
              className="thumbnail"
              alt="4"
            />
            <figcaption className="card-overlay">
              <div className="card-inner">
                <h3 className="card-title">Logotypes &amp; Trademarks</h3>
                <h3 className="card-details">Identity Design</h3>
              </div>
            </figcaption>
          </Link>
        </article>

        <article
          className="work-flex-item"
          style={{ width: "50%", height: "auto", position: "relative" }}
        >
          <Link className="card-link" to="/lettering">
            <img src="/work/work-b.jpg" className="thumbnail" alt="1" />
            <figcaption className="card-overlay">
              <div className="card-inner">
                <h3 className="card-title">Lettering Collection</h3>
                <h3 className="card-details">Custom Type</h3>
              </div>
            </figcaption>
          </Link>
        </article>

        <article
          className="work-flex-item"
          style={{ width: "50%", height: "auto", position: "relative" }}
        >
          <Link className="card-link" to="/daily-render">
            <img
              src="/work/work-w-postwork.png"
              className="thumbnail"
              alt="2"
            />
            <figcaption className="card-overlay">
              <div className="card-inner">
                <h3 className="card-title">Daily Render</h3>
                <h3 className="card-details">3D Typography</h3>
              </div>
            </figcaption>
          </Link>
        </article>

        <article
          className="work-flex-item"
          style={{ width: "50%", height: "auto", position: "relative" }}
        >
          <Link className="card-link" to="/letter-love">
            <img
              src="/work/work-letterlove.png"
              className="thumbnail"
              alt="3"
            />
            <figcaption className="card-overlay">
              <div className="card-inner">
                <h3 className="card-title">Letter Love</h3>
                <h3 className="card-details">3D Typography</h3>
              </div>
            </figcaption>
          </Link>
        </article>
      </div>

      <p className="project-notice">
        <br></br>
      </p>
    </div>
  );
}
