import React from "react";
import Wrapper from "../../Wrapper";
import { CiSearch } from "react-icons/ci";


const Hero = ({onSearchChange}) => {
    return (
        <div className="hero-bg">
            <Wrapper>
                <div className="hero">

                    <img alt="" height={200} src="/logo.png" />
                    <div className="search">
                        <CiSearch />
                        <input type="text" placeholder="Recherche" onChange={({target})=>onSearchChange(target.value)} />
                   
                    </div>
                    <p className="text">
                    Teriak s'engage à fournir des médicaments de qualité à des prix abordables et à contribuer à améliorer l'accès aux soins de santé dans les pays où elle opère
                    </p>
                </div>
            </Wrapper>
        </div>
    )
}

export default Hero;