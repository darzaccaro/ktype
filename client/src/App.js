//@flow
import React, { useEffect, Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/about";
import LetteringSet from "./pages/letteringSet";
import Humility from "./pages/humility";
import Communicate from "./pages/communicate";
import UBN from "./pages/ubn";
import RibbonNumerals from "./pages/ribbonNumerals";
import TapeTypography from "./pages/tapeTypography";
import LoosenUp from "./pages/loosenUp";
import Contact from "./pages/contact";
import Work from "./pages/work";
import Success from "./pages/success";
import theme from "./theme";
// Google Analytics
import ReactGA from "react-ga";
ReactGA.initialize("UA-155272033-1");
ReactGA.pageview(window.location.pathname + window.location.search);

function App(props) {
  return (
    <div>
      <Header />
      {/* This is a hack to maintain consistent spacing when resizing. */}
      <div style={{ marginBottom: theme.sizes.spacingV1 - 15 }} />

      <Route exact path="/" component={Work} />
      <Route path="/work" component={Work} />
      <Route path="/lettering-set" component={LetteringSet} />
      <Route path="/humility" component={Humility} />
      <Route path="/communicate" component={Communicate} />
      <Route path="/undefined-by-numbers" component={UBN} />
      <Route path="/ribbon-numerals" component={RibbonNumerals} />
      <Route path="/tape-typography" component={TapeTypography} />
      <Route path="/loosen-up" component={LoosenUp} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/success" component={Success} />
      <Footer />
    </div>
  );
}

export default App;
