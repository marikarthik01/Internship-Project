import react from "react";
import "./Serve.css";
import Heart from "./assets/heart.png";
import Bulb from "./assets/bulb.png";
import Shopcart from "./assets/shopcart.png";
import Bus from "./assets/bus.png";

function Serve(){
    return(
        <>
      <div className="serve">
          <div className="serve-content">
            <img className="heart-icon" src={Heart} alt="HeartBreak" />
              <p className="serve-text">
              Botsopot AI offers our customer a wealth of technical and business expertise. We create diverse, 
              complex, web and mobile solutions for any busness need. Our knowledge and experience transkate to 
              added value and peace of mind for our customer.
              </p>
          </div>
          <div className="serve-box">
            <img className="bulb-icon" src={Bulb} alt="Bulb" />
              <h1 className="serve-head"><b>Who We Serve</b></h1>
              <img className="shopcart-icon" src={Shopcart} alt="Shopcart" />
          </div>
          <div className="box2">
          <div className="serve-content1">
               <img className="bus-icon" src={Bus} alt="Bus" />
               <p className="serve-text1">  
                         
               Botspot AI serves businesses in all major sectors, providing exceptional software solutions for
               large corporation, mid-sized and startups. we use industry specific knowledge and custom tailor
                our products to each customer’s unique needs.
              </p>
          </div>
          </div>
          
      </div>
      </>
    );
}

export default Serve;