import React, {useContext, useEffect, useState} from 'react'
import '../LoginPage.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../Context/userContext';

export default function ()  {
  const url="http://localhost:8332/api/users/signIn"
    const navigate=useNavigate();
    const {user,setUser}=useContext(UserContext);
    const [error,setError]=useState();
    
    useEffect(()=>{
      if(user) navigate('/')
  },[user])

  //Handeling the submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null)
    const resultObj={};
        const formData = new FormData(e.target);
        for (const pair of formData.entries()) {
                resultObj[pair[0]] = pair[1]; 
        }
       axios.post(url,resultObj).then(({data})=>{
        setUser(data.user);
        axios.defaults.headers['Authorization']=`Bearer ${data.token}`;
        localStorage.setItem('token',data.token);
        localStorage.setItem('userid',data.user._id);
        navigate("/");
       }).catch((error)=>{
        if(error.response?.data?.msg)
        setError(error.response.data.msg);
        else setError('Something went wrong! please try again.')
       });
  };

  return (
    
      <div className="right-section">
        <div className="header">Bienvenue sur TeriakConnect</div>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              name="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Mot de passe"
              id="password"
              name="password"
            />
          </div>
          <p className='errorMessage'>{error}</p>
          <button type="submit" className="rounded-green-button">
            Se Connecter
          </button>
        </form>
        <div className="changepage">
          <Link to="/signup">Créer Votre Compte</Link>
        </div>
      </div>

  );
}