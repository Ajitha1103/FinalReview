import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Routes
import Login from './Components/Login';
import Signup from './Components/Signup';
import BankManager from './Components/BankManager'; 
import HomePage from './Components/HomePage';
import ContactUsPage from './Components/ContactUsPage';


function App() {
  return (
    <Router>
    <div className='app'>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bankmanager" element={<BankManager />} />
        <Route path="/contactuspage" element={<ContactUsPage />}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
