//@flow
import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import theme from "./theme";
import NavLink from "./components/NavLink";
import BarLink from "./components/BarLink";

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
  const images = [
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
  ];
  return (
    <div>
      <div
        style={{
          width: theme.sizes.contentWidth,
          margin: "0 auto",
          marginBottom: theme.sizes.spacingV1,
          overflow: "hidden"
        }}
      >
        <h1 style={{ display: "inline-block" }}>Lettering Set</h1>
        <p
          style={{
            display: "inline-block",
            float: "right",
            marginTop: 35
          }}
        >
          A collection of custom hand-drawn lettering from over the years
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: theme.sizes.contentWidth,
          margin: "0 auto",
          marginBottom: theme.sizes.spacingV1
        }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            width={theme.sizes.contentWidth}
            style={{ marginBottom: theme.sizes.spacingV2 }}
          />
        ))}
      </div>
      <BarLink text="VIEW ALL WORK" to="/work" />
    </div>
  );
}
function SketchBook() {
  return <div>sketchbook</div>;
}

function App(props) {
  return (
    <div>
      <header
        style={{
          width: theme.sizes.contentWidth,
          margin: "0 auto",
          marginBottom: theme.sizes.spacingV1,
          overflow: "hidden"
        }}
      >
        <Link to={"/"} style={{ width: 50, float: "left" }}>
          <img src="/logo.svg" alt="logo" />
        </Link>
        <nav
          style={{
            paddingTop: 20,
            float: "right"
          }}
        >
          <NavLink text="WORK" to="/work" />
          <NavLink text="ABOUT" to="/about" />
          <NavLink text="CONTACT" to="/contact" />
        </nav>
      </header>

      <Route exact path="/" component={Work} />
      <Route path="/work" component={Work} />
      <Route path="/lettering-set" component={LetteringSet} />
      <Route path="/sketchbook" component={SketchBook} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />

      <footer
        style={{
          backgroundColor: theme.colors.light,
          textAlign: "center"
        }}
      >
        <div style={{ padding: 200 }}>
          <a
            href="mailto: hi@ktype.xyz"
            style={{ fontSize: "3em", fontWeight: "bold" }}
          >
            hi@ktype.xyz
          </a>
          <p
            style={{
              fontFamily: theme.fonts.sans,
              letterSpacing: theme.sizes.letterSpacingWide,
              fontWeight: 300
            }}
          >
            LET'S START A PROJECT
          </p>
        </div>
        <p
          style={{
            backgroundColor: theme.colors.white,
            padding: 25,
            marginBottom: 0
          }}
        >
          All visual material &copy; Kade Tyler{" "}
          <span>
            <Link to="/credits">| Site Credit</Link>
          </span>
        </p>
      </footer>
    </div>
  );
}

export default App;
