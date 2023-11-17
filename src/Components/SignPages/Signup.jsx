import React, {useState} from 'react'
import '../LogPages/LoginPage.js'
import { Link } from 'react-router-dom'
import "../LoginPage.css";

export default function Signup (){

    return (
  
    <div className="right-section">
      <div className="header">Bienvenue sur TeriakConnect</div>
        <div>
          <button type="submit" className="rounded-green-button" ><Link to="/signupDoctor" className="SignupButton">Docteur</Link></button>
        </div>
        <div>
          <button type="submit" className="rounded-green-button" ><Link to="/signupPharmacist" className="SignupButton">Pharmacien</Link></button>
        </div>   
        <div className="changepage">
        <Link to="/">Vous avez déja un compte?</Link>
        </div>
    </div>
    )
}