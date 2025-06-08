import React, { useState } from "react";
import styled from "styled-components";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaStar,
  FaProcedures,
  FaAmbulance,
  FaPhoneAlt,
} from "react-icons/fa";

const HospitalsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");

  // Hospital data
  const hospitals = [
    {
      id: 1,
      name: "Apollo Hospitals",
      city: "Delhi",
      specialties: ["Cardiology", "Neurology", "Orthopedics"],
      rating: 4.8,
      beds: 750,
      emergency: true,
      contact: "011-2323 2323",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Fortis Hospital",
      city: "Mumbai",
      specialties: ["Oncology", "Pediatrics", "General Surgery"],
      rating: 4.6,
      beds: 500,
      emergency: true,
      contact: "022-6767 6767",
      image:
        "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Manipal Hospitals",
      city: "Bangalore",
      specialties: ["Cardiology", "Nephrology", "Urology"],
      rating: 4.7,
      beds: 600,
      emergency: true,
      contact: "080-2525 2525",
      image:
        "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "Medanta - The Medicity",
      city: "Gurgaon",
      specialties: ["Cardiac Surgery", "Neurosurgery", "Transplant"],
      rating: 4.9,
      beds: 1250,
      emergency: true,
      contact: "0124-4141 414",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 5,
      name: "AIIMS Hospital",
      city: "Delhi",
      specialties: ["Research", "Trauma Care", "Pediatrics"],
      rating: 4.5,
      beds: 2300,
      emergency: true,
      contact: "011-2658 8585",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 6,
      name: "KIMS Hospitals",
      city: "Hyderabad",
      specialties: ["Cardiology", "Orthopedics", "Neurology"],
      rating: 4.6,
      beds: 1000,
      emergency: true,
      contact: "040-4488 5000",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 7,
      name: "Max Super Speciality Hospital",
      city: "Delhi",
      specialties: ["Cardiology", "Oncology", "Neurology"],
      rating: 4.7,
      beds: 800,
      emergency: true,
      contact: "011-4055 4055",
      image:
        "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 8,
      name: "Narayana Health",
      city: "Bangalore",
      specialties: ["Cardiac Surgery", "Neurosurgery", "Pediatrics"],
      rating: 4.6,
      beds: 1500,
      emergency: true,
      contact: "080-2222 2222",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 9,
      name: "Kokilaben Dhirubhai Ambani Hospital",
      city: "Mumbai",
      specialties: ["Oncology", "Robotic Surgery", "Transplant"],
      rating: 4.8,
      beds: 750,
      emergency: true,
      contact: "022-3099 9999",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 10,
      name: "Artemis Hospitals",
      city: "Gurgaon",
      specialties: ["Cardiology", "Orthopedics", "Neurology"],
      rating: 4.5,
      beds: 600,
      emergency: true,
      contact: "0124-6767 676",
      image:
        "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 11,
      name: "Ruby Hall Clinic",
      city: "Pune",
      specialties: ["Cardiology", "Oncology", "Neurology"],
      rating: 4.4,
      beds: 900,
      emergency: true,
      contact: "020-6645 4545",
      image:
        "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 12,
      name: "Jaslok Hospital",
      city: "Mumbai",
      specialties: ["Endocrinology", "Gastroenterology", "Rheumatology"],
      rating: 4.6,
      beds: 550,
      emergency: true,
      contact: "022-6657 3333",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 13,
      name: "Lilavati Hospital",
      city: "Mumbai",
      specialties: ["Cardiology", "Neurology", "Orthopedics"],
      rating: 4.7,
      beds: 850,
      emergency: true,
      contact: "022-2675 1000",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 14,
      name: "Columbia Asia Hospital",
      city: "Bangalore",
      specialties: ["General Surgery", "Pediatrics", "Urology"],
      rating: 4.3,
      beds: 450,
      emergency: true,
      contact: "080-2222 1111",
      image:
        "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 15,
      name: "Global Hospitals",
      city: "Hyderabad",
      specialties: ["Liver Transplant", "Gastroenterology", "Nephrology"],
      rating: 4.5,
      beds: 750,
      emergency: true,
      contact: "040-3024 4444",
      image:
        "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 16,
      name: "Sir Ganga Ram Hospital",
      city: "Delhi",
      specialties: ["Cardiology", "Neurology", "Nephrology"],
      rating: 4.6,
      beds: 675,
      emergency: true,
      contact: "011-4225 2222",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 17,
      name: "Breach Candy Hospital",
      city: "Mumbai",
      specialties: ["Obstetrics", "Gynecology", "Pediatrics"],
      rating: 4.8,
      beds: 350,
      emergency: true,
      contact: "022-2367 1888",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 18,
      name: "Christian Medical College",
      city: "Vellore",
      specialties: ["Research", "Trauma Care", "Transplant"],
      rating: 4.7,
      beds: 2800,
      emergency: true,
      contact: "0416-228 3000",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 19,
      name: "PSG Hospitals",
      city: "Coimbatore",
      specialties: ["Cardiology", "Neurology", "Orthopedics"],
      rating: 4.5,
      beds: 1200,
      emergency: true,
      contact: "0422-257 0170",
      image:
        "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 20,
      name: "Amrita Institute of Medical Sciences",
      city: "Kochi",
      specialties: ["Neurosurgery", "Cardiac Surgery", "Oncology"],
      rating: 4.7,
      beds: 1300,
      emergency: true,
      contact: "0484-285 1234",
      image:
        "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 21,
      name: "Sahyadri Hospitals",
      city: "Pune",
      specialties: ["Cardiology", "Neurology", "Orthopedics"],
      rating: 4.4,
      beds: 900,
      emergency: true,
      contact: "020-6720 0000",
      image:
        "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 22,
      name: "Yashoda Hospitals",
      city: "Hyderabad",
      specialties: ["Oncology", "Cardiology", "Neurology"],
      rating: 4.6,
      beds: 1100,
      emergency: true,
      contact: "040-2455 5555",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 23,
      name: "BLK Super Speciality Hospital",
      city: "Delhi",
      specialties: ["Cardiac Surgery", "Neurosurgery", "Transplant"],
      rating: 4.7,
      beds: 650,
      emergency: true,
      contact: "011-3040 3040",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 24,
      name: "Wockhardt Hospitals",
      city: "Mumbai",
      specialties: ["Cardiology", "Neurology", "Orthopedics"],
      rating: 4.5,
      beds: 350,
      emergency: true,
      contact: "022-6178 4444",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 25,
      name: "Sterling Hospitals",
      city: "Ahmedabad",
      specialties: ["Cardiology", "Neurology", "Orthopedics"],
      rating: 4.4,
      beds: 500,
      emergency: true,
      contact: "079-4020 3000",
      image:
        "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 26,
      name: "Care Hospitals",
      city: "Hyderabad",
      specialties: ["Cardiology", "Neurology", "Nephrology"],
      rating: 4.5,
      beds: 800,
      emergency: true,
      contact: "040-3041 8888",
      image:
        "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
  ];

  // All available specialties
  const allSpecialties = Array.from(
    new Set(hospitals.flatMap((hospital) => hospital.specialties))
  );

  // All available cities
  const allCities = Array.from(
    new Set(hospitals.map((hospital) => hospital.city))
  );

  // Filter hospitals based on search and selections
  const filteredHospitals = hospitals.filter((hospital) => {
    const matchesSearch = hospital.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === "all" ||
      hospital.specialties.includes(selectedSpecialty);
    const matchesCity =
      selectedCity === "all" || hospital.city === selectedCity;

    return matchesSearch && matchesSpecialty && matchesCity;
  });

  return (
    <PageContainer>
      <PageHeader>
        <h1>Find Hospitals Near You</h1>
        <p>Browse our network of trusted healthcare providers</p>
      </PageHeader>

      <SearchFilters>
        <SearchBox>
          <FaSearch
            style={{
              background: "transparent",
              color: "grey",
              padding: "0.5rem",
              borderRadius: "0",
            }}
            size={40}
          />
          <input
            type="text"
            placeholder="Search hospitals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBox>

        <FilterGroup>
          <FilterDropdown>
            <label>Specialty:</label>
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
            >
              <option value="all">All Specialties</option>
              {allSpecialties.map((specialty, index) => (
                <option key={index} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
          </FilterDropdown>

          <FilterDropdown>
            <label>City:</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="all">All Cities</option>
              {allCities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </FilterDropdown>
        </FilterGroup>
      </SearchFilters>

      <HospitalsGrid>
        {filteredHospitals.length > 0 ? (
          filteredHospitals.map((hospital) => (
            <HospitalCard key={hospital.id}>
              <HospitalImage src={hospital.image} alt={hospital.name} />
              <HospitalInfo>
                <HospitalName>{hospital.name}</HospitalName>
                <HospitalLocation>
                  <FaMapMarkerAlt
                    style={{
                      background: "transparent",
                      color: "teal",
                      padding: "0.5rem",
                      borderRadius: "0",
                    }}
                    size={40}
                  />
                  <span>{hospital.city}</span>
                </HospitalLocation>

                <HospitalSpecialties>
                  {hospital.specialties.map((specialty, index) => (
                    <SpecialtyTag key={index}>{specialty}</SpecialtyTag>
                  ))}
                </HospitalSpecialties>

                <HospitalDetails>
                  <DetailItem>
                    <FaStar
                      color="#FFD700"
                      style={{
                        background: "transparent",
                        padding: "0.5rem",
                        borderRadius: "0",
                      }}
                      size={35}
                    />
                    <span>{hospital.rating}</span>
                  </DetailItem>
                  <DetailItem>
                    <FaProcedures
                      style={{
                        background: "transparent",
                        color: "#4CAF50",
                        padding: "0.5rem",
                        borderRadius: "0",
                      }}
                      size={35}
                    />
                    <span>{hospital.beds} beds</span>
                  </DetailItem>
                  <DetailItem>
                    <FaAmbulance
                      color={hospital.emergency ? "#FF0000" : "#999"}
                      style={{
                        background: "transparent",
                        padding: "0.5rem",
                        borderRadius: "0",
                      }}
                      size={35}
                    />
                    <span>
                      {hospital.emergency ? "24/7 Emergency" : "No Emergency"}
                    </span>
                  </DetailItem>
                </HospitalDetails>

                <ContactButton>
                  <FaPhoneAlt />
                  <span>{hospital.contact}</span>
                </ContactButton>
              </HospitalInfo>
            </HospitalCard>
          ))
        ) : (
          <NoResults>
            <p>No hospitals found matching your criteria</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedSpecialty("all");
                setSelectedCity("all");
              }}
            >
              Reset Filters
            </button>
          </NoResults>
        )}
      </HospitalsGrid>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    color: #1e88e5;
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 1.1rem;
  }
`;

const SearchFilters = styled.div`
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;

  input {
    border: none;
    background: transparent;
    padding: 0.5rem;
    width: 100%;
    font-size: 1rem;
    outline: none;
  }

  svg {
    color: #64748b;
    margin-right: 0.5rem;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const FilterDropdown = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  label {
    font-weight: 500;
  }

  select {
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ddd;
    background: white;
    min-width: 200px;
  }
`;

const HospitalsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const HospitalCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const HospitalImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const HospitalInfo = styled.div`
  padding: 1.5rem;
`;

const HospitalName = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #1e88e5;
  font-size: 1.3rem;
`;

const HospitalLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const HospitalSpecialties = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const SpecialtyTag = styled.span`
  background: #e3f2fd;
  color: #1e88e5;
  padding: 0.3rem 0.6rem;
  border-radius: 20px;
  font-size: 0.8rem;
`;

const HospitalDetails = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 1.5rem 0;
  flex-wrap: wrap;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #555;
`;

const ContactButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #1e88e5;
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #1565c0;
  }
`;

const NoResults = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem;
  background: #f8fafc;
  border-radius: 8px;

  p {
    color: #666;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  button {
    background: #1e88e5;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: #1565c0;
    }
  }
`;

export default HospitalsPage;
