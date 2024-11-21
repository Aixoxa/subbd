import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <div className="">
        <div className="nav">
          <Navbar />
        </div>
        <div
          className="hero_container"
          style={{
            backgroundImage: `url(./images/hero.png)`,
          }}
        >
          <div className="hero_content">
            <h1>VICTORIA BIANCHINI</h1>
            <button>
              <span>
                <img src="./images/heart.png" alt="" />
              </span>
              See More Content
            </button>
          </div>
        </div>
      </div>

      <div className="socials_section">
        <div className="gradient"></div>
        <h2>Follow our socials</h2>
        <p>
          Check our profiles to stay up to date with the latest news from the
          SUBBD world.
        </p>
        <div className="socials_card_container">
          <Card icon="insta" platform="Instagram" image="icon1" />
          <Card icon="twitter" platform="Twitter" image="icon2" />
          <Card icon="telegram" platform="Telegram" image="icon3" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
