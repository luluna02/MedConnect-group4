import React, {useState} from 'react'
import './SignupPageD.css'
import { Link } from 'react-router-dom';

export default function SignupD () {
  // To store the email and password  
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [phone, setPhone] = useState('');
  const [spec, setSpec] = useState('');
  

  //Handeling the submission 
    const handleSubmit = (e) => {
        e.preventDefault(); //to prevent reloading 
        //handeling
        console.log(email);
    }
    return (
    <div className="signup-doctor right-section">
      <div className="signup-doctor header">Docteur</div>  
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
            <input value={fname} onChange={(e) => setFname(e.target.value)} type="text" placeholder="Nom"/>
        </div>
        <div className='input-container'>
            <input value={lname} onChange={(e) => setLname(e.target.value)} type="text" placeholder="Prénom"/>
        </div>
        <div className='input-container'>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email ou ID"/>
        </div>
        <div className='input-container'>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Mot de passe" id="password" name="password"/>
        </div>
        <div className='input-container'>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Numéro de téléphone"/>
        </div>
        <div className='input-container'>
            <input value={spec} onChange={(e) => setSpec(e.target.value)} type="text" placeholder="Spécialité"/>
        </div>
        
        <button type="submit" className="signup-doctor rounded-green-button" >Créer votre compte</button>
        <div className="signup-doctor changepage"><Link to ="/">Se connecter</Link></div>
        
        
      </form>
      
    </div>
    )
}