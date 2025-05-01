import React, { useState } from "react";
import styled from "styled-components";
import { format, addDays } from "date-fns";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 16px;
  box-sizing: border-box;
`;

const ModalContent = styled.div`
  background: white;
  padding: 24px;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  max-height: 90vh;
  overflow-y: auto;
  position: relative;

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  color: #666;

  &:hover {
    color: #333;
  }
`;

const TimeSlot = styled.button`
  padding: 8px 12px;
  margin: 4px;
  border: 1px solid #ddd;
  background: ${(props) => (props.selected ? "#3498db" : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 80px;
  font-size: 14px;

  &:hover {
    background: ${(props) => (props.selected ? "#2980b9" : "#f5f5f5")};
  }

  @media (max-width: 480px) {
    padding: 6px 8px;
    min-width: 70px;
    font-size: 13px;
  }
`;

const SubmitButton = styled.button`
  background: #3498db;
  color: white;
  border: none;
  padding: 12px 20px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  transition: background 0.3s;
  font-weight: 500;

  &:hover {
    background: #2980b9;
  }

  &:disabled {
    background: #95a5a6;
    cursor: not-allowed;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    border-color: #3498db;
    outline: none;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }

  @media (max-width: 480px) {
    padding: 8px 10px;
    font-size: 15px;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
  min-height: 100px;
  resize: vertical;

  &:focus {
    border-color: #3498db;
    outline: none;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }

  @media (max-width: 480px) {
    padding: 8px 10px;
    font-size: 15px;
    min-height: 80px;
  }
`;

const DatePickerContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 8px;
  padding: 8px 0;
  margin-bottom: 16px;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 2px;
  }
`;

const TimeSlotsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

const AppointmentModal = ({ doctor, onClose, onSubmit }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [notes, setNotes] = useState("");

  // Generate time slots (every 30 minutes from 9AM to 5PM)
  const timeSlots = [];
  for (let hour = 9; hour <= 17; hour++) {
    timeSlots.push(`${hour}:00`);
    if (hour < 17) timeSlots.push(`${hour}:30`);
  }

  // Generate available dates (next 7 days)
  const availableDates = [];
  for (let i = 0; i < 7; i++) {
    availableDates.push(addDays(new Date(), i));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointment = {
      doctorId: doctor.id,
      doctorName: doctor.name,
      date: selectedDate,
      time: selectedTime,
      patientName,
      patientPhone,
      notes,
      createdAt: new Date(),
    };
    onSubmit(appointment);
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose} aria-label="Close modal">
          ×
        </CloseButton>
        <h2 style={{ marginBottom: "8px", fontSize: "22px" }}>
          Book Appointment with Dr. {doctor.name}
        </h2>
        <p style={{ color: "#666", marginBottom: "20px" }}>
          Specialization: {doctor.specialization}
        </p>

        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel>Select Date</FormLabel>
            <DatePickerContainer>
              {availableDates.map((date) => (
                <TimeSlot
                  key={date.toString()}
                  selected={
                    format(date, "yyyy-MM-dd") ===
                    format(selectedDate, "yyyy-MM-dd")
                  }
                  onClick={() => setSelectedDate(date)}
                  type="button"
                >
                  {format(date, "EEE, MMM d")}
                </TimeSlot>
              ))}
            </DatePickerContainer>
          </FormGroup>

          <FormGroup>
            <FormLabel>Select Time Slot</FormLabel>
            <TimeSlotsContainer>
              {timeSlots.map((time) => (
                <TimeSlot
                  key={time}
                  selected={time === selectedTime}
                  onClick={() => setSelectedTime(time)}
                  type="button"
                >
                  {time}
                </TimeSlot>
              ))}
            </TimeSlotsContainer>
          </FormGroup>

          <FormGroup>
            <FormLabel>Full Name</FormLabel>
            <FormInput
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
              placeholder="Enter your full name"
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Phone Number</FormLabel>
            <FormInput
              type="tel"
              value={patientPhone}
              onChange={(e) => setPatientPhone(e.target.value)}
              required
              placeholder="Enter your phone number"
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Notes (Optional)</FormLabel>
            <FormTextarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any special requirements or notes"
            />
          </FormGroup>

          <SubmitButton
            type="submit"
            disabled={!selectedTime || !patientName || !patientPhone}
          >
            Confirm Appointment
          </SubmitButton>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AppointmentModal;
