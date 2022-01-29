import React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import {useCookies} from 'react-cookie';
import {useState} from 'react';


function SignUp() {
  const [cookies, setCookie] = useCookies(['loginCookie']);
  const [profile, setProfile] = useState();
  
  

  const googleAuth = (response) => {
      
      
    // axios({
    //   method: "post",
    //   url: "http://localhost:3000/signup",
    //   data: {
    //     tokenId: response.tokenId,
    //     googleId: response.profileObj.googleId,
    //     email: response.profileObj.email,
    //     first_name: response.profileObj.givenName,
    //     last_name: response.profileObj.familyName,
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
    >
      <span>Sign Up with Google</span>
    </GoogleLogin>
  );
}

export default SignUp;
