import { useParams } from "react-router-dom";
import Product from "../../Product/Product";
import { FaInfoCircle,FaEdit,FaCheck,FaTimes } from "react-icons/fa";
import "./productPage.css";
import { useContext, useEffect, useRef, useState } from "react";
import axios from 'axios';
import { UserContext } from "../../../Context/userContext";
import Footer from "../Components/Footer";
import Wrapper from "../../Wrapper";

const categories={
    'Antalgic':'Medications within this category are designed to alleviate or reduce pain symptoms.',
    'Pneumology':'Pertaining to the study and treatment of diseases related to the respiratory system, pneumology medications address conditions affecting the lungs and respiratory tract.',
    'Cardiology-Engiology':'Focused on the diagnosis and treatment of heart and blood vessel-related diseases, this category addresses conditions such as heart disease, hypertension, and vascular disorders.',
    'Anti-inflammatory':'Medications in this category reduce inflammation and associated symptoms, commonly used to treat conditions characterized by inflammation, such as arthritis or inflammatory diseases.',
    'Parasitology':'Centered around the study and treatment of diseases caused by parasites, this category addresses infections and diseases caused by various parasites.',
    'Infectiology':'Specializing in the study and treatment of infectious diseases, this category addresses conditions caused by bacteria, viruses, fungi, and other infectious agents.',
    'Allergology':'Allergology deals with the study and treatment of allergies, focusing on identifying and managing allergic reactions and conditions.',
    'Gastro-Enterology':'Pertaining to the study and treatment of diseases affecting the digestive system, gastro-enterology medications address conditions related to the stomach, intestines, liver, and other digestive organs.',
    'Analgesic':'Medications within this category are specifically designed to relieve pain of various types and levels.',
    'Metabolism and Nutrition':'Encompassing medications related to metabolic processes and nutritional support, this category addresses disorders related to metabolism and provides nutritional support.',
    'Neurology-Psychiatry':'This category encompasses medications for neurological and psychiatric conditions, addressing disorders of the nervous system and mental health conditions.',
    'Rheumatology':'Focused on the study and treatment of rheumatic diseases affecting the joints and connective tissues, rheumatology medications address conditions such as arthritis and autoimmune disorders affecting the musculoskeletal system.'
}


const ProductPage = () => {
    const { id } = useParams();
    const {user}=useContext(UserContext);
    const [info, setInfo] = useState(false);
    const url=`http://localhost:8332/api/medication/${id}`;

    const [medication,setMedication]=useState(null);
    const [description,setDescription]=useState(null);
    const [ingredients,setIngredients]=useState(null);
    const [category,setCategory]=useState(null);
    const [zonesToEdit,setZonesToEdit]=useState([false,false,false]);

    useEffect(()=>{
        axios.get(url).then(({data})=>setMedication(data.medication)).catch(error=>console.log('ERROR : ',error));
    },[id]);


    const updateMedication=(name)=>{
        const changedData={description,ingredients,category};
        axios.put(url,{...medication,[name]:changedData[name]}).then(({data})=>setMedication(data.medication)).catch((error)=>console.error(error));
    }

    const zones = [
        {
            title: "Description et Posologie",
            ref: useRef(null),
            content:()=> <div className="text-zone">
                    {medication?.description}
                 </div>,
            editContent:()=><div className="text-zone" style={{width:'100%'}} >
             <textarea className="form-control" style={{width:'100%'}} defaultValue={medication.description} onBlur={({target})=>setDescription(target.value)} placeholder="Description"/>
         </div>,
         onCancel:()=>setDescription(null),
         onConfirm:()=>{
            updateMedication('description');
            setZonesToEdit(prev=>{
                const myZones=[...prev];
                            myZones[0]=false;
                            return myZones;
            })
         }
        },
        {
            title: "Ingredients",
            ref: useRef(null),
            content:()=> {
                const ingredients=medication?.ingredients.split(',');
                return <div className="text-zone">
                <h5>Les ingredients de ce medicament sont:
                    {ingredients?.map(ingredient=><><br /><li>{ingredient}</li></>)}
                    </h5>
               </div>
            },
            editContent:()=><div className="text-zone">
            <h5>Les ingredients de ce medicament sont:

                </h5>
                <input type="text" className="form-control" defaultValue={medication.ingredients} onBlur={({target})=>setIngredients(target.value)}  placeholder="Ingrédients"/>
           </div>,
          onCancel:()=>setIngredients(null),
          onConfirm:()=>{
            updateMedication('ingredients');
            setZonesToEdit(prev=>{
                const myZones=[...prev];
                            myZones[1]=false;
                            return myZones;
            })
          }
        },
        {
            title: "Categorie",
            ref: useRef(null),
            content:()=> <div className="text-zone">
            <h5>{medication?.category}</h5>
                <p>{categories[medication?.category]}</p>
            </div>,
            editContent:()=><select class="form-select" onChange={({target})=>setCategory(target.value)} defaultValue={medication.category}>
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
            </select>,
            onCancel:()=>setCategory(null),
            onConfirm:()=>{
                updateMedication('category');
                setZonesToEdit(prev=>{
                    const myZones=[...prev];
                                myZones[2]=false;
                                return myZones;
                })
            }
        }
    ]

    return (
        <>
            <Product id={id} />
            <div className="productPage-bg">
                <Wrapper>
                    <div className="productPage-menu">
                        <ul>
                            {zones.map((zone, index) => <li key={index} onClick={() => zone.ref.current.scrollIntoView({ behavior: "smooth" })}>{zone.title}</li>)}
                        </ul>
                        <div className="productPage-menu-info">
                        <FaInfoCircle className="productPage-icon" onMouseEnter={()=>setInfo(true)} onMouseLeave={()=>setInfo(false)} onFocus={()=>setInfo(true)} onAbort={()=>setInfo(false)} />
                        {info && <div className="productPage-info">
                            <p>Les informations présentes sur ce site sont réservées aux professionnels de santé. En poursuivant votre navigation sur ce site, vous certifiez être un professionnel de santé. </p>
                        </div>}
                        </div>
                    </div>
                </Wrapper>
            </div>
            <div>
                <Wrapper>
                    <div className="productPage-text">
                        {zones.map((zone, index) => <div className="productPage-zone" key={index} ref={zone.ref}><h2>{zone.title}</h2>
                        <div className="productPage-content">
                            {zonesToEdit[index]===false? zone.content():zone.editContent()}
                            {user?.role==='admin' && <div className="productPage-buttons-wrapper">
                          {zonesToEdit[index]===false?  <button className="editBtn" onClick={()=>setZonesToEdit(prev=>{
                                const myZones=[...prev];
                                myZones[index]=true;
                                return myZones;
                            })}><FaEdit className="productPage-icon" /></button>
                           : <>
                                <button onClick={()=>zone.onConfirm()}><FaCheck className="productPage-icon" /></button>
                                <button  onClick={()=>setZonesToEdit(prev=>{
                                const myZones=[...prev];
                                myZones[index]=false;
                                return myZones;
                            })}><FaTimes className="productPage-icon" /></button>
                                </>}
                            </div>}
                        </div>
                        
                        </div>)}
                    </div>
                </Wrapper>
            </div>
            <Footer />
        </>
    );
}

export default ProductPage;