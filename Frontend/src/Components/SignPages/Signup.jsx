import React, {useContext, useEffect, useState} from 'react'
import '../LogPages/LoginPage'
import { Link, useNavigate } from 'react-router-dom'
import "../LoginPage.css";
import { UserContext } from '../../Context/userContext';

export default function Signup (){
  const {user}=useContext(UserContext);
  const navigate=useNavigate();
  
  useEffect(()=>{
    if(user) navigate('/')
},[user])

    return (
  
    <div className="right-section">
      <div className="header">Bienvenue sur TeriakConnect</div>
        <div>
          <button type="submit" className="rounded-green-button" ><Link to="/signup/doctor" className="SignupButton">Docteur</Link></button>
        </div>
        <div>
          <button type="submit" className="rounded-green-button" ><Link to="/signup/pharmacist" className="SignupButton">Pharmacien</Link></button>
        </div>   
        <div className="changepage">
        <Link to="/login">Vous avez déja un compte?</Link>
        </div>
    </div>
    )
}