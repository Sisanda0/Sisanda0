import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_image from "../../assets/hero_image 1.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from "number-counter";

import {motion} from 'framer-motion'
const Hero = () => {

    const transition = {type:'spring' , duration :3}
    const mobile = window.innerWidth<=768? true: false;

    return (
      <div className="hero" id ='home'>
        
        <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header/>
{/* the best ad */}            
            <div className="the-best-ad">
                <motion.div
                initial={{left: mobile? "178px" :'238px'}}
                whileInView={{left: '8px'}}
                transition = {{...transition, type:'tween'}}
                
                ></motion.div> 
                <span> THE BEST TRACKING TECHNOLOGY FOR YOUR WORKOUT</span>
            </div>

            {/* Hero Heading*/}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>CALIVISON</span>
                    <span>- MAX</span>
                </div>
                <div>
                 <span>PERFORMANCE</span>
                </div>
                <div>
                    <span>
                    Effectiveness? Injury Prevention? Tracking? In here we will help you enhance the your training 🏋 and ensure correct form of workouts.

With state-of-the-art tracking technology using AI 🤖, your Personal AI Coach Assistant is the only training partner you need.
                    </span>
                </div>
            </div>
            {/*figures*/}
            <div className='figures'>
                <div>
                    <span>
                        <NumberCounter end={140} start={100} delay='4' prefix="+"/>
                    </span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={978} start={800} delay='4' prefix="+"/>

                    </span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={50} start={0} delay='4' prefix="+"/>

                    </span>
                    <span>fitness programs</span>
                </div>
            </div>
            {/* hero buttons*/}
            <div className="hero-buttons">
                <buttons className="btn">Get Started</buttons>
                <buttons className="btn">Learn More</buttons>
            </div>

        </div>
        <div className="right-h">
          <button className= "btn">Login/Signup</button> 
         
          <motion.div 
          initial={{right: "-1rem"}}
          whileInView={{right:"4rem"}}
          transition={transition}
          
          className="heart-rate">
                <img src={Heart} alt=""/>
                <span>Heart Rate</span>
                <span>116 bpm </span>
            </motion.div> 

            {/* hero images*/}
            <img src={hero_image} alt="" className="hero-image" />
            <motion.img
            initial ={{right:'11rem'}}
            whileInView={{right:'28rem'}}
            transition={transition}
             src={hero_image_back} alt="" className="hero-image-back" />
            {/* calories */}
                <motion.div 
                initial={{right: "37rem"}}
                whileInView={{right: "28rem"}}
                transition={transition}
                
                className="calories">
                <img src={Calories} alt=""  />
                <div>
                <span>Calories Burned</span>
                <span> 220 kcal </span>    
                </div>
                
            </motion.div>

        </div>
      </div>  
    )
}

export default Hero