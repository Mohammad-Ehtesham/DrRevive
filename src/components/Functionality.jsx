import React from "react";
import "./functionality.css"; // Adjust the path as necessary
import { FaHandshake } from "react-icons/fa";
import { FaHospital } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUserNurse } from "react-icons/fa";
import { PiDnaFill } from "react-icons/pi";
import Reports from "./Reports";
import Blog from "./Blog";
import { Link } from "react-router-dom";

const Functionality = () => {
  return (
    <>
      <div className="functionality">
        <div className="category">
          <div className="containerDesign appointment">
            <div className="txt">
              <h1 className="head">Book an Appointment</h1>
              <p className="para">With country's leading experts</p>
            </div>
            <div className="icon">
              <FaHandshake
                size={65}
                style={{ background: "transparent" }}
                className="app"
              />
            </div>
          </div>
          <div className="containerDesign hospital">
            <div className="txt">
              <h1 className="head">Hospitals</h1>
              <p className="para">Health needs under one roof</p>
            </div>
            <div className="icon">
              <FaHospital
                size={65}
                style={{ background: "transparent" }}
                className="hos"
              />
            </div>
          </div>
          <div className="containerDesign specialities">
            <div className="txt">
              <h1 className="head">Specialities</h1>
              <p className="para">Our expeertise in Healthcare</p>
            </div>
            <div className="icon">
              <FaStethoscope
                size={65}
                style={{ background: "transparent" }}
                className="spe"
              />
            </div>
          </div>

          <Link to="/doctors" className="containerDesign Doctors">
            <div className="txt">
              <h1 className="head">Doctors</h1>
              <p className="para">Top experts for your health</p>
            </div>
            <div className="icon">
              <FaUserDoctor
                size={65}
                style={{ background: "transparent" }}
                className="doc"
              />
            </div>
          </Link>
        </div>
        <div className="checks">
          <p className="heading">We can help you book </p>
          <div className="ches">
            <Link to="/HealthCheckups">
              <div className="check1">
                <div className="ico">
                  <FaUserNurse
                    size={105}
                    style={{ background: "transparent" }}
                    className="nurse"
                  />
                </div>
                <p className="text">Health Checkups</p>
              </div>
            </Link>
            <div className="check1">
              <div className="ico">
                <PiDnaFill
                  size={105}
                  style={{ background: "transparent" }}
                  className="nurse"
                />
              </div>
              <p className="text">Test & Services</p>
            </div>
          </div>
        </div>
      </div>
      {/* <Banner /> */}
      <Reports />
      <Blog />
    </>
  );
};

export default Functionality;
