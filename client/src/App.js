//@flow
import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/about";
import Logos from "./pages/logos";
import Lettering from "./pages/lettering";
import DailyRenders from "./pages/dailyRenders";
import LetterLove from "./pages/letterLove";
import GrandPlace from "./pages/grandPlace";
import Thanks from "./pages/thanks";
import Contact from "./pages/contact";
import Work from "./pages/work";
import Success from "./pages/success";


// Import Google Tag Manager
import TagManager from "react-gtm-module";
// Import Google Analytics
import ReactGA from "react-ga";
// Initialize Google Analytics
ReactGA.initialize("UA-155272033-1");
ReactGA.pageview(window.location.pathname + window.location.search);
// Initialize Google Tag Manager
const tagManagerArgs = {
  gtmId: "GTM-TTFHHDC",
};
TagManager.initialize(tagManagerArgs);

function App() {
  return (
    <div className="App">
      <Header />

      <Route exact path="/" component={Work} />
      <Route path="/work" component={Work} />
      <Route path="/about" component={About} />
      <Route path="/logos" component={Logos} />
      <Route path="/lettering" component={Lettering} />
      <Route path="/daily-renders" component={DailyRenders} />
      <Route path="/letter-love" component={LetterLove} />
      <Route path="/grand-place" component={GrandPlace} />
      <Route path="/thanks" component={Thanks} />
      <Route path="/contact" component={Contact} />
      <Route path="/success" component={Success} />

      <Footer />
    </div>
  );
}

export default App;
