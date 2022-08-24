import React from "react";
import "./Footer.css";
import fb from "../../assets/fb.svg";
import twitter from "../../assets/twitter.svg";
import insta from "../../assets/insta.svg";
import linkedin from "../../assets/linkedin.svg";
import ytube from "../../assets/ytube.svg";

function Footer() {
  return (
    <footer>
      <div id="footer">
        <div>
          <p className="self">COMPANY</p>
          <br />
          <p className="self">About Us</p>
          <p className="self">Industries</p>
          <p className="self">Careers</p>
          <p className="self">News</p>
          <p className="self">Privacy Policy</p>
          <p className="self">Contact Us</p>
        </div>

        <div>
          <p className="self">SERVICES</p>
          <br />
          <p className="self">Warehouse</p>
          <p className="self">Air Freight</p>
          <p className="self">Rail Freight</p>
          <p className="self">Road Freight</p>
          <p className="self">Supply Chain</p>
          <p className="self">Packaging</p>
        </div>

        <div>
          <p className="self">INDUSTRIES</p>
          <br />
          <p className="self">Retail & Consumer</p>
          <p className="self">Sciences & Healthcare</p>
          <p className="self">Industrial & Chemical</p>
          <p className="self">Power Generation</p>
          <p className="self">Food & Beverage</p>
          <p className="self">Oil & Gas</p>
        </div>
        <div>
          <p className="self">CONTACT US</p>
          <br />
          <p className="self">INDIA: +91 7898789878</p>
          <p className="self">USA: +91 7898789878</p>
          <p className="self">Email: business@gmail.com</p>
          <br />
          <br />
          <div id="social">
            <img src={fb} alt="" />
            <img src={twitter} alt="" />
            <img src={insta} alt="" />
            <img src={linkedin} alt="" />
            <img src={ytube} alt="" />
          </div>
        </div>
      </div>
      
      <div id="creator">
      (C) 2022, Binmile Technologies Private Limited
      </div>
    </footer>
  );
}

export default Footer;
