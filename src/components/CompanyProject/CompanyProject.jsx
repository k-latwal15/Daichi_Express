import React from "react";
import { Button, Card } from "react-bootstrap";
import Cimg1 from "../../assets/CompanyImg1.png";
import Cimg2 from "../../assets/CompanyImg2.png";
import Cimg3 from "../../assets/CompanyImg3.png";
import Cimg4 from "../../assets/CompanyImg4.png";
import Cimg5 from "../../assets/CompanyImg5.png";
import partner1 from "../../assets/finance.png";
import partner2 from "../../assets/statusgroup.png";
import partner3 from "../../assets/dynamic.png";
import partner4 from "../../assets/analystcenter.png";
import partner5 from "../../assets/accession.png";
import partner6 from "../../assets/capital.png";
import "./CompanyProject.css";

function CompanyProject() {
  return (
    <div id="services">
      <p className="sub-heading">What We Provide For Clients</p>
      <h2 className="heading">Our Esteemed Customers</h2>

      <div id="companyImgSection">
        <div className="part1">
          <div className="backdrop">
            <h4 className="sub-heading">Biorex Healthcare Pvt Ltd.</h4>
          </div>
        </div>
        <div className="part2">
          <div className="backdrop">
            <h4 className="sub-heading">Delta Light Pvt Ltd.</h4>
          </div>
        </div>
        <div className="part3">
          <div className="backdrop">
            <h4 className="sub-heading">Medicart Healthcare Pvt Ltd. </h4>
          </div>
        </div>
        <div className="part4">
          <div className="backdrop">
            <h4 className="sub-heading">Pharmagenica Healthcare</h4>
          </div>
        </div>
      </div>
      <div id="backgroundpattern">
        <br />
        <br />
        <a className="button" href="/">
          VIEW MORE
        </a>
        <br />
        <br />
        <br id="news" />
        <br />

        <p className="sub-heading">What We Provide For Clients</p>
        <h2 className="heading">Company Recent News</h2>
        <div className="companyCard">
          <div className="card" style={{ width: "346px", height: "230px" }}>
            <img src={Cimg3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h3 class="card-title">MODERN VEHICLES FLEET</h3>
              <p className="sub-title">logistics, optimization</p>
              <p class=" text card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div class="card" style={{ width: "346px", height: "230px" }}>
            <img src={Cimg4} class="card-img-top" alt="..." />
            <div class="card-body">
              <h3 class="card-title ">MODERN VEHICLES FLEET</h3>
              <p className="sub-title">logistics, optimization</p>
              <p class=" text card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div class="card" style={{ width: "346px", height: "230px" }}>
            <img src={Cimg5} class="card-img-top" alt="..." />
            <div class="card-body">
              <h3 class="card-title">MODERN VEHICLES FLEET</h3>
              <p className="sub-title">logistics, optimization</p>
              <p class=" text card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <br />

        <p className="sub-heading">Join Us Today</p>
        <h2 className="heading">Our Partners</h2>
        <p className="text text-center" style={{ padding: "0 15rem" }}>
          Our skilled personnel, utilising the latest communications, tracking
          and processing software, combined with decades of experience! Through
          integrated supply chain solutions, Equita drives sustainable
          competitive
        </p>
        <div className="ourPartners">
          <img className="partner" src={partner1} alt="" />
          <img className="partner" src={partner2} alt="" />
          <img className="partner" src={partner3} alt="" />
          <img className="partner" src={partner4} alt="" />
          <img className="partner" src={partner5} alt="" />
          <img className="partner" src={partner6} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CompanyProject;
