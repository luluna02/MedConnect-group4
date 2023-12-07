import React, {useContext, useEffect} from 'react'
import './SignupPageD.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../Context/userContext';
export default function SignupD () {
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
       axios.post(url,{...resultObj,type:"doctor"}).then(({data})=>{
        setUser(data.user);
        axios.defaults.headers['Authorization']=`Bearer ${data.token}`;
        localStorage.setItem('token',data.token);
        localStorage.setItem('userid',data.user._id);
        navigate("/");
       });
        
        
    }

    return (
    <div className="signup-doctor right-section">
      <div className="signup-doctor header">Docteur</div>  
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
        <select name="speciality">
                    <option value="General">General</option>
                    <option value="Antalgic">Antalgic</option>
                    <option value="Pneumology">Pneumology</option>
                    <option value="Cardiology-Engiology">Cardiology-Engiology</option>
                    <option value="Parasitology">Parasitology</option>
                    <option value="Infectiology">Infectiology</option>
                    <option value="Allergology">Allergology</option>
                    <option value="Gastro-Enterology">Gastro-Enterology</option>
                    <option value="Analgesic">Analgesic</option>
                    <option value="Metabolism and nutrition">Metabolism and nutrition</option>
                    <option value="Neurology-Psychiatry">Neurology-Psychiatry</option>
                    <option value="Rheumatology">Rheumatology</option>
        </select>
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