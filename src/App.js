import React from "react";

import styles from "App.module.css";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Main from "./Main";


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
