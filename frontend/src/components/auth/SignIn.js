import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import {useCookies} from 'react-cookie';




function SignIn() {
  const [cookies, setCookie] = useCookies(['loginCookie']);
  
  const [profile, setProfile] = useState();

  
 
  





  const googleAuth = (response) => {
    // axios({
    //   method: "post",
    //   url: "http://localhost:3000/log/in",
    //   data: {
    //     googleId: profileObj.googleId,
    //     email: profileObj.email,
    //   },
    // })
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));

    setProfile(response.profileObj);
    setCookie('loginCookie',response.profileObj,{path: "/"});
    console.log(response);
    console.log("  ");
    console.log(response.profileObj);
  }; 


  
  return (
    <GoogleLogin
      clientId="798387719989-5gdukn6hk0cbc8qorqqcsn8s0as9dr93.apps.googleusercontent.com"
      onSuccess={googleAuth}
      onFailure={googleAuth}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default SignIn;