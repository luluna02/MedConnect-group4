import React, { useContext } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { UserContext } from "../../Context/userContext";

const Card = ({id, name, pic,onDelete}) => {
    const {user}=useContext(UserContext);
    return (
        <div className="cardWrapper">
    <Link to={'/product/'+id} className="card">
        <img src={pic} alt={name}/>
        <div className="cardText">
            <h3>{name}</h3>
        </div>
    </Link>
   {user.role==='admin'&& <button className="deleteBtn" onClick={()=>onDelete()}><FaTrash /></button>}
    </div>
    )
}

export default Card;