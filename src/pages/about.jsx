import React from "react";
import theme from "../theme";
import { Link } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";

//TODO (cleanup): pass all data in once to two seperate full templates (one mobile, and one desktop)
export default function About() {
  const { width } = useWindowDimensions();
  return (
    <div>
      <div style={{ maxWidth: theme.sizes.contentWidth, margin: "0 auto" }}>
        <p
          style={{
            textAlign: "center",
            marginBottom: theme.sizes.spacingV1,
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
          alt="sketching"
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
              : theme.sizes.spacingV1 + 55 - 12
        }}
      >
        <h2
          style={{
            color: theme.colors.white,
            textAlign: "center",
            padding: 50,
            paddingTop: 55,
            marginBottom: 0,
            fontSize: 21,
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
              title: "PHASE 1: DISCOVERY",
              description:
                "Understand your goals and what drives you. Establish a personalized project road map."
            },
            {
              title: "PHASE 2: STRATEGY",
              description:
                "Conscientiously analyze your industry landscape. Uncover an opportunistic pathway."
            },
            {
              title: "PHASE 3: DESIGN",
              description:
                "Explore, trial, and reflect on various solutions. Meticulously refine meaningful ideas into form."
            },
            {
              title: "PHASE 4: DEADLINE",
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
              title: "DEFINE FRAMEWORK.",
              description:
                "No structure can last without a foundational blueprint. Endlessly reference personal values among the underlying core."
            },
            {
              title: "ALLOW FAILURE.",
              description:
                "Visual problems have unlimited solutions. The valid solutions are identified through the result of many failed explorations."
            },
            {
              title: "CRITICAL EYES.",
              description:
                "Critically accept and provide mindful feedback. Observe problems objectively with openness and a dynamic perspective."
            }
          ]}
        />
        <Signature isMobile={width < theme.breakpoints.mobile} />
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
              I’m a designer focused on expanding meaning into enduring visuals.
              My passion-driven process generates thoughtful design solutions
              through the repetition of extensive trials and explorations.
            </p>
          </div>
          <div>
            <h3 style={{ marginTop: theme.sizes.spacingV3 }}>Services</h3>
            <ul style={{ marginBottom: theme.sizes.spacingV3 }}>
              <li>Branding & Strategy</li>
              <li>Visual Identity</li>
              <li>Design Systems</li>
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
          style={{ marginTop: theme.sizes.spacingV3 - 16 }}
          src="/about/02_profile.jpg"
          alt="profile"
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
            I’m a designer focused on expanding meaning into enduring visuals.
            My passion-driven process generates thoughtful design solutions
            through the repetition of extensive trials and explorations.
          </p>
        </div>
        <img
          style={{ float: "right", marginTop: theme.sizes.spacingV3 - 16 }}
          src="/about/02_profile.jpg"
          alt="profile"
          width="600px"
        ></img>
        <div>
          <h3 style={{ marginTop: theme.sizes.spacingV3 }}>Services</h3>
          <ul>
            <li>Branding & Strategy</li>
            <li>Visual Identity</li>
            <li>Design Systems</li>
            <li>Custom Lettering</li>
            <li>Illustration</li>
            <li>Web Design</li>
          </ul>
          <h3 style={{ marginTop: theme.sizes.spacingV3 }}>Elsewhere</h3>
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
            marginTop: theme.sizes.spacingV1 - theme.sizes.triangleHeight,
            marginBottom: theme.sizes.spacingV1
          }}
        >
          <div>
            <h3 style={{ color: theme.colors.brown }}>{title}</h3>
            {data.map((e, i) => (
              <div
                key={i}
                style={{ marginLeft: theme.sizes.indent, width: 400 }}
              >
                <h5 style={{ color: theme.colors.white }}>{e.title}</h5>
                <p
                  style={{
                    color: theme.colors.grey,
                    marginBottom: theme.sizes.spacingV3
                  }}
                >
                  {e.description}
                </p>
              </div>
            ))}
          </div>
          <img
            style={{
              display: "block",
              margin: "0 auto",
              marginTop: 8
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
          marginTop: theme.sizes.spacingV1 - theme.sizes.triangleHeight,
          marginBottom: theme.sizes.spacingV1
        }}
      >
        <img
          style={{ float: "right", marginTop: 8, maxWidth: 400 }}
          src={src}
          alt={title}
        ></img>
        <div>
          <h3 style={{ color: theme.colors.brown }}>{title}</h3>
          {data.map((e, i) => (
            <div
              key={i}
              style={{
                marginLeft: theme.sizes.indent + theme.sizes.spacingV3,
                maxWidth: 400
              }}
            >
              <h5 style={{ color: theme.colors.white }}>{e.title}</h5>
              <p
                style={{
                  color: theme.colors.grey,
                  marginBottom: theme.sizes.spacingV3
                }}
              >
                {e.description}
              </p>
            </div>
          ))}
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
          <div
            style={{
              paddingLeft: theme.sizes.spacingV3
            }}
          >
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
              <br></br>
              &mdash;Alan Fletcher, circa 1956
            </p>
            <p
              style={{
                color: theme.colors.white,
                marginTop: 0,
                marginBottom: theme.sizes.spacingV3
              }}
            >
              Thank you for reading a bit about my process.<br></br> If you’re
              interested in what I do, <Link to="/contact">come say hi.</Link>
            </p>
          </div>
          <img
            style={{ marginLeft: theme.sizes.indent }}
            width="140px"
            src="/about/05_signature.png"
            alt="signature"
          ></img>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ display: "block", margin: "0 auto", marginTop: 8 }}
              src="/about/06_studiobooks.jpg"
              alt="books"
              width={"100%"}
              maxWidth="400px"
            ></img>
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
          paddingBottom: theme.sizes.spacingV1
        }}
      >
        <img
          style={{ float: "right", marginTop: 8 }}
          src="/about/06_studiobooks.jpg"
          alt="books"
          width={400}
        ></img>
        <div style={{ width: 465 + theme.sizes.indent }}>
          <div
            style={{
              paddingLeft: theme.sizes.spacingV3
            }}
          >
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
              <br></br>
              &mdash;Alan Fletcher, circa 1956
            </p>
            <p
              style={{
                color: theme.colors.white,
                marginTop: 0,
                marginBottom: theme.sizes.spacingV3
              }}
            >
              Thank you for reading a bit about my process.<br></br> If you’re
              interested in what I do, <Link to="/contact">come say hi.</Link>
            </p>
          </div>
          <img
            style={{ marginLeft: theme.sizes.indent }}
            width="140px"
            src="/about/05_signature.png"
            alt="signature"
          ></img>
        </div>
      </div>
    );
  }
}
