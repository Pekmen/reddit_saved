import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <TypoGraphy variant="title" color="inherit">
            Header
          </TypoGraphy>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;
