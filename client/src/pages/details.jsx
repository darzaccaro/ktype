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
      className="anim-fade-in"
      style={{
        width: "100%",
      }}
    >
      <div className="centering-extra">
        {/* Project Intro */}
        <div style={{ width: "60%", margin: "0 auto" }}>
          <h1 style={{ color: theme.colors.white, textAlign: "left" }}>
            Site Details
          </h1>
          <p>
            This website was made in collaboration with{" "}
            <a
              href=" https://www.linkedin.com/in/darzaccaro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dar Zaccaro
            </a>
            , a talented software engineer.
          </p>
          <p>
            My role was to design and provide in-depth visual guidelines, which
            he would then use to build the framework of this site.
          </p>
          <p>
            Thanks to him for sparking my interest in web development by
            demonstrating his process and sharing resources. ❤
          </p>
          <p>
            Since our initial release in late 2019, I have refreshed the
            branding/design and handled the CSS of the current version.
          </p>
        </div>

        <div className="centering" style={{ paddingBottom: 0 }}>
          <Link to="/work" onClick={() => window.scrollTo(0, 0)}>
            <button
              className="k-button"
              style={{
                width: "100%",
                height: 180,
              }}
            >
              <div>
                <h2 style={{ margin: -5 }}>
                  <span className="underline-yellow">Back to Work</span>
                </h2>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
