import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Home from "pages/Home/Home";
import Dashboard from "pages/Dashboard/Dashboard";
import About from "pages/About/About";
import Contact from "pages/Contact/Contact";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
