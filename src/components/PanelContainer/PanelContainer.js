import React from "react";
import Container from "@material-ui/core/Container";

import styles from "./PanelContainer.module.css";

function PanelContainer(props) {
  return (
    <section className={styles.panelContainer}>
      <Container>{props.children}</Container>
    </section>
  );
}

export default PanelContainer;
