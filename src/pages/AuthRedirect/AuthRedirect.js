import React from 'react';
import queryString from 'query-string';
import axios from 'axios';
import snoowrap from 'snoowrap';
import authData from 'reddit/authData';
import { REDDIT_TOKEN_URL } from 'constants/api';

class AuthRedirect extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: '',
    };
  }

  componentDidMount() {
    const { location } = this.props;
    const queryParams = queryString.parse(location.search);
    const tokenData = {
      grant_type: 'authorization_code',
      code: queryParams.code,
      redirect_uri: authData.redirect_uri,
    };

    axios
      .post(REDDIT_TOKEN_URL, queryString.stringify(tokenData), {
        auth: {
          username: process.env.REACT_APP_R_CLIENT_ID,
          password: process.env.REACT_APP_R_CLIENT_SECRET,
        },
      })
      .then(response => {
        if (response.status === 200 && response.data) {
          const snooData = {
            userAgent: navigator.userAgent,
            clientId: process.env.REACT_APP_R_CLIENT_ID,
            clientSecret: process.env.REACT_APP_R_CLIENT_SECRET,
            refreshToken: response.data.refresh_token,
          };
          const snoo = new snoowrap(snooData);
          snoo.getMe().then(userInfo => {
            this.setState({ userInfo });
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { userInfo } = this.state;
    return (
      <div>{userInfo.info ? 'Please wait...' : <p>{userInfo.name}</p>}</div>
    );
  }
}

export default AuthRedirect;
