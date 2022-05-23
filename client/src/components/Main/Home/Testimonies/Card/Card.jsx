import React, { useState } from "react";
import icon_card from "./../../../../../assets/touch_app.svg";



function Card({data}) {
  console.log(data);

  const front = data.front
  const back = data.back

  return <>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
    <p>{data.front}</p>
    <figure>
      <img src={icon_card} alt="Icon to flip the card" style={{width:"24px", height: "24px"}}/>
    </figure>
    </div>
    <div className="flip-card-back">
      <p>{data.back}</p>
    </div>
  
  </div>
</div>
  </>


  
}

export default Card;