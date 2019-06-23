import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "pages/Home/Home";
import Dashboard from "pages/Dashboard/Dashboard";
import About from "pages/About/About";
import Contact from "pages/Contact/Contact";
import AuthRedirect from "pages/AuthRedirect/AuthRedirect";

import styles from "./Main.module.css";

function Main() {
  return (
    <Router>
      <main className={styles.content}>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/auth-redirect" component={AuthRedirect} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </main>
    </Router>
  );
}

export default Main;
