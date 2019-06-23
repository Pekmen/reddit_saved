import React from "react";
import SplitPane from "react-split-pane";
import "./Splitter.css";

function Splitter(props) {
  const { children } = props;
  return <SplitPane {...props}>{children}</SplitPane>;
}

export default Splitter;
