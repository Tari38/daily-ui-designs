import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/navigation/Nav";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import StaticPages from "./components/design-modules/static/StaticPages";
import Signups from "./components/design-modules/signups/Signups";
import Tickets from "./components/design-modules/tickets/Tickets";
import Checkouts from "./components/design-modules/checkouts/Checkouts";
import Footer from "./components/partials/Footer";

import "./App.css";

function App() {
  return (
    <>
     <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact><Home /></Route>
        <Route path="/components/pages/home" exact><Home /></Route>
        <Route path="/components/pages/portfolio"><Portfolio /></Route>
        <Route path="/components/design-modules/static/StaticPages"><StaticPages /></Route>
        <Route path="/components/design-modules/signups/Signups"><Signups /></Route>
        <Route path="/components/design-modules/tickets/Tickets"><Tickets /></Route>
        <Route path="/components/design-modules/checkouts/Checkouts"><Checkouts /></Route>
      </div>
     </Router>
    <Footer />
  </>
  );
}

export default App;
