import React from "react";
import "../LoginPage.css";
import { Link } from "react-router-dom";

export default function ({
    email,
    pass,
    setEmail,
    setPass}) 
    {
  

  //Handeling the submission
  const handleSubmit = (e) => {
    e.preventDefault();
    //handeling
  };

  return (
    
      <div className="right-section">
        <div className="header">Bienvenue sur TeriakConnect</div>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="input-container">
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Mot de passe"
              id="password"
              name="password"
            />
          </div>
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