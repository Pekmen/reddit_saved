import React from "react";
import PostListings from "components/PostListings/PostListings";
import PostView from "components/PostView/PostView";
import Splitter from "components/Splitter/Splitter";

import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Splitter
        split="vertical"
        minSize={50}
        maxSize={"100%"}
        defaultSize={"50%"}
      >
        <PostListings />
        <PostView />
      </Splitter>
    </div>
  );
}

export default Dashboard;
