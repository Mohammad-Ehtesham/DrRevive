import React, { useState } from "react";
import styled from "styled-components";
import DoctorCard from "./Doctorcard"; // Adjust the path as necessary
import AppointmentModal from "./AppointmentModal"; // Adjust the path as necessary
import homeIcon from "../../assets/Logo.png"; // Import your home icon image
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

// Styled components
const SearchContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 0 20px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  border: 2px solid #e0e0e0;
  border-radius: 30px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }
`;

const SearchButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #7f8c8d;
`;

function Doc() {
  // Sample data for multiple doctors
  const [doctorsData] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      designation: "Senior Consultant",
      specialization: "Cardiology",
      fee: 120,
      experience: 15,
      imageUrl:
        "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      designation: "Pediatric Specialist",
      specialization: "Pediatrics",
      fee: 90,
      experience: 8,
      imageUrl:
        "https://media.istockphoto.com/id/1372002650/photo/cropped-portrait-of-an-attractive-young-female-doctor-standing-with-her-arms-folded-in-the.jpg?s=612x612&w=0&k=20&c=o1QtStNsowOU0HSof6xQ_jZMglU8ZK565gHd655U6S4=",
    },
    {
      id: 3,
      name: "Priya Patel",
      designation: "Neurologist",
      specialization: "Neurology",
      fee: 150,
      experience: 12,
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
    },
    {
      id: 4,
      name: "Robert Williams",
      designation: "General Physician",
      specialization: "Family Medicine",
      fee: 80,
      experience: 10,
      imageUrl: "https://example.com/doctor4.jpg",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleBookAppointment = (doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  const handleSubmitAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
    setShowModal(false);
    alert(
      `Appointment booked with Dr. ${appointment.doctorName} on ${
        (appointment.date, "MMM d, yyyy")
      } at ${appointment.time}`
    );
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setFilteredDoctors(doctorsData);
      return;
    }

    const results = doctorsData.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredDoctors(results);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <HomeButtonContainer>
        <HomeButton onClick={() => navigate("/")}>
          <HomeIcon src={homeIcon} alt="Home" />
        </HomeButton>
      </HomeButtonContainer>

      <PageTitle>Our Specialist Doctors</PageTitle>

      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search by doctor name or specialization..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        {/* <SearchButton onClick={handleSearch}>Search</SearchButton> */}
      </SearchContainer>

      {filteredDoctors.length > 0 ? (
        <DoctorsContainer>
          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBookAppointment={handleBookAppointment}
            />
          ))}
        </DoctorsContainer>
      ) : (
        <NoResults>
          No doctors found matching your search. Please try different terms.
        </NoResults>
      )}
      {showModal && (
        <AppointmentModal
          doctor={selectedDoctor}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmitAppointment}
        />
      )}
    </div>
  );
}

const HomeButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
`;

const HomeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: #f0f0f0;
    transform: scale(1.1);
  }
`;

const HomeIcon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

// Reuse these styled components from previous implementation
const PageTitle = styled.h1`
  text-align: center;
  color: #2c3e50;
  margin: 30px 0;
  font-size: 2rem;
`;

const DoctorsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
  }
`;

export default Doc;
