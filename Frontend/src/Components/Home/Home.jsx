import React, {  useEffect, useState } from "react";
import Hero from "./Components/Hero";
import "./Home.css";
import Footer from "./Components/Footer";
import Card from "../Card/Card";
import Wrapper from "../Wrapper";
import axios from 'axios';

const Home = () => {

    const url=`http://localhost:8332/api/medication`;

    const [medications,setMedications]=useState([]);
    const [search,setSearch]=useState(null);
    const [modalOpen,setModalOpen]=useState(false);
    const [medicationToDelete,setMedicationToDelete]=useState(null);

    const handleSearchChange=(value)=>{
        setSearch(value);
        axios.get(`${url}/all?search=${value}`).then(({data})=>{
            setMedications(data.medications);
        }).catch(error=>console.log('ERROR : ',error));
    }

    useEffect(()=>{
        fetchMedications(); 
    },[]);

    useEffect(()=>{
        if(modalOpen) document.body.style.overflowY='hidden';
        else document.body.style.overflowY='auto';
    },[modalOpen])

    const fetchMedications=()=>{
        axios.get(`${url}/all`).then(({data})=>{
            setMedications(data.medications);
        }).catch(error=>console.log('ERROR : ',error));
    }

    const deleteMedication=()=>{
        setModalOpen(false);
        axios.delete(`${url}/${medicationToDelete._id}`).then(()=>{
            setMedicationToDelete(null);
            fetchMedications();
        }).catch(error=>console.log('ERROR : ',error));
    }

    return <div className="home">
        <Hero onSearchChange={handleSearchChange} />
        <Wrapper>
            <div className="meds-title">
            <h2>{search?`Recherche pour "${search}"`:'Les nouveaux médicaments'} </h2> 
                <div className="meds">
                    {medications.map((med) => <Card id={med._id} name={med.name} pic={`http://localhost:8332/${med.image}`} onDelete={()=>{
                        setModalOpen(true);
                        setMedicationToDelete(med);
                    }} />)}
                </div>
            </div>
        </Wrapper>
        <Footer />
        {
            modalOpen?<div className={`deleteModal`} onClick={()=>setModalOpen(false)}>
            <div className="modalContent" onClick={(e)=>e.stopPropagation()}>
                <p className="modalText">This action is <span className="irreversible">irreversible</span>. Are you sure you want to delete medication <span className="medicationName">{medicationToDelete.name}</span>?</p>
                <div className="buttonsWrapper">
                    <button className="proceedBtn" onClick={()=>deleteMedication()}>Proceed</button>
                    <button className="cancelBtn" onClick={()=>setModalOpen(false)}>Cancel</button>
                </div>
            </div>
        </div>:<></>
        }
    </div>;
}

export default Home;