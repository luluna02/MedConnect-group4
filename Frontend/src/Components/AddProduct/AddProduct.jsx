import Wrapper from "../Wrapper";
import Footer from "../Home/Components/Footer";
import axios from 'axios';
import "./addProduct.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPRocust = () => {
    const url="http://localhost:8332/api/medication";
    const navigate=useNavigate();

    const [isError,setIsError]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setIsError(false);
        const formData = new FormData(e.target);
        axios.post(url,formData).then(({data})=>navigate(`/product/${data.medication._id}`)).catch(error=>{
            console.log('ERROR : ',error);
            setIsError(true);
        });
    }

    return ( <>
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
            <form className="add-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nom du produit</label>
                    <input required type="text" id="name" name="name" className="form-control"  placeholder="Nom du produit"/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea required className="form-control" id="description" name="description" placeholder="Description"/>
                </div>
                <div className="form-group">
                    <label htmlFor="category" >Catégorie</label>
                    <select required class="form-select" name="category" id="category">
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
                    <label htmlFor="ingredients">Ingrédients actifs</label>
                    <input required type="text" name="ingredients" id="ingredients" className="form-control"  placeholder="Ingrédients"/>
                </div>
                <div className="form-group">
                    <label htmlFor="dosage">Dosage</label>
                    <input required type="text" name="dosage" id="dosage" className="form-control"  placeholder="Dosage"/>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input required type="file" id="image" name="file" className="form-control" placeholder="Image"/>
                </div>
                {isError && <p className='errorMessage'>Something went wrong. Please check the data you have entered and try again</p>}
                <button type="submit" className="add-button">Ajouter</button>
            </form>
        </Wrapper>
        <Footer/>
    </> );
}
 
export default AddPRocust;