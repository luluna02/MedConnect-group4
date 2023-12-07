import Wrapper from "../Wrapper";
import Footer from "../Home/Components/Footer";
import axios from 'axios';
import "./Profile.css"
import { useContext, useState } from "react";
import { UserContext } from "../../Context/userContext";

const Profile = () => {
    const {user,setUser}=useContext(UserContext);
    const url=`http://localhost:8332/api/users/${user?._id}`;
    const [isError,setIsError]=useState(null);
  

    const handleSubmit=(e)=>{
        e.preventDefault();
        setIsError(false);
        const formData = new FormData(e.target);
        const object = {};
        formData.forEach((value, key) => object[key] = value);
        axios.put(url,object).then(({data})=>setUser(data.user)).catch(error=>{
            console.log('ERROR : ',error);
            setIsError(true);
        });
    }
    return ( <>
        <>
     <div className="hero-bg">
            <Wrapper>
                <div className="hero">

                    <img alt="" height={200} src="/logo.png" />
                    <p className="text">
                    Teriak s'engage à fournir des médicaments de qualité à des prix abordables et à contribuer à améliorer l'accès aux soins de santé dans les pays où elle opère
                    </p>
                </div>
            </Wrapper>
        </div>
        <Wrapper>
            
            <form className="add-form" onSubmit={handleSubmit} >
            <h1 className="title">Modifier votre profil</h1>
                <div className="form-group">
                    <label htmlFor="name">Nom </label>
                    <input required defaultValue={user?.name} type="text" id="name" name="name" className="form-control"  placeholder="Nom"/>
                </div>
              
                <div className="form-group">
                    <label htmlFor="lastname">Prénom </label>
                    <input required defaultValue={user?.lastname} type="text" id="lastname" name="lastname" className="form-control"  placeholder="Prénom"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input required defaultValue={user?.email} type="email" name="email" id="ingredients" className="form-control"  placeholder="Email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="dosage">Mot de passe</label>
                    <input required defaultValue={user?.password} type="password" name="password" id="password" className="form-control"  placeholder="Mot de passe"/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Numéro de téléphone</label>
                    <input required type="text" defaultValue={user?.phone} name="phone" id="phone" className="form-control"  placeholder="Numéro de téléphone"/>
                </div>
                <div className="form-group">
                    <label htmlFor="category" >Spécialité</label>
                    <select required defaultValue={user?.speciality} class="form-select" name="speciality" id="speciality">
                    <option value="General">General</option>
                    <option value="Antalgic">Antalgic</option>
                    <option value="Pneumology">Pneumology</option>
                    <option value="Cardiology-Engiology">Cardiology-Engiology</option>
                    <option value="Anti-inflammatory">Anti-inflammatory</option>
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
                
                <div className="form-group">
                    <label htmlFor="address">Adresse</label>
                    <input required defaultValue={user?.address} type="text" name="address" id="address" className="form-control"  placeholder="Adresse"/>
                </div> 
                
                {isError && <p className='errorMessage'>Something went wrong. Please check the data you have entered and try again</p>}
                <button type="submit" className="add-button">Ajouter</button>
            </form>
        </Wrapper>
        <Footer/>
    </>
        <Footer/>
    </> );
}
 
export default Profile;