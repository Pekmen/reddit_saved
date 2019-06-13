import React from "react";
import SplitPane from "react-split-pane";
import "./Splitter.css";

function Splitter(props) {
  return <SplitPane {...props}>{props.children}</SplitPane>;
}

export default Splitter;
