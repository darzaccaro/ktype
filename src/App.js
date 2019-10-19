//@flow
import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/about";
import LetteringSet from "./pages/letteringSet";
import SketchBook from "./pages/sketchBook";
import Contact from "./pages/contact";
import Work from "./pages/work";
import theme from "./theme";

function App(props) {
  return (
    <div>
      <Header />
      {/* This is a hack to maintain consistent spacing when resizing. */}
      <div style={{ marginBottom: theme.sizes.spacingV1 - 15 }} />

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
