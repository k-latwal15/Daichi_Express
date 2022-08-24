import React from "react";
import sideImg from "../../assets/cardSection.png";
import "./CardSection.css";
import imgBanner from "../../assets/deliver1.png";

function CardSection() {
  return (
    <div id="blog" className="cardSection">
      <div className="imgPart">
        <div>
          <img id="cardImg" src={sideImg} alt="" />
        </div>
        <div id="imgBanner">
          <img src={imgBanner} alt="" />
          <div>
            <h2>7209</h2>
            <h4 className="text">delivered goods</h4>
          </div>
        </div>
      </div>
      <div className="cardContent">
        <p className="sub-heading">
          Providing full range of freight and logistics solutions all over India
        </p>
        <h2 className="heading">
          Reliable freight and logistics solutions improves your business and
          saves time
        </h2>
        <p className="text">
          The company offers several logistics services including
          transportation, express shipping, mail delivery, last-mile delivery,
          and air freight solutions. It also offers third-party logistics
          services such as warehousing, inventory management, packaging
          solutions, and more. It allows businesses to track their items and
          manage exceptions.
        </p>
        <br />
        <p className="text">
          The customer always comes first for us. We see ourselves as your
          partner with many years of experience and solve challenges together.
          With us you will find the right contact person for each of your
          concerns – uncomplicated and fast.
        </p>
        <div>
          <br />
          <br />
          <h3>John Peter</h3>
          <p className="text">Founder</p>
        </div>
        <a className="button" href="#">
          READ MORE
        </a>
      </div>
    </div>
  );
}

export default CardSection;
