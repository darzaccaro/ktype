import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import theme from "../theme";

export default function GrandPlace() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  /* ^^^ Disable for scroll down feature to work */

  return (
    // Page fade in --- Start
    <div
      className="page-anim"
      style={{
        width: "100%",
      }}
    >
      <div className="content">
        {/* DISABLED - Case Study Hero - START 
        <section className="hero-container">
          <div
            className="hero-text"
            style={{
              position: "relative",
              zIndex: 2,
              top: "50%",
              webkitTransform: "translate(0, -50%)",
              transform: "translate(0, -50%)",
              width: "80%",
              margin: "0 auto",
            }}
          >
            <p
              className="hero-description"
              style={{
                color: theme.colors.white,
                marginTop: 0,
                fontWeight: "700",
              }}
            >
              CASE STUDY —
            </p>
            <h1
              className="hero-title"
              style={{
                color: theme.colors.white,
                marginBottom: 18,
              }}
            >
              Grand Place
            </h1>
            <p
              className="hero-description"
              style={{ color: theme.colors.white, marginBottom: 0 }}
            >
              A branding system for a high-end real estate team.
            </p>
          </div>
          <div class="scroll-down">
            <a href="#section2">
              <img
                style={{ width: 35 }}
                src="/icons/down-arrow.svg"
                alt="Scroll down arrow"
              ></img>
            </a>
          </div>
          <div
            class="hero-bg"
            style={{
              backgroundImage: "url(./grand_place/gp-lake-cover.jpg)",
            }}
          ></div>
        </section>
         DISABLED - Case Study Hero - END */}

        <div
          className="background-color"
          style={{ backgroundColor: theme.colors.light }}
        >
          <div className="centering">
            <div
              className="project-flex"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-start",
                position: "relative",
                width: "100%",
              }}
            >
              <div
                className="project-flex-item"
                style={{
                  width: "calc(50%)",
                }}
              >
                <p
                  style={{
                    color: theme.colors.black,
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  CASE STUDY —
                </p>
                <h2
                  style={{
                    color: theme.colors.black,
                    textAlign: "left",
                    marginTop: 0,
                  }}
                >
                  Grand Place
                </h2>
              </div>

              <div
                className="project-flex-item"
                style={{
                  width: "calc(50%)",
                }}
              >
                <p style={{ color: theme.colors.black, marginTop: 0 }}>
                  Grand Place Real Estate is a growing team with a mission to
                  fulfill their clients' goals with seamless and trusting
                  service.
                </p>
                <p style={{ color: theme.colors.black }}>
                  With years of working under Keller Williams, it became clear
                  to the owners that they needed to distinguish themselves from
                  other teams at KW. Their brand was unrecognizable beyond the
                  parent brokerage. Many realtors face this as they rely on
                  templates for their brand, which results in everyone blending
                  in with the competition.
                </p>
                <p style={{ color: theme.colors.black, marginBottom: 0 }}>
                  <span style={{ fontWeight: 700 }}>Services Provided:</span>{" "}
                  Strategy, Naming, Identity Design, Typography &amp; Color,
                  Brand Guidelines, Signage, Printed Material
                </p>
              </div>
            </div>
          </div>

          {/*
          <div className="centering" style={{ paddingBottom: 0 }}>
            <div
              className="project-flex"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-start",
                position: "relative",
                width: "100%",
              }}
            >
              <div
                className="project-flex-item"
                style={{
                  width: "calc(50%)",
                }}
              >
                <h2
                  style={{
                    color: theme.colors.black,
                    fontSize: 32,
                    marginBottom: 32,
                  }}
                >
                  THE STORY
                </h2>

                <p style={{ color: theme.colors.black }}>
                  Grand Place Real Estate is a growing team with a mission to
                  fulfill their clients goals with seamless and trusting
                  service.
                </p>
                <p style={{ color: theme.colors.black }}>
                  After years of working under Keller Williams, it was clear to
                  the owners that they needed to distinguish themselves from
                  other teams at KW. Their brand was unrecognizable beyond the
                  parent brokerage. Many realtors rely on simple templates for
                  their brands which results in everyone blending in with the
                  competition.
                </p>
              </div>

              <div className="project-flex-item">
                <div className="services">
                  <h4
                    style={{
                      color: theme.colors.yellow,
                      margin: 0,
                      fontWeight: 700,
                      paddingBottom: 20,
                    }}
                  >
                    SERVICES PROVIDED:
                  </h4>

                  <p className="service-tags">+ Strategy</p>
                  <p className="service-tags">+ Brand Naming</p>
                  <p className="service-tags">+ Identity Design</p>
                  <p className="service-tags">+ Typography &amp; Color</p>
                  <p className="service-tags">+ Brand Guidelines</p>
                  <p className="service-tags">+ Signage</p>
                  <p className="service-tags">+ Print Material</p>
                </div>
              </div>
            </div>
          </div>
                  */}

          <div
            className="centering-logos"
            style={{ paddingTop: 0, paddingBottom: 0 }}
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
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div
                  className="image-block"
                  style={{
                    display: "flex",
                    width: "calc(100%)",
                  }}
                >
                  <img
                    style={{
                      alignSelf: "center",
                      width: "100%",
                      height: "auto",
                    }}
                    src="/grand_place/GrandPlace_StackedLogo.svg"
                    alt="Grand Place stacked logotype"
                  ></img>
                </div>
              </div>
            </div>
          </div>

          <div className="centering" id="section2" /* Scroll to here */>
            <div
              className="project-flex"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-start",
                position: "relative",
                width: "100%",
              }}
            >
              <div
                className="project-flex-item"
                style={{
                  width: "calc(70%)",
                  margin: "0 auto",
                }}
              >
                <h2
                  style={{
                    color: theme.colors.black,
                    fontSize: 32,
                    marginBottom: 32,
                  }}
                >
                  THE SOLUTION
                </h2>
                <p style={{ color: theme.colors.black }}>
                  With a new identity, they wanted their brand to target a
                  luxury market while still being approachable to first-home
                  buyers. We worked together to create a full branding package,
                  having a collaborative review at each step of the process.
                </p>

                <p
                  className="bullet-list-title"
                  style={{
                    color: theme.colors.black,
                  }}
                >
                  Develop a brand identity system that:
                </p>
                <ul className="bullet-list">
                  <li>
                    Represents their professional image: modern, clean, premium,
                    transparent.
                  </li>
                  <li>
                    Appeals to high-end clients without feeling overly
                    exclusive.
                  </li>
                  <li>
                    Provides a polished experience that spans across all aspects
                    of the business.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="centering"
            style={{ paddingTop: 0, paddingBottom: 0 }}
          >
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
                  width: "100%",
                }}
              >
                <div
                  className="image-block"
                  style={{
                    display: "flex",
                    width: "calc(100%)",
                  }}
                >
                  <img
                    style={{
                      alignSelf: "center",
                      width: "100%",
                      height: "auto",
                    }}
                    src="/grand_place/GrandPlace_Logos_CaseStudy.jpg"
                    alt="Grand Place Primary and Secondary Logos"
                  ></img>
                </div>
              </div>
            </div>
          </div>

          <div className="centering">
            <div
              className="project-flex"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-start",
                position: "relative",
                width: "100%",
              }}
            >
              <div
                className="project-flex-item"
                style={{
                  width: "calc(70%)",
                  margin: "0 auto",
                }}
              >
                <h2
                  style={{
                    color: theme.colors.black,
                    fontSize: 32,
                    marginBottom: 32,
                  }}
                >
                  BRAND NAMING
                </h2>
                <p style={{ color: theme.colors.black }}>
                  Previously operating under their last name, I worked with the
                  founders, George &amp; Page, to rename their company. The old
                  name was difficult to remember, and they wanted a name to
                  embrace them while they expand their team.
                </p>
                <p style={{ color: theme.colors.black, marginBottom: 0 }}>
                  We were aiming for an ownable name that suggests both luxury
                  and warmth to feel proud of—eventually landing on Grand Place.
                  As an added charm, the owners love that their new business
                  name happens to include their initials, G + P.
                </p>
              </div>
            </div>
          </div>

          <div
            className="centering"
            style={{ paddingTop: 0, paddingBottom: 0 }}
          >
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
                  width: "100%",
                }}
              >
                <div
                  className="image-block"
                  style={{
                    display: "flex",
                    width: "calc(100%)",
                    paddingTop: "1rem",
                  }}
                >
                  <img
                    style={{
                      alignSelf: "center",
                      width: "100%",
                      height: "auto",
                    }}
                    src="/grand_place/gp-box-and-key.png"
                    alt="Grand Place Box and Key"
                  ></img>
                </div>
              </div>
            </div>
          </div>

          <div className="centering">
            <div
              className="project-flex"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-start",
                position: "relative",
                width: "100%",
              }}
            >
              <div
                className="project-flex-item"
                style={{
                  width: "calc(70%)",
                  margin: "0 auto",
                }}
              >
                <h2
                  style={{
                    color: theme.colors.black,
                    fontSize: 31,
                    marginBottom: 32,
                  }}
                >
                  LOGO, TYPE &amp; COLOR
                </h2>
                <p style={{ color: theme.colors.black }}>
                  Starting with concept sketches, many ideas are then explored
                  and refined into a few of the best options to present to the
                  client.
                </p>
                <p style={{ color: theme.colors.black }}>
                  I knew I wanted to explore an option that emphasizes the
                  founders' initials within the business name. I solved this
                  with a custom 'GP' mark, used as a piece to the full logo. The
                  paired logotype is a customized treatment of the brand's main
                  typeface, Playfair Display. Poppins is used for body copy and
                  other supporting text.
                </p>
                <p style={{ color: theme.colors.black, marginBottom: 0 }}>
                  Throughout the process, I enjoy considering different
                  scenarios where the logo may used. Branding in this way
                  creates more optimization, having a dedicated logo for each
                  purpose.
                </p>
              </div>
            </div>
          </div>

          <div
            className="centering"
            style={{ paddingTop: 0, paddingBottom: 0 }}
          >
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
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div
                  className="image-block"
                  style={{
                    display: "flex",
                    width: "calc(50% - 0.5rem)",
                  }}
                >
                  <img
                    style={{
                      alignSelf: "center",
                      width: "100%",
                      height: "auto",
                    }}
                    src="/grand_place/gp-stacked-logo-color.jpg"
                    alt="Grand Place primary stacked logo in gold"
                  ></img>
                </div>

                <div
                  className="image-block"
                  style={{
                    display: "flex",
                    width: "calc(50% - 0.5rem)",
                  }}
                >
                  <img
                    style={{
                      alignSelf: "center",
                      width: "100%",
                      height: "auto",
                    }}
                    src="/grand_place/gp-clearspace.png"
                    alt="Grand Place minimum clear space guides"
                  ></img>
                </div>

                <div
                  className="image-block"
                  style={{
                    display: "flex",
                    width: "100%",
                    paddingTop: "1rem",
                  }}
                >
                  <img
                    style={{
                      alignSelf: "center",
                      width: "100%",
                      height: "auto",
                    }}
                    src="/grand_place/grandplace_colorpalette.png"
                    alt="Grand Place various logos color palette"
                  ></img>
                </div>

                <div
                  className="image-block"
                  style={{
                    display: "flex",
                    width: "calc(100%)",
                    paddingTop: "1rem",
                  }}
                >
                  <img
                    style={{
                      alignSelf: "center",
                      width: "100%",
                      height: "auto",
                    }}
                    src="/grand_place/BrandGuide_Presentation_Letter.jpg"
                    alt="Grand Place brand guidelines"
                  ></img>
                </div>
              </div>
            </div>
          </div>

          <div className="centering" style={{ paddingBottom: 0 }}>
            <p
              style={{
                textAlign: "center",
                color: theme.colors.black,
                fontWeight: 700,
                marginBottom: 32,
                marginTop: 0,
              }}
            >
              Unchosen Concepts:
            </p>
          </div>

          <div
            className="centering"
            style={{ paddingTop: 0, paddingBottom: 0 }}
          >
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
                    width: "calc(50% - 0.5rem)",
                  }}
                >
                  <img
                    style={{
                      alignSelf: "center",
                      width: "100%",
                      height: "auto",
                    }}
                    src="/grand_place/diamond-house-RD1-mockup.jpg"
                    alt="Unchosen diamond logo concept"
                  ></img>
                </div>

                <div
                  className="image-block"
                  style={{
                    display: "flex",
                    width: "calc(50% - 0.5rem)",
                  }}
                >
                  <img
                    style={{
                      alignSelf: "center",
                      width: "100%",
                      height: "auto",
                    }}
                    src="/grand_place/unchosen-concept-card.jpg"
                    alt="Unchosen key logo concept"
                  ></img>
                </div>

                <div
                  className="image-block"
                  style={{
                    display: "flex",
                    width: "100%",
                    paddingTop: "1rem",
                  }}
                >
                  <img
                    style={{
                      alignSelf: "center",
                      width: "100%",
                      height: "auto",
                    }}
                    src="/grand_place/logoprocess.jpg"
                    alt="Logo process review"
                  ></img>
                </div>
              </div>
            </div>
          </div>

          <div className="centering">
            <div
              className="project-flex"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-start",
                position: "relative",
                width: "100%",
              }}
            >
              <div
                className="project-flex-item"
                style={{
                  width: "calc(70%)",
                  margin: "0 auto",
                }}
              >
                <h2
                  style={{
                    color: theme.colors.black,
                    fontSize: 31,
                    lineHeight: "50px",
                    marginBottom: 32,
                  }}
                >
                  SIGNAGE &amp; PRINTED MATERIAL
                </h2>

                <p style={{ color: theme.colors.black, marginBottom: 0 }}>
                  With the industry's rules and regulations in mind, I began
                  applying the new branding to custom signs and other printed
                  material.
                </p>
              </div>
            </div>
          </div>

          <div
            className="centering-logos"
            style={{ paddingTop: 0, paddingBottom: 0 }}
          >
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
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div
                  className="image-block"
                  style={{
                    display: "flex",
                    width: "calc((100% / 3) - 0rem)",
                  }}
                >
                  <img
                    style={{
                      alignSelf: "center",
                      width: "100%",
                      height: "auto",
                    }}
                    src="/grand_place/GrandPlace_OpenHouseSign.svg"
                    alt="Grand Place Small Sign"
                  ></img>
                </div>

                <div
                  className="image-block"
                  style={{
                    display: "flex",
                    width: "calc((100% / 3) - 0rem)",
                  }}
                >
                  <img
                    style={{
                      alignSelf: "center",
                      width: "100%",
                      height: "auto",
                    }}
                    src="/grand_place/GrandPlace_LargeSign.svg"
                    alt="Grand Place Large Sign"
                  ></img>
                </div>

                <div
                  className="image-block"
                  style={{
                    display: "flex",
                    width: "calc((100% / 3) - 0rem)",
                  }}
                >
                  <img
                    style={{
                      alignSelf: "center",
                      width: "100%",
                      height: "auto",
                    }}
                    src="/grand_place/GrandPlace_Riders.svg"
                    alt="Grand Place Riders"
                  ></img>
                </div>
              </div>
            </div>
          </div>

          <div
            className="centering"
            style={{ paddingTop: 0, paddingBottom: 0 }}
          >
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
                  width: "100%",
                }}
              >
                <div
                  className="image-block"
                  style={{
                    display: "flex",
                    width: "calc(100%)",
                    paddingTop: "1rem",
                  }}
                >
                  <img
                    style={{
                      alignSelf: "center",
                      width: "100%",
                      height: "auto",
                    }}
                    src="/grand_place/gp-businesscard-rd2-option2.png"
                    alt="Grand Place Business Card Design"
                  ></img>
                </div>

                <div
                  className="image-block"
                  style={{
                    display: "flex",
                    width: "calc(100%)",
                    paddingTop: "1rem",
                  }}
                >
                  <img
                    style={{
                      alignSelf: "center",
                      width: "100%",
                      height: "auto",
                    }}
                    src="/grand_place/gp-homesellersguide-mockup-v2.jpg"
                    alt="Grand Place Home Seller's Guide"
                  ></img>
                </div>

                <div
                  className="image-block"
                  style={{
                    display: "flex",
                    width: "calc(50%)",
                    paddingTop: "1rem",
                  }}
                >
                  <img
                    style={{
                      alignSelf: "center",
                      width: "100%",
                      height: "auto",
                    }}
                    src="/grand_place/GrandPlace_Logomark_Color.png"
                    alt="Grand Place Logomark"
                  ></img>
                </div>
              </div>
            </div>
          </div>

          {/* Services + Intro Paragraph - END */}

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
              <Link to="/thanks" onClick={() => window.scrollTo(0, 0)}>
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
                    I enjoy contributing meaningful and well-planned logos that
                    are strong for your industry. If you're dreaming of a new
                    identity or are in need of a fresh update to an existing
                    logo, let's go!
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
    </div>
  );
}
