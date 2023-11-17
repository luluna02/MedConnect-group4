import React, {useState} from 'react'
import './SignupPageP.css'
import { Link } from 'react-router-dom';

export default function SignupP () {
  // To store the email and password  
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [phone, setPhone] = useState('');
  const [pname, setPname] = useState('');
  const [adress, setAdress] = useState('');
  

  //Handeling the submission 
    const handleSubmit = (e) => {
        e.preventDefault(); //to prevent reloading 
        //handeling
        console.log(email);
    }
    return (
    <div className="signup-pharmacist right-section">
      <div className="signup-pharmacist header">Pharmacien</div>  
      <form onSubmit={handleSubmit}>
        <div className="signup-pharmacist input-container">
            <input value={fname} onChange={(e) => setFname(e.target.value)} type="text" placeholder="Nom"/>
        </div>
        <div className='input-container'>
            <input value={lname} onChange={(e) => setLname(e.target.value)} type="text" placeholder="Prenom"/>
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
            <input value={pname} onChange={(e) => setPname(e.target.value)} type="text" placeholder="Nom de la pharmacie"/>
        </div>
        <div className='input-container'>
            <input value={adress} onChange={(e) => setAdress(e.target.value)} type="text" placeholder="Adresse"/>
        </div>
            <button type="submit" className="signup-pharmacist rounded-green-button" >Créer votre compte</button>
            <div className="signup-pharmacist changepage"><Link to ="/">Se connecter</Link></div>
        
      </form>
      
    </div>
    )
}