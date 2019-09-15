//@flow
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Work() {
  function Card({ title, description, imgPath, to }) {
    const [visibility, setVisibility] = useState("hidden");
    return (
      <Link to={to}>
        <div
          onMouseOver={() => setVisibility("visible")}
          onMouseLeave={() => setVisibility("hidden")}
          style={{
            backgroundImage: `url(${imgPath})`,
            width: 500,
            height: 500
          }}
        >
          <div
            style={{
              visibility,
              backgroundColor: "white",
              width: 200,
              height: 100
            }}
          >
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div>
      <p>
        The strategic visual design studio of Kade Tyler&mdash;specializing in
        thoughtful visual identities &amp; custom lettering.
      </p>
      <div>
        <Card
          title="LETTERING SET"
          description="Custom Lettering"
          imgPath="01_Thumbnail_LetteringSet.jpg"
          to="/lettering-set"
        />
        <Card
          title="SKETCHBOOK"
          description="Custom Lettering"
          imgPath="02_Thumbnail_Sketchbook.jpg"
          to="/sketchbook"
        />
      </div>
    </div>
  );
}
function About() {
  return <div>about</div>;
}
function Contact() {
  return <div>contact</div>;
}
function LetteringSet() {
  return <div>lettering set</div>;
}
function SketchBook() {
  return <div>sketchbook</div>;
}
function App() {
  return (
    <Router>
      <header>
        <img src="logo.svg" alt="logo" style={{ width: 50 }} />
        <Link to="/work">WORK</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </header>
      <Route path="/work" component={Work} />
      <Route path="/lettering-set" component={LetteringSet} />
      <Route path="/sketchbook" component={SketchBook} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <footer>
        <a href="mailto: hi@ktype.xyz">hi@ktype.xyz</a>
        <p>LET'S START A PROJECT</p>
        <p>
          All visual material &copy; Kade Tyler <span>| Site Credit </span>
        </p>
      </footer>
    </Router>
  );
}

export default App;
