import React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";

function SignIn() {
  const googleAuth = async ({ profileObj }) => {
    axios({
      method: "post",
      url: "http://localhost:3000/log/in",
      data: {
        googleId: profileObj.googleId,
        email: profileObj.email,
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <GoogleLogin
      clientId="1017985580457-loukgsoq6b4s7uv17emaqc2ps5f4c8gi.apps.googleusercontent.com"
      onSuccess={googleAuth}
      onFailure={googleAuth}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default SignIn;