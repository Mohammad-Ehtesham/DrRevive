import React from "react";
import "./functionality.css"; // Adjust the path as necessary
import { FaHandshake } from "react-icons/fa";
import { FaHospital } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
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
              <Link to="/hospitals">
                <h1 className="head">Hospitals</h1>
              </Link>
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
          <Link to="/Insurance">
            <div className="containerDesign specialities">
              <div className="txt">
                <h1 className="head">Insurance</h1>
                <p className="para">Best policy for your Health</p>
              </div>
              <div className="icon">
                <FaShieldAlt
                  size={65}
                  style={{ background: "transparent" }}
                  className="spe"
                />
              </div>
            </div>
          </Link>

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
                <Link to={"/testreport"}>
                  <PiDnaFill
                    size={105}
                    style={{ background: "transparent" }}
                    className="nurse"
                  />
                </Link>
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
