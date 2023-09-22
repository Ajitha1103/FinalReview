

import React from 'react';
import './HomePage.css';

const HomePage = () => (
    <div className='home'>
        <h1>Welcome to Banking Application</h1>
        <ul>
           <li><a href="/login">Login</a></li>
            <li><a href="/signup">Signup</a></li>
            <li><a href="/bankmanager">Banking</a></li>
            <li><a href="/contactuspage">Contact Us</a></li>
        </ul>
    </div>
);

export default HomePage;
