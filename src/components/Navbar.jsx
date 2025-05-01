import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { CgDetailsMore } from "react-icons/cg";
import { FaAmbulance } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import myImg from "../assets/Logo.png";
import "./Navbar.css"; // Assuming you have a CSS file for styling the Navbar
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMoreDetailsOpen, setMoreDetailsOpen] = useState(false);

  return (
    <>
      <header>
        <ul className="header-links">
          <li>Find a Doctor</li>
          <li>About us</li>
          <li>Contact us</li>
          <li className="icon">
            <FiPhoneCall className="i" /> Request a Callback
          </li>
        </ul>
      </header>
      <hr className="line" />
      <nav
        style={{
          position: "sticky",
          top: 0,
          padding: "1rem",
        }}
      >
        <div className="logo">
          <Link to={"/"}>
            <img src={myImg} alt="Logo" />
          </Link>
        </div>
        {!isSearchOpen && (
          <div className="nav-links">
            <ul className="diff-links">
              <li>
                <a href="#Hospitals" className="icon">
                  Hospitals
                </a>
              </li>
              <li>
                <a href="#Enquiry">Quick Enquiry</a>
              </li>
            </ul>
            <ul className="fix-bar">
              <li className="search">
                <FaSearch
                  size={45}
                  className="i"
                  onClick={() => {
                    setSearchOpen(!isSearchOpen);
                  }}
                />
              </li>
              <Link to="/login" className="link">
                <li className="Articles">Login</li>
              </Link>
              <li className="emergency">
                <a href="#Emergency">
                  <FaAmbulance className="emerg" />{" "}
                </a>
              </li>
              <li className="details">
                <a href="#Details">
                  <CgDetailsMore
                    className="detail"
                    onClick={() => {
                      setMoreDetailsOpen(!isMoreDetailsOpen);
                    }}
                  />
                </a>
              </li>
            </ul>
          </div>
        )}
        {isSearchOpen && (
          <div className={`search-bar ${isSearchOpen ? "active" : ""}`}>
            <input
              type="text"
              placeholder="Search for Doctors, Specialties and Hospitals"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="close-btn" onClick={() => setSearchOpen(false)}>
              <IoMdClose className="close" />
            </button>
          </div>
        )}
      </nav>
      {isMoreDetailsOpen && (
        <div className="navbar">
          <div className="cont1"></div>
          <div className="cont2">
            <ul className={`nav-Mlinks `}>
              <li>Request a Callback</li>
              <li>Find a Doctor</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
            <ul className={`nav-Mlinks `}>
              <li>Quick Enquiry</li>
              <li>Hospitals</li>
              <li>Articles</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
