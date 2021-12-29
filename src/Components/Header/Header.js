import React from "react";
import './Header.css';
import Call from "./assets/Call.png";
import Search from './assets/Search.png';
import Menu from './assets/Menu.png';
import Play from './assets/play.png';
import DownArrow from './assets/downarrow.png';

function Header (){
    return(
        <div className="header">
         <nav className="nav">
             <div className="logo">BOTSPOT AI</div>
             <div className="menu">
                 <ul className="icon">
                 <li className="iteams"> <img src={Call} alt="Call" /> </li>
                 <li className="iteams"> <img src={Search} alt="Search" /> </li>
                 <li className="iteams"> <img src={Menu} alt="Menu" /> </li>
                 </ul>
             </div>
         </nav>
         <div className="content">
             <h2 className="content-text">THE SOUL OF THE WORLD</h2>
             <img className="play-icon" src={Play} alt="Play" />
             <h3 className="content-text-2">A SIMPLE SOLUTION</h3>
         </div>
        
         <div className="box"></div>
          <div className="text-box">
         <div className="text">For businesses and organizations - you can build communities andengage audiences with 
         one easy-to-use mobile app platform.</div>
         
        
             <div  className="button"><h2 className="btn-text">Known More</h2></div>
             <div  className="button1"><h2 className="btn-text">Contact Us</h2></div>
         
         </div>
         <div className="container">
             <h2 className="container-text">Why Choose BOTSPOT AI?
                                      We’re so glad you 
                                      asked !</h2>
         </div>
         <div className="getstart"><h2 className="btn2-text">GET STARTED TODAY</h2>
         <img className="arrow" src={DownArrow} alt="Arrow" /></div>
         <div className="services"><h2 className="btn2-text">OUR SERVICES</h2>
         <img className="arrow" src={DownArrow} alt="Arrow" /></div>
        </div>
    );
}

export default Header;