import React from 'react'
import LoginPage from './LoginPage';
import { useState } from "react";
import "../LoginPage.css";
import Signup from '../SignPages/Signup';
import SignupD from '../SignPages/SignupD';
import SignupP from '../SignPages/SignupP';
import {BrowserRouter, Route, Routes } from "react-router-dom";

export default function LogWrapper() {
    // To store the email and password
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <BrowserRouter>
    <div className="pageContainer">
        <div className="left-section">
            <div className="grad"></div>
            <img src="/logo.png"></img>
        /</div>
        <Routes>
            <Route path='/' element={
                <LoginPage 
                email={email}
                pass={pass} 
                setEmail={setEmail}
                setPass={setPass}/>
            }></Route>

            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/signupDoctor' element={<SignupD/>}></Route>
            <Route path='/signupPharmacist' element={<SignupP/>}></Route>
        </Routes>
    </div>
    </BrowserRouter>
  )
}
