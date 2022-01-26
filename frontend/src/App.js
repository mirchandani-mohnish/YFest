import logo from './logo.svg';
import { useState } from 'react';
import Navbar from './components/Navbar';
import AuthLogin from './components/AuthLogin';
import Events from './components/Events';
import Clubs from './components/Clubs';
import Archives from './components/Archives';
import Footer from './components/Footer'
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import './App.css';
import HomePg from './components/HomePg';



function App() {
  // 1 = Events
  // 2 = Clubs
  // 3 = Archives
  // 4 = Contact us and About


  
  return (
    <div className="App w-full">
      <Navbar />
      <section id="mainSec">
        <BrowserRouter>
          <Routes>
            <Route exact path="/clubs" element={<Clubs />} />
            <Route exact path="/events" element={<Events/>} />
            <Route exact path="/archives" element={<Archives />} />
            <Route path="/" element={<HomePg />} />
          </Routes>
        </BrowserRouter>
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