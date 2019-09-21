//@flow
import React, { useState } from "react";
import theme from "./theme";
import { Route, Link } from "react-router-dom";
import "./App.css";

import BarLink from "./components/BarLink";
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
            <h4
              style={{
                color: theme.colors.black,
                textAlign: "center",
                marginBottom: 0
              }}
            >
              {title}
            </h4>
            <p
              style={{
                textAlign: "center",
                marginTop: 5,
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
  return <div>about</div>;
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
