import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer_container flex justify-between items-center">
        <span>
          <img src="./images/logo.png" alt="" />
        </span>
        <h4>
          <span>
            <img src="./images/heartt.png" alt="" />
          </span>
          by Creators for Creators
        </h4>
        <ul className="flex">
          <li>
            <img src="./images/insta.png" alt="" />
          </li>
          <li>
            <img src="./images/telegram.png" alt="" />
          </li>
          <li>
            <img src="./images/reddit.png" alt="" />
          </li>
          <li>
            <img src="./images/twitter.png" alt="" />
          </li>
          <li>
            <img src="./images/discord.png" alt="" />
          </li>
        </ul>
      </div>
      <p className="text-center py-5" style={{ color: "#a2a2a2",fontFamily:'Poppins'}}>
        Copyright © 2024 SUBBD. All rights reserved.
      </p>
    </>
  );
}

export default Footer;
