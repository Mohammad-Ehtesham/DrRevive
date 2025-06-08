import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { CgDetailsMore } from "react-icons/cg";
import { FaAmbulance } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import myImg from "../assets/Logo.png";
import "./Navbar.css"; // Assuming you have a CSS file for styling the Navbar
import { Link } from "react-router-dom";
import ProfileSection from "./Authentication/ProfileDropdown";

const Navbar = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMoreDetailsOpen, setMoreDetailsOpen] = useState(false);

  return (
    <>
      <header>
        <ul className="header-links">
          <Link to={"/about"}>
            <li>About us</li>
          </Link>
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
                <Link to="/hospitals">Hospitals</Link>
              </li>
              <Link to="/doctors">
                <li>Find a Doctor</li>
              </Link>
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
              <li>
                <ProfileSection />
              </li>
              {/* <Link to="/login" className="link">
                <li className="Articles">Login</li>
              </Link> */}
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
    </>
  );
};

export default Navbar;
