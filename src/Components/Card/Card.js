import React from "react";
import "./Card.css";

function Card({icon, platform, image}) {
  return (
    <div
      className="card_container"
      style={{ backgroundImage: `url(./images/${image}.jpeg)` }}
    >
      <div className="social_icon">
        <img
          src={`
      ./images/${icon}.png`}
          alt=""
        />
      </div>
      <h4>{platform}</h4>
      <h6>Check profile</h6>
    </div>
  );
}

export default Card;
