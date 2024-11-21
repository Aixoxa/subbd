import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav_container flex mx-auto justify-between">
      <ul className="flex justify-evenly flex-nowrap items-center">
        <li>
          <img src="./images/logo.png" alt="" />
        </li>
        <li>SUBBD</li>
        <li>Keys</li>
        <li>Ai features</li>
        <li>Benefits</li>
        <li>Team</li>
        <li>Roadmap</li>
        <li>Merch</li>
      </ul>
      <ul className="flex  justify-evenly flex-nowrap items-center">
        <li>
          <img src="./images/telegram.png" alt="" />
        </li>
        <li>
          <img src="./images/twitter.png" alt="" />
        </li>
        <li>
          <img src="./images/insta.png" alt="" />
        </li>
        <li>
          <span>
            <img src="./images/heart.png" alt="" />
          </span>
          Join SUBBD
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
