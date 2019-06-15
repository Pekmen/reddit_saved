import { REDDIT_AUTH_URL } from "constants/api.js";

import React from "react";
import queryString from "query-string";
import authData from "reddit/authData";

class Home extends React.PureComponent {
  redditAuth = () => {
    const authUrl = `${REDDIT_AUTH_URL}?${queryString.stringify(authData)}`;
    window.open(authUrl, "_self");
  };

  render() {
    return <button onClick={this.redditAuth}>Authorize</button>;
  }
}

export default Home;
