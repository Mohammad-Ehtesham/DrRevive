import "./App.css";
import React from "react";
import Navbar from "./components/Navbar"; // Adjust the path as necessary
import styled from "styled-components";
import Home from "./components/Home";
import Functionality from "./components/Functionality";
import Accordin from "./components/Accordin";
import Feedback from "./components/Feedback";

const EmergencyTab = styled.div`
  position: fixed;
  top: 300px; /* Adjust as needed */
  left: 0;
  background-color: #d32f2f;
  color: white;
  font-weight: bold;
  padding: 10px 5px;
  text-align: center;
  z-index: 1000;
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: 2px;
  border-radius: 0 6px 6px 0;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    background-color: #b71c1c; /* Darker red on hover */
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

function App() {
  return (
    <>
      <div>
        <EmergencyTab>Emergency</EmergencyTab>
      </div>

      <Navbar />
      <Home />
      <Functionality />
      <Feedback />
    </>
  );
}

export default App;
