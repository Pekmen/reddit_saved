import React from "react";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Main from "./Main";

import styles from "App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
