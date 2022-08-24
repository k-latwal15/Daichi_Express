import React, { useState, useEffect } from "react";
import "./TrackingSection.css";
import img1 from "../../assets/imgBanner.svg";
import img2 from "../../assets/img2.svg";
import img3 from "../../assets/img3.svg";
import img4 from "../../assets/img4.svg";
import line from "../../assets/line.svg";
import loader from "../../assets/loader@2x.png";
import trackbox1 from "../../assets/trackbox1.svg";
import trackbox2 from "../../assets/trackbox2.svg";

function TrackingSection() {
  const initialValues = { shipmentType: "", trackingNumber: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [token, setToken] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && token && isSubmit) {
      fetch(
        `https://ship.xpressbees.com/api/franchise/shipments/track_shipment`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ awb_number: formValues.trackingNumber }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          let tData = [];
          for (const key in data.tracking_data) {
            tData[key] = data.tracking_data[key][0];
          }
          // tData = data?.tracking_data[Object.keys(data?.tracking_data)[]];
          // console.log(process.env.REACT_APP_EMAIL)

          setTrackingInfo(tData);
        });
    }
  }, [formErrors, isSubmit, token]);

  const validate = (values) => {
    const errors = {};

    if (!values.shipmentType) {
      errors.shipmentType = "Shipment type is required field!";
    }

    if (!values.trackingNumber) {
      errors.trackingNumber = "Tracking Number is required!";
    }

    if (values.trackingNumber && values.trackingNumber.length < 15) {
      errors.lessLength = "Tracking Number length is 15 digits";
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      fetch("https://ship.xpressbees.com/api/users/franchise_login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: process.env.REACT_APP_EMAIL,
          password: process.env.REACT_APP_EMAIL,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setToken(data.data);
        });
    }
  }, [formErrors, isSubmit]);

  const getTime = (time) => {
    const readableTime = new Date(Number(time));
    return readableTime.toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  return (
    <div className="container">
      <div id="craftImg">
        <div>
          <p className="sub-heading">
            Providing Full Range Of Transportation Worldwide.
          </p>
          <h2 className="heading">
            Global Logistics Partner To World’s Famous Brands For Over 25 Years!
          </h2>
        </div>
      </div>
      <div id="aboutus">
        <p className="sub-heading">Why choose Us</p>
        <h2 className="heading">The Main Feature</h2>
        <div id="whyUs">
          <div>
            <div className="feature">
              <div>
                <h2 className="sub-heading">100% SATISFIED CUSTOMERS</h2>
                <br />
                <p className="text">
                  Lorem ipsum dolor sit amet elit eiusmod tempor incididunt ut
                  labore dolore magna aliqua
                </p>
              </div>
              <div className="featurePng">
                <img src={img1} alt="" />
                <br />

                <img src={line} alt="" />
              </div>
            </div>
            <div className="feature">
              <div>
                <h2 className="sub-heading">
                  QUALITY SERVICE AFFORDABLE PRICE
                </h2>
                <br />
                <p className="text">
                  Lorem ipsum dolor sit amet elit eiusmod tempor incididunt ut
                  labore dolore magna aliqua
                </p>
              </div>
              <div className="featurePng">
                <img src={img2} alt="" />
                <br />

                <img src={line} alt="" />
              </div>
            </div>
            <div className="feature">
              <div>
                <h2 className="sub-heading">WORLDWIDE LOCATIONS</h2>
                <br />
                <p className="text">
                  Lorem ipsum dolor sit amet elit eiusmod tempor incididunt ut
                  labore dolore magna aliqua
                </p>
              </div>
              <div className="featurePng">
                <img src={img3} alt="" />
                <br />

                <img src={line} alt="" />
              </div>
            </div>
            <div className="feature">
              <div>
                <h2 className="sub-heading">HASSLE FREE FLEET</h2>
                <br />
                <p className="text">
                  Lorem ipsum dolor sit amet elit eiusmod tempor incididunt ut
                  labore dolore magna aliqua
                </p>
              </div>
              <div className="featurePng">
                <img src={img4} alt="" />
              </div>
            </div>
          </div>
          <div>
            <img id="loader" src={loader} alt="" />
          </div>
        </div>
      </div>

      <div id="trackbox">
        <div className="topheading">
          <div className="one">
            <img src={trackbox1} alt="" />
            <div>Request a quote</div>
          </div>
          <div className="two">
            <img src={trackbox2} alt="" />
            <div>Track & Trace</div>
          </div>
        </div>

        <div id="form-box" style={trackingInfo && { display: "none" }}>
          <form onSubmit={handleSubmit} className="form-area">
            {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
            <div>
              <label>Personel Data</label>
              <select name="shipmentType" onChange={handleChange}>
                <option value="">--shipment type--</option>
                <option value="Air Freight">Air Freight</option>
                <option value="Road Freight">Road Freight</option>
                <option value="Rail Freight">Rail Freight</option>
              </select>
            </div>
            <p className="text error">{formErrors.shipmentType}</p>
            <div>
              <label>Tracking Number</label>
              <input
                onChange={handleChange}
                name="trackingNumber"
                value={formValues.trackingNumber}
                placeholder="you can enter upto a maximum of 10 airway bill numbers for tracking."
                type="number"
              />
            </div>
            <p className="text error">{formErrors.trackingNumber}</p>
            <p className="text error">{formErrors.lessLength}</p>
            <button type="submit">Track & Trace</button>
          </form>

          <div className="sideImage">
            <div>
              <h2 className="sub-heading">Tracking Number</h2>
              <br />
              <p className="text">
                Tracking numbers are numbers assigned to packages when they are
                shipped. Tracking numbers are useful for knowing the location of
                time sensitive deliveries. It is a unique ID number or code
                assigned to a package or parcel.
              </p>
            </div>
          </div>
        </div>
        {/* conditional rendering */}
        {trackingInfo && (
          <div className="response-display">
            <pre className="sub-heading">
              {/* <span style={{ color: "red" }}> DELIVERY STATUS -</span>{" "}
              {trackingInfo["pending pickup"]?.status}
              {"    "} */}
              <a id="back" href="" onClick={isSubmit===false}>
                &#8592; back
              </a>
              <span style={{ color: "red" }}> TRACKING NUMBER -</span>{" "}
              {trackingInfo["pending pickup"]?.awb_number}
            </pre>
            <br />
            <table className="text">
              <tr>
                <th>ID</th>
                <th>Status</th>
                <th>Time</th>
                <th>Location</th>
              </tr>
              {Object.keys(trackingInfo).map((key) => {
                return (
                  <tr>
                    <td>{trackingInfo[key]?.id}</td>
                    <td>{trackingInfo[key]?.status}</td>
                    <td>{getTime(trackingInfo[key]?.event_time)}</td>
                    <td>{trackingInfo[key]?.location}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default TrackingSection;
