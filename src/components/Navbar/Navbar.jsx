import React, { Component } from "react";
import "./Navbar.css";
import logo from "../../assets/logo@2x.png";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav id="nav">
          <img className="logo" src={logo} alt="" />
          <ul>
            <a href="/">
              <li>HOME</li>
            </a>
            <a href="#aboutus">
              <li>ABOUT US</li>
            </a>
            <a href="#services">
              <li>SERVICES</li>
            </a>
            <a href="#news">
              <li>NEWS</li>
            </a>

            <a href="#footer">
              <li>CONTACT</li>
            </a>
            <a
              id="navbutton"
              href="https://wa.me/7533935385?text=Hello%2C%20%20How%20may%20i%20help%20you%3F"
            >
              <li>REQUEST A QUOTE</li>
            </a>
          </ul>
        </nav>

        <a id="top" href="#nav">
          &#11014;
        </a>
      </div>
    );
  }
}

export default Navbar;
