//@flow
import React, { useState } from "react";
import theme from "./theme";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

import WorkTemplateA from "./components/WorkTemplateA";

function Work() {
  const works = [
    {
      title: "LETTERING SET",
      description: "Custom Lettering",
      imgSrc: "/work/01_Thumbnail_LetteringSet.jpg",
      to: "/lettering-set"
    },
    {
      title: "SKETCHBOOK",
      description: "Custom Lettering",
      imgSrc: "/work/02_Thumbnail_Sketchbook.jpg",
      to: "/sketchbook"
    }
  ];
  function Card({ title, description, imgSrc, to }) {
    const [visibility, setVisibility] = useState("hidden");
    return (
      <Link to={to}>
        <div
          onMouseOver={() => setVisibility("visible")}
          onMouseLeave={() => setVisibility("hidden")}
          style={{
            backgroundImage: `url(${imgSrc})`,
            width: theme.sizes.cardWidth,
            height: theme.sizes.cardHeight
          }}
        >
          <div
            style={{
              visibility,
              backgroundColor: "white",
              width: theme.sizes.cardWidth - 85,
              height: theme.sizes.cardHeight / 4,
              position: "relative",
              top: 25,
              margin: "0 auto",
              padding: 15
            }}
          >
            <h6
              style={{
                color: theme.colors.black,
                textAlign: "center",
                marginBottom: 0
              }}
            >
              {title}
            </h6>
            <p
              style={{
                textAlign: "center",
                marginTop: 0,
                fontStyle: "italic"
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <div
      style={{
        marginTop: theme.sizes.spacingV1
      }}
    >
      <p
        style={{
          fontSize: "1.5em",
          textAlign: "center",
          marginBottom: theme.sizes.spacingV1
        }}
      >
        The strategic visual design studio of Kade Tyler&mdash;specializing in
        <br />
        thoughtful visual identities &amp; custom lettering.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: theme.sizes.contentWidth,
          margin: "0 auto",
          marginBottom: theme.sizes.spacingV1
        }}
      >
        {works.map((w, i) => (
          <Card
            key={i}
            title={w.title}
            description={w.description}
            imgSrc={w.imgSrc}
            to={w.to}
          />
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <div style={{ width: theme.sizes.contentWidth, margin: "0 auto" }}>
        <h1
          style={{ textAlign: "center", marginBottom: theme.sizes.spacingV1 }}
        >
          Hi, I'm Kade<br></br>...
        </h1>
        <img src="/about/01_sketching.jpg" alt="sketching" height="400px"></img>
        <h2
          style={{ color: theme.colors.grey, marginTop: theme.sizes.spacingV3 }}
        >
          DESIGN &amp; LETTERING
        </h2>
        <p>
          I’m a designer focused on expanding meaning into enduring visuals. My
          passion-driven process generates thoughtful design solutions through
          the repetition of extensive trials and explorations.
        </p>
        <div style={{ overflow: "hidden", marginTop: theme.sizes.spacingV3 }}>
          <img
            style={{ float: "right" }}
            src="/about/02_profile.jpg"
            alt="profile"
            width="800px"
          ></img>
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
            <div key={i} style={{ marginLeft: theme.sizes.indent, width: 400 }}>
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
            <div key={i} style={{ marginLeft: theme.sizes.indent, width: 400 }}>
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

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priceRange, setPriceRange] = useState(2);
  const priceRanges = [
    "< $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 +"
  ];
  function resetForm() {
    setName("");
    setEmail("");
    setSubject("");
    setDetails("");
    setDeadline("");
    setPriceRange(2);
  }
  function handleSubmit(event) {
    console.log(
      "Submitting from client",
      name,
      email,
      subject,
      details,
      deadline,
      priceRange
    );
    //TODO: post req
    fetch("http://localhost:3000/testmail", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify({
        name,
        email,
        subject,
        details,
        deadline,
        priceRange
      })
    }).then(response => console.log("Got back", response.json()));
    event.preventDefault();
  }
  return (
    <div>
      <p>
        If you have a question, inquiry, or just want to say hi, you can write
        me at <a href="mailto:hi@ktype.xyz">hi@ktype.xyz</a> or use the form
        below.
      </p>
      <form
        // action="http://localhost:3000/testmail"
        // method="post"
        // encType="text/plain"
        onSubmit={handleSubmit}
      >
        <div>
          <div>
            Full Name:
            <br />
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              name="name"
              autoComplete="off"
            />
          </div>
          <div>
            Email Address:
            <br />
            <input
              // TODO: validate e-mail
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="text"
              name="email"
              autoComplete="off"
            />
          </div>
        </div>
        Subject:
        <br />
        <input
          value={subject}
          onChange={e => setSubject(e.target.value)}
          type="text"
          name="subject"
          size="50"
          autoComplete="off"
        />
        <br />
        <div>
          Project Details: Who are you? What are your goals for this project?
          <br />
          <textarea
            value={details}
            onChange={e => setDetails(e.target.value)}
            name="details"
            cols={40}
            rows={8}
          />
        </div>
        When does this project need to be finished?
        <br />
        <input
          value={deadline}
          onChange={e => setDeadline(e.target.value)}
          type="text"
          name="deadline"
          size="50"
          autoComplete="off"
        />
        <br />
        <select
          value={priceRange}
          onChange={e => setPriceRange(e.target.value)}
        >
          <option value={0}>{priceRanges[0]}</option>
          <option value={1}>{priceRanges[1]}</option>
          <option selected value={2}>
            {priceRanges[2]}
          </option>
          <option value={3}>{priceRanges[3]}</option>
        </select>
        <br />
        <div>
          <button onClick={e => handleSubmit(e)}>Submit</button>
          <button onClick={e => resetForm()}>Reset</button>
        </div>
      </form>
    </div>
  );
}

function LetteringSet() {
  return (
    <WorkTemplateA
      title="Lettering Set"
      description="A collection of custom hand-drawn lettering from over the years"
      images={[
        {
          src: "/lettering_set/01_rhythm.jpg",
          alt: "rhythm"
        },
        {
          src: "/lettering_set/02_correlate.jpg",
          alt: "correlate"
        },
        {
          src: "/lettering_set/03_sunday.jpg",
          alt: "sunday"
        },
        {
          src: "/lettering_set/04_thanks.jpg",
          alt: "thanks"
        },
        {
          src: "/lettering_set/05_balance.jpg",
          alt: "balance"
        },
        {
          src: "/lettering_set/06_surreal.jpg",
          alt: "surreal"
        },
        {
          src: "/lettering_set/07_format.jpg",
          alt: "format"
        },
        {
          src: "/lettering_set/08_jfs.jpg",
          alt: "jfs"
        },
        {
          src: "/lettering_set/09_faux.jpg",
          alt: "faux"
        },
        {
          src: "/lettering_set/10_refine.jpg",
          alt: "refine"
        }
      ]}
    />
  );
}
function SketchBook() {
  return (
    <WorkTemplateA
      title="Sketchbook"
      description="Various in-progress lettering sketches, vector processes, and play."
      images={[
        {
          src: "/sketchbook/01_process_wip.jpg",
          alt: "process (WIP)"
        },
        {
          src: "/sketchbook/02_thanks_progression.gif",
          alt: "thanks (progression)"
        },
        {
          src: "/sketchbook/03_quiver_sketch.jpg",
          alt: "quiver (sketch)"
        },
        {
          src: "/sketchbook/04_quiver_sketch2.jpg",
          alt: "another quiver (sketch)"
        },
        {
          src: "/sketchbook/05_jfs_progression.gif",
          alt: "jfs (progression)"
        },
        {
          src: "/sketchbook/06_a_sketch_play.gif",
          alt: "a playful sketch (progression)"
        },
        {
          src: "/sketchbook/07_push_through.jpg",
          alt: "push through"
        }
      ]}
    />
  );
}

function App(props) {
  return (
    <div>
      <Header />
      <Route exact path="/" component={Work} />
      <Route path="/work" component={Work} />
      <Route path="/lettering-set" component={LetteringSet} />
      <Route path="/sketchbook" component={SketchBook} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Footer />
    </div>
  );
}

export default App;
