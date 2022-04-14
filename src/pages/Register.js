import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../auth/firebase';


const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState()
  const navigate= useNavigate();

  const handleSubmit = (e) => {
    const displayName = ` ${firstName} ${lastName}`
    e.preventDefault();
    createUser(email,password, displayName ,navigate);
    // navigate("/")
    // console.log(firstName,lastName,email,password);
  }

  return (
    <div className="d-flex justify-content-center">
    <div className="form-image">
      <img src="https://picsum.photos/800/800" alt="sample-movie" />
    </div>
    <div className="register-form">
      <h1 className="form-title display-3">Register</h1>
      <form id="register" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="first-name" className="form-label">First Name</label>
          <input type="text" className="form-control" id="first-name" placeholder="Enter your first name.." onChange={(e) => setFirstName(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="last-name" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="last-name" placeholder="Enter your last name.." onChange={(e) => setLastName(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="email-name" className="form-label">Email</label>
          <input type="text" className="form-control" id="email-name" placeholder="Enter your email.." onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="password-name" className="form-label">Password</label>
          <input type="password" className="form-control" id="password-name" placeholder="Enter your password.." onChange={(e) => setPassword(e.target.value)} required/>
        </div>
      <input type="submit" className="btn btn-primary form-control" value="Register" />
      </form>
    </div>
  </div>
  )
}

export default Register