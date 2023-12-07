import axios from "axios";
import {  useNavigate } from "react-router-dom";

const { createContext, useState, useEffect } = require("react");

export const UserContext=createContext(null);

export const UserContextProvider=({children})=>{
    const url="http://localhost:8332/api/users/"
    const [user,setUser]=useState();
    const [loading,setLoading]=useState();
    const context={user,setUser};
    const navigate=useNavigate();

    useEffect(()=>{
        if(typeof window==="undefined") return;
        setLoading(true);
        const token=localStorage.getItem("token");
        const userid=localStorage.getItem("userid");
        if(token) {
            axios.defaults.headers['Authorization']=`Bearer ${token}`;
            axios.get(url+userid).then(({data})=>{
            setUser(data.user);
        }).catch(error=>console.error(error));}
        else navigate("/login");
        setLoading(false);
    },[typeof window])

    useEffect(()=>{
        if(user) localStorage.setItem("userid",user._id)
    },[user]);



   return <UserContext.Provider value={context} >
        {loading?<></>:children}
    </UserContext.Provider>
}