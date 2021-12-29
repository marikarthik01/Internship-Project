import React from "react";
import './Card.css';


function Card(props){
    return(
       <>
        <div className="card">
           <img className="card-img" src={props.img} alt="Call" />
          <h2 className="card-title">{props.title1}</h2>
        </div>

        <div className="card">
          <h2 className="card-title1">{props.title2}</h2>
        </div>
       </>

    );
}

export default Card;