import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import Header from './components/public_layouts/landing_components/header_component/Header.js';
import Footer from './components/public_layouts/landing_components/footer_component/Footer.js';
import Dashboard from './components/protected_routes/dashboard/dashboard.js';
import Tasks from './components/protected_routes/tasks/task.js'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/public_layouts/login_component/LoginPage.js';
import Signup from "./components/public_layouts/signup_components/Signup.js";

import PublicLayout from './components/public_layouts/PublicLayout.js';
import PrivateLayout from './components/private_layouts/PrivateLayout.js'

import './services/authService.js'
// import PrivateRoute from './components/PrivateRoute'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<PublicLayout> <LoginPage />  </PublicLayout>} />
        <Route path="/signup" element={<PublicLayout><Signup /></PublicLayout>} />
        <Route path='/dashboard' element={<PrivateLayout> <Dashboard /> </PrivateLayout>} />
        <Route path='/tableros/:tableroId/tasks' element={<PrivateLayout> <Tasks /> </PrivateLayout>} />
      </Routes>
    </Router>

  );
};

export default App;
