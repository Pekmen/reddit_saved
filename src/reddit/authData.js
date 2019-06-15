import { generateRandomString } from "utils/helpers.js";

const authData = {
  client_id: process.env.REACT_APP_R_CLIENT_ID,
  response_type: "code",
  state: generateRandomString(10),
  redirect_uri: process.env.REACT_APP_R_REDIRECT_URI,
  duration: process.env.REACT_APP_R_DURATION,
  scope: process.env.REACT_APP_R_SCOPE
};

export default authData;
