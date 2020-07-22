import React from "react";
import theme from "../theme";

export default function Footer() {
  return (
    <footer>
      <div
        className="footer-background"
        style={{ backgroundColor: theme.colors.dark }}
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
            <hr className="spacer-line"></hr>

            <div
              className="copyright footer-flex-item"
              style={{
                width: "calc(50% - 20px)",
                paddingRight: 20,
              }}
            >
              <p>Copyright</p>
              <p
                style={{
                  color: theme.colors.white,
                  fontSize: 20,
                  marginBottom: 0,
                }}
              >
                &copy; 2020 Kade Tyler
              </p>
            </div>

            <div className="social-icons footer-flex-item">
              <p>Keep in touch ♥</p>
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
