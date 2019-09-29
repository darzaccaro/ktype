import React from "react";
import theme from "../theme";
import { Link } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function About() {
  const { width } = useWindowDimensions();
  return (
    <div>
      <div style={{ maxWidth: theme.sizes.contentWidth, margin: "0 auto" }}>
        <h1
          style={{ textAlign: "center", marginBottom: theme.sizes.spacingV1 }}
        >
          Hi, I'm Kade<br></br>...
        </h1>
        <img
          src="/about/01_sketching.jpg"
          alt="sketching"
          maxHeight="400px"
          width="100%"
        />
        <div
          style={{
            paddingLeft:
              width < theme.breakpoints.mobile ? theme.sizes.spacingV3 : 0
          }}
        >
          <h2
            style={{
              color: theme.colors.grey,
              marginTop: theme.sizes.spacingV3
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
        <div style={{ overflow: "hidden", marginTop: theme.sizes.spacingV3 }}>
          <img
            style={{ float: "right" }}
            src="/about/02_profile.jpg"
            alt="profile"
            width="800px"
          ></img>
          <div
            style={{
              paddingLeft:
                width < theme.breakpoints.mobile ? theme.sizes.spacingV3 : 0
            }}
          >
            <h3 style={{ marginTop: 0 }}>Services</h3>
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
      </div>
      <div
        style={{
          backgroundColor: theme.colors.brown,
          marginTop: theme.sizes.spacingV1
        }}
      >
        <h2
          style={{
            color: theme.colors.white,
            textAlign: "center",
            padding: 50,
            marginBottom: 0,
            marginTop: 0
          }}
        >
          MY APPROACH &amp; CORE VALUES
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
            width: 73,
            height: theme.sizes.triangleHeight
          }}
        >
          <img
            src="/icons/triangle.png"
            alt="triangle icon"
            style={{ margin: 0, height: theme.sizes.triangleHeight }}
          ></img>
        </div>
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
            style={{ float: "right" }}
            src="/about/03_approach.jpg"
            alt="approach"
            width={500}
          ></img>
          <div
            style={{
              paddingLeft:
                width < theme.breakpoints.mobile ? theme.sizes.spacingV3 : 0
            }}
          >
            <h3 style={{ color: theme.colors.brown }}>Approach</h3>
            {[
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
            ].map((e, i) => (
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
        </div>
        <div
          style={{
            overflow: "hidden",
            width: theme.sizes.contentWidth,
            margin: "0 auto",
            marginBottom: theme.sizes.spacingV1
          }}
        >
          <img
            style={{ float: "right" }}
            src="/about/04_approach2.jpg"
            alt="another approach"
            width={500}
          ></img>
          <div
            style={{
              paddingLeft:
                width < theme.breakpoints.mobile ? theme.sizes.spacingV3 : 0
            }}
          >
            <h3 style={{ color: theme.colors.brown }}>Core Values</h3>
            {[
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
            ].map((e, i) => (
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
        </div>
        <div
          style={{
            overflow: "hidden",
            width: theme.sizes.contentWidth,
            margin: "0 auto",
            paddingBottom: theme.sizes.spacingV1
          }}
        >
          <img
            style={{ float: "right" }}
            src="/about/06_studiobooks.jpg"
            alt="books"
            width={500}
          ></img>
          <div style={{ width: 465 + theme.sizes.indent }}>
            <div
              style={{
                paddingLeft:
                  width < theme.breakpoints.mobile ? theme.sizes.spacingV3 : 0
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
                  &ldquo;Design is not a thing you do. It is a way of
                  life.&rdquo;
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
      </div>
    </div>
  );
}
