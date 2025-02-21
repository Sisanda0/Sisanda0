import React from 'react'
import './Footer.css'
import  Facebook from "../../assets/facebook.png";
import Instagram from  "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo3_note.png";


const Footer =() =>{
    return (
    <div className="Footer-container">
        <hr/>
        <div className="footer">
            <div className="social-links">


            
                <img src={Facebook} alt="" />
             
                <img src={Instagram} alt=""/>
                <img src= {LinkedIn} alt =""/>
            </div>
            <div className='logo-f'>
                 <img src={Logo} alt=""/>
            </div>
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </div>
    )
}

export default Footer