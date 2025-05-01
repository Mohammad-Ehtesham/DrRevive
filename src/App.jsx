import "./App.css";
import React from "react";
import Navbar from "./components/Navbar"; // Adjust the path as necessary
import styled from "styled-components";
import Home from "./components/Home";
import Functionality from "./components/Functionality";
import Feedback from "./components/Feedback";
import { Route, Routes } from "react-router-dom";
import Bot from "./components/bot/Bot";
import AuthPage from "./components/Authentication/signandlogin";
import Doc from "./components/Doctors/Doc";
import HealthCheckups from "./components/Doctors/HealthCheckups"; // Adjust the path as necessary
import Authdesign from "./components/Authentication/Logout";

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
function HomePage() {
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

const Newpage = () => {
  return (
    <>
      <h1>New Page</h1>
      <p>This is a new page.</p>
      <p>More content can go here.</p>
      <p>Feel free to customize it as needed.</p>
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes here as needed */}
        <Route path="/npage" element={<Newpage />} />
        {/* <Route path="/login" element={<Front />} /> */}
        <Route path="/login" element={<AuthPage />} />
        <Route path="/chatbot" element={<Bot />} />
        <Route path="/doctors" element={<Doc />} />
        <Route path="/HealthCheckups" element={<HealthCheckups />} />
        <Route path="/logindetails" element={<Authdesign />} />

        {/* Example: <Route path="/about" element={<About />} /> */}
      </Routes>
    </>
  );
}

export default App;
