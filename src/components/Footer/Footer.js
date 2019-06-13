import React from "react";
import Typography from "@material-ui/core/Typography";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        some links or whatever
      </Typography>
    </footer>
  );
}

export default Footer;
