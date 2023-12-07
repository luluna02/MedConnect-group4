import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../Wrapper";
import { IoLogOutSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { UserContext } from "../../Context/userContext";


const Navbar = () => {

    const {user,setUser}=useContext(UserContext);
    const navigate=useNavigate();

    return <>
    {user ?<div className="navbar">
            <Wrapper>
                <div className="navbar-content">

                    <div className="logo">
                    <Link to="/"> 
                        <img alt="" height={40} src="/logo.png"/>
                        </Link>
                    </div>
                 
                    <div className="nav-links">
                       {user.role==='admin' &&  <Link to="/add">Ajouter</Link>}
                       {user.role==='user' &&  <Link to="/profile"><span className="username">{`${user.name}, ${user.lastname}`}</span></Link>} 
                        <button onClick={()=>{
                            setUser(null);
                            localStorage.clear();
                            navigate("/login")
                        }} className="button"><IoLogOutSharp /></button>
                    </div>
                </div>
            </Wrapper>
            
        </div>:<></>}
    </>;
}

export default Navbar;