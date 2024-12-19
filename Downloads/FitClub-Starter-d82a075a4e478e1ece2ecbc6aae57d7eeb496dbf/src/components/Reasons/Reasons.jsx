import React from 'react'
import './Reasons.css'
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4_.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = ()=>{
    return (
        <div className="Reasons" id='reasons'>
            <div className="left-r">
                <img src={image1 } alt="" />
                <img src={image2 } alt="" />
                <img src={image3 } alt="" />
                <img src={image4 } alt="" />

            </div>
            <div className="right-r">
                 <span>Some reasons</span>
                 <div>
                    <span className="stroke-text">why</span>
                    <span> choose us?</span>
                 </div>

                 <div className='details-r'>
                 <div>
                    <img src={tick} alt=""></img>
                    <span>Made by AI personalities and Calisthenic experts</span>
                </div>
                 <div>
                    <img src={tick} alt="" />
                    <span>Track form correctness readiness</span>
                </div>
                 <div>
                    <img src={tick} alt="" />
                    <span>analyze personalised workout data</span>
                </div>
                 <div>
                    <img src={tick} alt="" />
                    <span>have your interactive personal AI coach Assistant</span>
                </div>
            </div>
            <span 
                 /*couuld not style OUR PARNTERS*/
            >
                OUR PARTNERS
            </span>
            <div className="partners">
                <img src={nb} alt="" />
                <img src={adidas} alt="" />
                <img src={nike} alt="" />
            </div>
        </div>
    </div>

    )
}

export default Reasons