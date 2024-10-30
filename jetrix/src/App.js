import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import Header from './components/landing_components/header_component/Header.js';
import Footer from './components/landing_components/footer_component/Footer.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/login_component/LoginPage.js';
import Signup from "./components/signup_components/Signup.js";


// function Person(props) {
//   return (
//     <div className='person'>
//       <h3>nombre: {props.nombre}</h3>
//       <p>edad: {props.edad}</p>
//     </div>
//   );
// }

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer/>
    </Router>

  );
};

export default App;
