import React from "react";
import "./DoctorCard.css"; // We'll create this for styling
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor, onBookAppointment }) => {
  return (
    <>
      <div className="doctor-card">
        <div className="doctor-image-container">
          <img
            src={doctor.imageUrl || "https://via.placeholder.com/150"}
            alt={`Dr. ${doctor.name}`}
            className="doctor-image"
          />
        </div>

        <div className="doctor-details">
          <h3 className="doctor-name">Dr. {doctor.name}</h3>
          <p className="doctor-designation">{doctor.designation}</p>
          <p className="doctor-specialization">
            <strong>Specialization:</strong> {doctor.specialization}
          </p>
          <p className="doctor-fee">
            <strong>Appointment Fee:</strong> Rs. {doctor.fee}
          </p>
          <p className="doctor-experience">
            <strong>Experience:</strong> {doctor.experience} years
          </p>
        </div>

        <div className="doctor-actions">
          <button className="view-profile-btn">View Full Profile</button>

          <button
            className="book-appointment-btn"
            onClick={() => onBookAppointment(doctor)}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default DoctorCard;
