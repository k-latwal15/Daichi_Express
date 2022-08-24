import React from "react";
import "./Logistic.css";
import vehicle from "../../assets/vehicleIcon.svg";

function Logistic() {
  return (
    <div id="Logistic">
      <h1>Logistic Solutions</h1>
      <div className="wrapper">
        <div id="contentWrap">
          <div className="contentBox text">
            <img src={vehicle} alt="vehicle" />
            <div>
              <h4 className="sub-heading" style={{color:"black"}}>ROAD FREIGHT</h4>
              <p>
              Grow Faster with Flexible Shipping Services.
              </p>
            </div>
          </div>
          <div className="contentBox text">
            <img src={vehicle} alt="vehicle" />
            <div>
              <h4 className="sub-heading" style={{color:"black"}}>AIR FREIGHT</h4>
              <p>
              Flexible and Efficient solutions customized for your business.
              </p>
            </div>
          </div>
          <div className="contentBox text">
            <img src={vehicle} alt="vehicle" />
            <div>
              <h4 className="sub-heading" style={{color:"black"}}>RAIL FREIGHT</h4>
              <p>
              Cost-effective way to get your goods where they need to go.
              </p>
            </div>
          </div>
          <div className="contentBox text">
            <img src={vehicle} alt="vehicle" />
            <div>
              <h4 style={{color:"black"}} className="sub-heading">WARE HOUSE</h4>
              <p>
              Comprehensive range of warehousing and fulfilment services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logistic;
