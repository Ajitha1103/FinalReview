import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNo: '',
    email: '',
    username: '',
    password: '',
  });
  //const [error, setError] = useState(null);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to your registration endpoint
    axios.post('http://localhost:8082/api/signup', formData) // Use the appropriate URL for your backend
      .then((response) => {
        console.log(response.data);
        // Handle success (e.g., redirect to login page)
      })
      .catch((err) => {
        console.error(err);
        // Handle error (e.g., display error message)
      });

    alert('Registration submitted');
  };

  return (
    <div className="signup-page">
    <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSignupSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo">Phone Number:</label>
          <input
            type="tel"
            id="phoneNo"
            name="phoneNo"
            value={formData.phone_no}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="signup-button">
          Sign up
        </button>
        <p className="login-link">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;