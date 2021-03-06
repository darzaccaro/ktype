import React from "react";
import theme from "../theme";

export default function Footer() {
  return (
    <div
      className="page-anim"
      style={{
        width: "100%",
      }}
    >
      <footer>
        <div
          className="footer-background"
          style={{ backgroundColor: theme.colors.grey }}
        >
          <div className="centering-footer">
            <div
              className="footer-flex"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              <div
                className="copyright footer-flex-item"
                style={{
                  width: "calc(50% - 20px)",
                  paddingRight: 40,
                }}
              >
                <h4 style={{ color: theme.colors.light, fontWeight: "bold" }}>
                  COPYRIGHT
                </h4>

                <h4
                  style={{
                    color: theme.colors.white,
                  }}
                >
                  &copy; 2021 Kade Tyler. All rights reserved.
                </h4>
              </div>

              <div
                className="social-icons footer-flex-item"
                style={{
                  width: "calc(auto - 20px)",
                  marginBottom: 20,
                }}
              >
                <h4 style={{ color: theme.colors.light, fontWeight: "bold" }}>
                  KEEP IN TOUCH ♥
                </h4>

                <a
                  href="https://instagram.com/ktype.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="social-icons"
                    style={{
                      width: "1.8rem",
                      paddingTop: "6px",
                      marginRight: "25px",
                    }}
                    src="/icons/instagram.svg"
                    alt="Instagram"
                  ></img>
                </a>
                <a
                  href="https://dribbble.com/ktype"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="social-icons"
                    style={{
                      width: "1.8rem",
                      paddingTop: "6px",
                      marginRight: "25px",
                    }}
                    src="/icons/dribbble.svg"
                    alt="Dribbble"
                  ></img>
                </a>
                <a
                  href="https://behance.net/ktype"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="social-icons"
                    style={{
                      width: "1.8rem",
                      paddingTop: "6px",
                      marginRight: "25px",
                    }}
                    src="/icons/behance-network.svg"
                    alt="Behance"
                  ></img>
                </a>
                <a
                  href="https://www.linkedin.com/in/ktype"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="social-icons"
                    style={{
                      width: "1.8rem",
                      paddingTop: "6px",
                      marginRight: "0px",
                    }}
                    src="/icons/linkedin.svg"
                    alt="LinkedIn"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="footer-background"
          style={{ backgroundColor: theme.colors.light }}
        >
          <h4
            style={{
              margin: 0,
              textAlign: "center",
              padding: 12,
              color: theme.colors.dark,
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            PURPOSE + DEDICATION + PASSION
          </h4>
        </div>
      </footer>
    </div>
  );
}
