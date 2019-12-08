import React from "react";
import theme from "../theme";
import { Link } from "react-router-dom";
import useWindowWidth from "../hooks/useWindowWidth";

//TODO (cleanup): pass all data in once to two seperate full templates (one mobile, and one desktop)
export default function About() {
  const width = useWindowWidth();
  return (
    <div className="anim-fade-in">
      <div style={{ maxWidth: theme.sizes.contentWidth, margin: "0 auto" }}>
        <p
          style={{
            textAlign: "center",
            marginTop: 60,
            marginBottom: theme.sizes.spacingV1 + 22,
            fontWeight: "normal",
            fontSize: "27px",
            lineHeight: "40px"
          }}
        >
          Hi, I'm Kade<br></br>
          <strong style={{ letterSpacing: 8 }}>...</strong>
        </p>
        <img
          src="/about/01_sketching.jpg"
          alt="A photo of Kade Tyler making edits to lettering with a pencil"
          maxHeight="400px"
          width="100%"
        />
        <LinkSection isMobile={width < theme.breakpoints.mobile} />
      </div>
      <div
        style={{
          backgroundColor: theme.colors.brown,
          marginTop:
            width < theme.breakpoints.mobile
              ? theme.sizes.spacingV1
              : theme.sizes.spacingV1 + 32
        }}
      >
        <h2
          style={{
            color: theme.colors.white,
            textAlign: "center",
            padding: 50,
            paddingTop: 55,
            marginBottom: 0,
            fontSize: width < theme.breakpoints.mobile ? 18 : 21,
            letterSpacing: 10
          }}
        >
          MY APPROACH{width > theme.breakpoints.mobile && " & CORE VALUES"}
        </h2>
      </div>
      <div
        style={{
          backgroundColor: theme.colors.black
        }}
      >
        <div
          style={{
            margin: "0 auto",
            width: 43,
            position: "relative",
            bottom: 6,
            height: theme.sizes.triangleHeight
          }}
        >
          <img
            src="/icons/triangle.png"
            alt="triangle icon"
            style={{ margin: 0, height: theme.sizes.triangleHeight }}
          ></img>
        </div>
        <Section
          isMobile={width < theme.breakpoints.mobile}
          title="Approach"
          src="/about/03_approach.jpg"
          data={[
            {
              title1: "PHASE 1 — ",
              title2: "DISCOVERY",
              description:
                "Understand your goals and what drives you. Establish a personalized project road map."
            },
            {
              title1: "PHASE 2 — ",
              title2: "STRATEGY",
              description:
                "Analyze your industry landscape. Uncover an opportunistic pathway while taking note of avoidances."
            },
            {
              title1: "PHASE 3 — ",
              title2: "DESIGN",
              description:
                "Explore, trial, and reflect on various solutions. Carefully refine and bring meaningful ideas to life."
            },
            {
              title1: "PHASE 4 — ",
              title2: "DEADLINE",
              description:
                "Finalize and prepare all project deliverables. Launch forward-looking solutions to the world."
            }
          ]}
        />
        <Section
          isMobile={width < theme.breakpoints.mobile}
          title="Core Values"
          src="/about/04_approach2.jpg"
          data={[
            {
              title2: "DESIGN WITH PURPOSE.",
              description:
                "Design needs a clear purpose for existing; therefore, it should always be prompted by a foundational blueprint. Consider the “why?” throughout every project."
            },
            {
              title2: "FAILURE IS ALLOWED.",
              description:
                "Visual problems have unlimited solutions. The valid solutions are identified through the result of many failed explorations."
            },
            {
              title2: "CRITICAL EYES.",
              description:
                "Critically accept and provide mindful feedback. Observe problems objectively with openness and a dynamic perspective."
            }
          ]}
        />
        {/* <div style={{ padding: 40 }}></div> */}
        <Signature isMobile={width < theme.breakpoints.mobile} />
        <div
          style={{
            padding: 16,
            marginTop: 0
          }}
        ></div>
      </div>
    </div>
  );
}

function LinkSection({ isMobile, title, src, data }) {
  if (isMobile) {
    return (
      <div>
        <div
          style={{
            marginTop: theme.sizes.spacingV3,
            width: "90%",
            margin: "0 auto",
            maxWidth: "400px"
          }}
        >
          <div>
            <h2
              style={{
                color: theme.colors.grey,
                marginTop: theme.sizes.spacingV3,
                fontWeight: "normal",
                fontSize: 15
              }}
            >
              DESIGN &amp; LETTERING
            </h2>
            <p>
              I’m a graphic designer focused on mindful typographic arts. My
              passion-driven process repeats extensive trials and explorations
              to provide enduring solutions.
            </p>
          </div>
          <div>
            <h3 style={{ marginTop: theme.sizes.spacingV3 }}>Services</h3>
            <ul style={{ marginBottom: theme.sizes.spacingV3 }}>
              <li>Branding & Strategy</li>
              <li>Identity Design</li>
              <li>Logotype Design</li>
              <li>Custom Lettering</li>
              <li>Illustration</li>
              <li>Web Design</li>
            </ul>
            <h3 style={{ marginTop: theme.sizes.spacingV3 }}>Elsewhere</h3>
            <ul style={{ marginBottom: theme.sizes.spacingV3 }}>
              <li>
                <a
                  href="https://instagram.com/ktype.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://behance.net/ktype"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Behance
                </a>
              </li>
              <li>
                <a
                  href="https://dribbble.com/ktype"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dribbble
                </a>
              </li>
            </ul>
          </div>
        </div>
        <img
          style={{ marginTop: theme.sizes.spacingV3 - 6 }}
          src="/about/02_profile.jpg"
          alt="A photo of Kade Tyler"
          width="100%"
        ></img>
      </div>
    );
  } else {
    return (
      <div style={{ overflow: "hidden" }}>
        <div>
          <h2
            style={{
              color: theme.colors.grey,
              marginTop: theme.sizes.spacingV3,
              fontWeight: "normal",
              fontSize: 15
            }}
          >
            DESIGN &amp; LETTERING
          </h2>
          <p>
            I’m a graphic designer focused on mindful typographic arts. My
            passion-driven process repeats extensive trials and explorations to
            provide enduring solutions.
          </p>
        </div>
        <img
          style={{ float: "right", marginTop: theme.sizes.spacingV3 - 6 }}
          src="/about/02_profile.jpg"
          alt="A photo of Kade Tyler"
          width="650px"
        ></img>
        <div>
          <h3 style={{ marginTop: theme.sizes.spacingV3 + 7 }}>Services</h3>
          <ul>
            <li>Branding & Strategy</li>
            <li>Identity Design</li>
            <li>Logotype Design</li>
            <li>Custom Lettering</li>
            <li>Illustration</li>
            <li>Web Design</li>
          </ul>
          <h3 style={{ marginTop: theme.sizes.spacingV3 + 7 }}>Elsewhere</h3>
          <ul>
            <li>
              <a
                href="https://instagram.com/ktype.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://behance.net/ktype"
                target="_blank"
                rel="noopener noreferrer"
              >
                Behance
              </a>
            </li>
            <li>
              <a
                href="https://dribbble.com/ktype"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dribbble
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

function Section({ isMobile, title, src, data }) {
  if (isMobile) {
    return (
      <div>
        <div
          style={{
            overflow: "hidden",
            margin: "0 auto",
            width: "90%",
            maxWidth: "400px",
            marginTop: theme.sizes.spacingV1 + 22 - theme.sizes.triangleHeight,
            marginBottom: theme.sizes.spacingV1
          }}
        >
          <div>
            <h3
              style={{
                color: theme.colors.brown,
                marginBottom: theme.sizes.spacingV3
              }}
            >
              {title}
            </h3>
            {data.map((e, i) => (
              <div
                key={i}
                style={{ marginLeft: theme.sizes.indent, width: 400 }}
              >
                <h5 style={{ color: theme.colors.white }}>
                  {e.title1}
                  <span style={{ color: theme.colors.brown }}>{e.title2}</span>
                </h5>
                <p
                  style={{
                    color: theme.colors.white,
                    marginBottom: theme.sizes.spacingV3,
                    width: "75%"
                  }}
                >
                  {e.description}
                </p>
              </div>
            ))}
          </div>
          <div style={{ marginBottom: theme.sizes.spacingV1 }}></div>
          <img
            style={{
              display: "block",
              margin: "0 auto",
              marginTop: 5
            }}
            src={src}
            alt={title}
            width={"100%"}
            maxWidth={"400px"}
          ></img>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          overflow: "hidden",
          width: theme.sizes.contentWidth,
          margin: "0 auto",
          marginTop: theme.sizes.spacingV1 + 30,
          marginBottom: theme.sizes.spacingV1 - 28
        }}
      >
        <img
          style={{
            float: "right",
            marginTop: 5,
            maxWidth: 400
          }}
          src={src}
          alt={title}
        ></img>
        <div>
          <h3
            style={{
              color: theme.colors.brown,
              marginBottom: theme.sizes.spacingV3 + 10
            }}
          >
            {title}
          </h3>
          {data.map((e, i) => {
            let marginBottom =
              i !== Object.keys(data).length - 1
                ? theme.sizes.spacingV3 + 10
                : 25;
            return (
              <div
                key={i}
                style={{
                  marginLeft: theme.sizes.indent + theme.sizes.spacingV3,
                  maxWidth: 400
                }}
              >
                <h5 style={{ color: theme.colors.white }}>
                  {e.title1}
                  <span style={{ color: theme.colors.brown }}>{e.title2}</span>
                </h5>
                <p
                  style={{
                    color: theme.colors.white,
                    marginBottom
                  }}
                >
                  {e.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function Signature({ isMobile }) {
  if (isMobile) {
    return (
      <div
        style={{
          overflow: "auto",
          width: "90%",
          maxWidth: "400px",
          margin: "0 auto",
          paddingBottom: theme.sizes.spacingV1
        }}
      >
        <div style={{ maxWidth: 465 + theme.sizes.indent }}>
          <div>
            <p
              style={{
                color: theme.colors.white,
                marginTop: 0,
                marginBottom: theme.sizes.spacingV3
              }}
            >
              <em>
                &ldquo;Design is not a thing you do. It is a way of life.&rdquo;
              </em>
              <br />
              &mdash;Alan Fletcher, circa 1956
            </p>
            <p
              style={{
                color: theme.colors.white,
                marginTop: 0,
                marginBottom: theme.sizes.spacingV3
              }}
            >
              Thank you for reading a bit about my process. If you have a
              project consideration or just have a question, I'd be glad to
              help... <Link to="/contact"> Come say hi!</Link>
            </p>
          </div>
          <img
            style={{
              marginLeft: theme.sizes.indent,
              marginBottom: theme.sizes.spacingV3
            }}
            width="140px"
            src="/about/05_signature.png"
            alt="Artist signature"
          ></img>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <img
                style={{
                  display: "block",
                  margin: "0 auto",
                  marginTop: 5,
                  maxWidth: 400
                }}
                src="/about/06_studiobooks.jpg"
                alt="A collection of Graphic Design books; topics consist of lettering, branding, and typography"
                width={"100%"}
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          overflow: "hidden",
          width: theme.sizes.contentWidth,
          margin: "0 auto",
          paddingBottom: theme.sizes.spacingV1 + 22,
          paddingTop: theme.sizes.spacingV1 - 30
        }}
      >
        <img
          style={{ float: "right" }}
          src="/about/06_studiobooks.jpg"
          alt="A collection of Graphic Design books; topics consist of lettering, branding, and typography"
          width={400}
        ></img>
        <div style={{ width: 465 + theme.sizes.indent }}>
          <div>
            <p
              style={{
                color: theme.colors.white,
                marginTop: -5,
                marginBottom: theme.sizes.spacingV3
              }}
            >
              <em>
                &ldquo;Design is not a thing you do. It is a way of life.&rdquo;
              </em>
              <br></br>
              &mdash;Alan Fletcher, circa 1956
            </p>
            <p
              style={{
                color: theme.colors.white,
                marginTop: 48,
                marginBottom: theme.sizes.spacingV3 + 10
              }}
            >
              Thank you for reading a bit about my process. If you have a
              project consideration or just have a question, I'd be glad to
              help... <Link to="/contact"> Come say hi!</Link>
            </p>
          </div>
          <div
            style={{ marginLeft: theme.sizes.indent + theme.sizes.spacingV3 }}
          >
            <img
              width="140px"
              src="/about/05_signature.png"
              alt="Artist signature"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
