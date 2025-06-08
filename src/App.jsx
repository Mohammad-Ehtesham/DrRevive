import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Home from "./components/Home";
import Functionality from "./components/Functionality";
import Feedback from "./components/Feedback";
import { Route, Routes } from "react-router-dom";
import Bot from "./components/bot/Bot";
import Doc from "./components/Doctors/Doc";
import HealthCheckups from "./components/Doctors/HealthCheckups";
import Authdesign from "./components/Authentication/Authentication";
import NotFoundPage from "./components/NotFound/NotFoundPage";
import { AuthProvider } from "./components/Context/AuthContext";
import ProtectedRoute from "./components/Authentication/ProtectedRoute";
import AboutPage from "./about/About";
import MedicalReportsPage from "./patient/MedicalReport";
import TestsServicesPage from "./patient/TestService";
import HospitalsPage from "./patient/Hospitals";
import InsurancePage from "./patient/InsurancePage";
import BlogPage from "./patient/Blogpage";

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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Authdesign />} />
        {/* Add more routes here as needed */}
        <Route path="/chatbot" element={<Bot />} />
        <Route path="/doctors" element={<Doc />} />
        <Route path="/HealthCheckups" element={<HealthCheckups />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/medical" element={<MedicalReportsPage />} />
        <Route path="/testreport" element={<TestsServicesPage />} />
        <Route path="/hospitals" element={<HospitalsPage />} />
        <Route path="/insurance" element={<InsurancePage />} />
        <Route path="/blog" element={<BlogPage />} />
        {/* <TestsServicesPage /> */}

        <Route path="*" element={<NotFoundPage />} />
        {/* Example: <Route path="/about" element={<About />} /> */}
        {/* <Route path="/npage" element={<Newpage />} /> */}
        {/* <Route path="/login" element={<AuthPage />} /> */}
        {/* <Route path="/login" element={<Front />} /> */}
      </Routes>
    </>
  );
}

export default App;
