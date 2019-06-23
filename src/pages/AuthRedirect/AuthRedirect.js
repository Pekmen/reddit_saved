import React from "react";
import queryString from "query-string";
import axios from "axios";
import authData from "reddit/authData";
import { REDDIT_TOKEN_URL } from "constants/api";

class AuthRedirect extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      queryParams: {}
    };
  }

  componentDidMount() {
    const { location } = this.props;
    const queryParams = queryString.parse(location.search);
    console.log("queryParams___", queryParams);
    const tokenData = {
      grant_type: "authorization_code",
      code: queryParams.code,
      redirect_uri: authData.redirect_uri
    };

    axios
      .post(REDDIT_TOKEN_URL, queryString.stringify(tokenData), {
        auth: {
          username: process.env.REACT_APP_R_CLIENT_ID,
          password: process.env.REACT_APP_R_CLIENT_SECRET
        }
      })
      .then(response => {
        console.log("response___", response);
      })
      .catch(error => {
        console.error("error___", error);
      });
    this.setState({
      queryParams: queryString.parse(location.search)
    });
  }

  render() {
    return <div>Please wait...</div>;
  }
}

export default AuthRedirect;
