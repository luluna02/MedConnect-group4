import React, {useContext, useEffect} from 'react'
import './SignupPageD.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../Context/userContext';

export default function SignupP () {
    const url="http://localhost:8332/api/users"
    const navigate=useNavigate();
    const {user,setUser}=useContext(UserContext);
  
    useEffect(()=>{
        if(user) navigate('/')
    },[user])
  
    //Handeling the submission 
      const handleSubmit = (e) => {
          e.preventDefault(); //to prevent reloading 
          const resultObj={};
          const formData = new FormData(e.target);
          for (const pair of formData.entries()) {
                  resultObj[pair[0]] = pair[1]; 
          }
         axios.post(url,{...resultObj,type:"pharmacist"}).then(({data})=>{
          setUser(data.user);
          axios.defaults.headers['Authorization']=`Bearer ${data.token}`;
          localStorage.setItem('token',data.token);
          localStorage.setItem('userid',data.user._id);
          navigate("/");
         }); 
      }

    return (
    <div className="signup-doctor right-section">
      <div className="signup-pharmacist header">Pharmacien</div>  
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
            <input name="name" type="text" placeholder="Nom"/>
        </div>
        <div className='input-container'>
            <input name="lastname" type="text" placeholder="Prénom"/>
        </div>
        <div className='input-container'>
            <input name="email" type="email" placeholder="Email ou ID"/>
        </div>
        <div className='input-container'>
            <input name="password" type="password" placeholder="Mot de passe" id="password"/>
        </div>
        <div className='input-container'>
            <input name="phone" type="text" placeholder="Numéro de téléphone"/>
        </div>
        <div className='input-container'>
            <input name="pharmacyName" type="text" placeholder="Nom de pharmacie"/>
        </div>
        <div className='input-container'>
            <input name="address" type="text" placeholder="Adresse"/>
        </div>
        <button type="submit" className="signup-doctor rounded-green-button" >Créer votre compte</button>
        <div className="signup-doctor changepage"><Link to ="/login">Se connecter</Link></div>
      </form>
      
    </div>
    )
}