import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

// Styled Components
const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1e88e5, #0d47a1);
  color: white;
  padding: 60px 20px;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2.5rem;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto 30px;
  }

  @media (max-width: 768px) {
    padding: 40px 15px;

    h1 {
      font-size: 2rem;
    }
  }
`;

const PackageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  margin: 40px 0;
`;

const PackageCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  &.popular {
    border: 2px solid #ff9800;
    position: relative;

    &::before {
      content: "Most Popular";
      position: absolute;
      top: 10px;
      right: 10px;
      background: #ff9800;
      color: white;
      padding: 3px 10px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: bold;
    }
  }
`;

const PackageHeader = styled.div`
  background: ${(props) => props.color || "#f5f5f5"};
  color: ${(props) => props.textColor || "#333"};
  padding: 20px;
  text-align: center;

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  .price {
    font-size: 2rem;
    font-weight: bold;
    margin: 10px 0;
  }
`;

const PackageBody = styled.div`
  padding: 20px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 20px;

    li {
      padding: 8px 0;
      border-bottom: 1px dashed #eee;
      display: flex;
      align-items: center;

      &::before {
        content: "✓";
        color: #4caf50;
        margin-right: 10px;
        font-weight: bold;
      }
    }
  }
`;

const BookButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #1e88e5;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #1565c0;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin: 50px 0 30px;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    background: #1e88e5;
    margin: 15px auto 0;
  }
`;

// Health Checkups Page Component
const HealthCheckups = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 1,
      name: "Basic Wellness",
      price: 999,
      color: "#e3f2fd",
      textColor: "#0d47a1",
      tests: [
        "Complete Blood Count (CBC)",
        "Blood Sugar (Fasting)",
        "Lipid Profile",
        "Liver Function Test",
        "Urine Routine",
        "Doctor Consultation",
      ],
      popular: false,
    },
    {
      id: 2,
      name: "Advanced Full Body",
      price: 2499,
      color: "#bbdefb",
      textColor: "#0d47a1",
      tests: [
        "All Basic Wellness Tests",
        "Thyroid Profile",
        "Kidney Function Test",
        "ECG",
        "Chest X-Ray",
        "Vitamin D & B12",
        "Doctor Consultation",
      ],
      popular: true,
    },
    {
      id: 3,
      name: "Women's Health",
      price: 3499,
      color: "#fce4ec",
      textColor: "#ad1457",
      tests: [
        "All Advanced Tests",
        "Pap Smear",
        "Breast Ultrasound",
        "Bone Density",
        "CA-125 (Ovarian Cancer)",
        "Gynecologist Consultation",
      ],
      popular: false,
    },
  ];

  const handleBookNow = (pkg) => {
    setSelectedPackage(pkg);
    // Navigate to booking page or open modal
    navigate("/book-checkup", { state: { package: pkg } });
  };

  return (
    <>
      <Navbar />
      <PageContainer>
        <HeroSection>
          <h1>Comprehensive Health Checkups</h1>
          <p>
            Early detection leads to better outcomes. Choose from our range of
            preventive health packages designed by medical experts.
          </p>
        </HeroSection>

        <SectionTitle>Our Checkup Packages</SectionTitle>
        <PackageGrid>
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} className={pkg.popular ? "popular" : ""}>
              <PackageHeader color={pkg.color} textColor={pkg.textColor}>
                <h3>{pkg.name}</h3>
                <div className="price">₹{pkg.price}</div>
                <div>+ Free Doctor Consultation</div>
              </PackageHeader>
              <PackageBody>
                <ul>
                  {pkg.tests.map((test, index) => (
                    <li key={index}>{test}</li>
                  ))}
                </ul>
                <BookButton onClick={() => handleBookNow(pkg)}>
                  Book Now
                </BookButton>
              </PackageBody>
            </PackageCard>
          ))}
        </PackageGrid>

        <SectionTitle>Why Regular Health Checkups?</SectionTitle>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <p style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
            Preventive healthcare can identify potential issues before they
            become serious. Our packages are designed to give you a complete
            picture of your health status, with accurate results and expert
            interpretation. Early detection of conditions like diabetes,
            hypertension, and cholesterol imbalances can significantly improve
            treatment outcomes.
          </p>
        </div>

        <SectionTitle>How It Works</SectionTitle>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginBottom: "50px",
          }}
        >
          {[
            {
              icon: "📅",
              title: "Book Online",
              desc: "Select package & schedule",
            },
            {
              icon: "💉",
              title: "Sample Collection",
              desc: "At lab or your home",
            },
            { icon: "📊", title: "Get Reports", desc: "Within 24-48 hours" },
            {
              icon: "👨‍⚕️",
              title: "Doctor Consultation",
              desc: "Free report analysis",
            },
          ].map((step, index) => (
            <div
              key={index}
              style={{
                textAlign: "center",
                padding: "20px",
                flex: "1",
                minWidth: "200px",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                {step.icon}
              </div>
              <h3 style={{ marginBottom: "10px" }}>{step.title}</h3>
              <p style={{ color: "#666" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </PageContainer>
    </>
  );
};

export default HealthCheckups;
