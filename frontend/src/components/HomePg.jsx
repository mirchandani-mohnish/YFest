import React, { Component } from 'react';
import './components.css'
import 'tw-elements';
import Axios from 'axios';
Axios.defaults.withCredentials = true

export default class HomePg extends Component {

  async componentDidMount(){
    try{
        const Login = await Axios.get("http://localhost:8000/log/in");
        console.log(Login.data);
    }catch(err){
        console.log(err);
    }
}

  render() {
    return (
    <div>
      <section className="h-screen" id="HomeSection">
        <section className="w-full h-screen">
          

        </section>
        <section className="w-full h-screen bg-blue-200 ">
          Hi
        </section>
        <section className="w-full h-screen bg-green-200 snap-start">
          ss
        </section>
        <section className="w-full h-screen bg-indigo-200 snap-start">
          ss
        </section>
      </section>
    </div>);
  }
}
