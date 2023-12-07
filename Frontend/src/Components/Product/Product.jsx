import Wrapper from "../Wrapper";
import "./product.css";
import data from "../../sampleData.json";
import { useEffect, useState } from "react";
import axios from 'axios';

const Product = ({id}) => {
    const url=`http://localhost:8332/api/medication/${id}`;

    const [medication,setMedication]=useState(null);

    useEffect(()=>{
        axios.get(url).then(({data})=>setMedication(data.medication)).catch(error=>console.log('ERROR : ',error));
    },[id]);

    return ( 
    <div className="product-bg">
        <Wrapper>
            <div className="product">
                <div className="product-img">
                    <img src={`http://localhost:8332/${medication?.image}`} alt="product" />
                </div>
                <div className="product-info">
                    <h2>{medication?.name}</h2>
                    <h3>Dosage: {medication?.dosage}</h3>
                </div>
            </div>
        </Wrapper>
    </div> 
    );

}

export default Product;