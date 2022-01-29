import logo from './logo.svg';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import AuthLogin from './components/AuthLogin';
import Events from './components/Events';
import Clubs from './components/Clubs';
import Archives from './components/Archives';
import Footer from './components/Footer'
import {BrowserRouter, Route, Routes, Redirect, Link, useNavigate} from 'react-router-dom';
import './App.css';
import HomePg from './components/HomePg';
import queryString from 'query-string';
import Axios from 'axios';
import GoogleLogin from 'react-google-login';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';


function App() {
  // 1 = Events
  // 2 = Clubs
  // 3 = Archives
  // 4 = Contact us and About

  const [mounted, setmount] = useState(0);
  const [user,setUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  // const checkLogin = async () => {
  //   await Axios.get('http://localhost:3000/log/in',{withCredentials: true}).then(response => {
  //     console.log(response.data)
  //     if (!!response.data.user) {
  //       console.log('THERE IS A USER')
  //       // this.setState({
  //       //   loggedIn: true,
  //       //   user: response.data.user
  //       // })
  //       setLoggedIn(true);
  //       setUser(response.data.user);
  //       navigate("/", {replace: true});
  //     } else {
  //       setLoggedIn(false);
  //       setUser(null);
  //       // this.setState({
  //       //   loggedIn: false,
  //       //   user: null
  //       // })
  //       navigate("/loginfail", {replace: true});
  //     }
  //   })


  // }

  // useEffect(() => {
  //   checkLogin();
  // }, [])
  


  // const handleLogin = async () => {
  //   console.log("function called")
  //   await Axios.get('http://localhost:3000/log/in').then(response => {
  //     console.log(response.data)
  
  //     if (!!response.data.user) {
  //       console.log('THERE IS A USER')
  //       // this.setState({
  //       //   loggedIn: true,
  //       //   user: response.data.user
  //       // })
  //       setLoggedIn(true);
  //       setUser(response.data.user);
  //       console.log("passed");
  //       return(navigate("/", {replace: true}));
  //     } else {
  //       setLoggedIn(false);
  //       setUser(null);
  //       // this.setState({
  //       //   loggedIn: false,
  //       //   user: null
  //       // })
  //       console.log("passed");
  //       return(navigate("/loginfail", {replace: true}));
  //     }

      
  //   })
  // }


  

  // const LoginSuccess = async (response) => {
  //   console.log(response.profile);
  //   setLoggedIn(true);
  //   return(navigate("/", {replace: true}));
  // }

  // const LoginFailure = (response) => {
  //   console.log("login failed");
  //   return(navigate("/", {replace: true}));
  // }

  
  return (
    <div className="App w-full">
      <Navbar LoggedIn={loggedIn} />
      <SignUp />
      <SignIn />
      
      <section id="mainSec">
        
          <Routes>
            <Route exact path="/clubs" element={<Clubs />} />
            <Route exact path="/events" element={<Events/>} />
            <Route exact path="/archives" element={<Archives />} />
            <Route exact path="/login" element={<SignIn />}/>
            <Route exact path="/signup" element={<SignUp />}/>
            <Route path="/" element={<HomePg />} />
          </Routes>
        
      </section>
      <Footer/>
    </div>
  );
}

export default App;


{ /*
  scroll snapping feature == can be useful
  
   <main className='max-h-screen overflow-y-scroll snap-y snap-mandatory'>
        <section className="w-full h-screen bg-red-200 snap-start">
          Section 1
        </section>
        <section className="w-full h-screen bg-blue-200 snap-start">
          Section 2
        </section>
        <section className="w-full h-screen bg-green-200 snap-start">
          Section 3
        </section>
        <section className="w-full h-screen bg-indigo-200 snap-start">
          Section 4
        </section>
        <section className="w-full h-screen bg-yellow-200 snap-start">
          Section 5
        </section>
      </main>  */}