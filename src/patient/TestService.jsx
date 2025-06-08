import React, { useState } from "react";
import styled from "styled-components";
import {
  FaFlask,
  FaXRay,
  FaHeartbeat,
  FaSearch,
  FaFilter,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const TestsServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Test and service data
  const medicalServices = [
    {
      id: 1,
      name: "Complete Blood Count (CBC)",
      category: "lab",
      description:
        "Measures various components of your blood including red and white blood cells.",
      duration: "15-30 mins",
      preparation: "Fasting required for 8 hours",
      price: "₹4,092",
      available: ["Mon-Fri: 7am-7pm", "Sat: 8am-4pm"],
    },
    {
      id: 2,
      name: "Comprehensive Metabolic Panel",
      category: "lab",
      description: "Evaluates kidney function, electrolyte levels, and more.",
      duration: "20 mins",
      preparation: "Fasting required for 10-12 hours",
      price: "₹6,597",
      available: ["Mon-Fri: 6am-6pm"],
    },
    {
      id: 3,
      name: "Chest X-Ray",
      category: "imaging",
      description: "Standard imaging test to examine your chest and lungs.",
      duration: "10 mins",
      preparation: "Remove jewelry, wear loose clothing",
      price: "₹10,020",
      available: ["Mon-Sun: 24/7"],
    },
    {
      id: 4,
      name: "ECG/EKG",
      category: "cardiac",
      description: "Records the electrical activity of your heart.",
      duration: "15 mins",
      preparation: "None",
      price: "₹7,432",
      available: ["Mon-Fri: 8am-8pm", "Sat-Sun: 9am-5pm"],
    },
    {
      id: 5,
      name: "MRI Scan",
      category: "imaging",
      description:
        "Detailed images of organs and tissues using magnetic fields.",
      duration: "30-60 mins",
      preparation: "Remove all metal objects",
      price: "₹37,575",
      available: ["By appointment"],
    },
    {
      id: 6,
      name: "Thyroid Function Test",
      category: "lab",
      description: "Measures how well your thyroid gland is working.",
      duration: "15 mins",
      preparation: "May need to stop certain medications",
      price: "₹5,428",
      available: ["Mon-Fri: 7am-5pm"],
    },
    {
      id: 7,
      name: "Lipid Profile",
      category: "lab",
      description:
        "Measures cholesterol and triglyceride levels to assess heart disease risk.",
      duration: "15 mins",
      preparation: "Fasting required for 12 hours",
      price: "₹4,927",
      available: ["Mon-Fri: 6am-4pm", "Sat: 8am-12pm"],
    },
    {
      id: 8,
      name: "Ultrasound Abdomen",
      category: "imaging",
      description:
        "Non-invasive imaging to examine abdominal organs like liver and kidneys.",
      duration: "30-45 mins",
      preparation: "Fasting required for 8 hours",
      price: "₹17,535",
      available: ["Mon-Fri: 8am-6pm", "Sat: 9am-2pm"],
    },
    {
      id: 9,
      name: "Thyroid Ultrasound",
      category: "imaging",
      description:
        "Imaging test to evaluate thyroid gland structure and detect abnormalities.",
      duration: "20-30 mins",
      preparation: "None",
      price: "₹15,030",
      available: ["Mon, Wed, Fri: 9am-5pm"],
    },
    {
      id: 10,
      name: "Hemoglobin A1C",
      category: "lab",
      description:
        "Measures average blood sugar levels over the past 3 months.",
      duration: "10 mins",
      preparation: "None",
      price: "₹3,758",
      available: ["Mon-Sun: 7am-7pm"],
    },
    {
      id: 11,
      name: "Stress Test",
      category: "cardiac",
      description: "Evaluates heart function during physical activity.",
      duration: "60 mins",
      preparation: "Wear comfortable clothing and shoes",
      price: "₹29,225",
      available: ["By appointment (Mon-Fri: 8am-4pm)"],
    },
    {
      id: 12,
      name: "Vitamin D Test",
      category: "lab",
      description: "Measures vitamin D levels to detect deficiency.",
      duration: "10 mins",
      preparation: "None",
      price: "₹5,428",
      available: ["Mon-Fri: 7am-7pm", "Sat: 8am-2pm"],
    },
  ];
  // Filter services based on search and selections
  const filteredServices = medicalServices.filter((service) => {
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || service.category === selectedCategory;
    const matchesFilter =
      selectedFilter === "all" ||
      (selectedFilter === "fasting" &&
        service.preparation.includes("Fasting")) ||
      (selectedFilter === "walkin" &&
        !service.available.includes("By appointment"));

    return matchesSearch && matchesCategory && matchesFilter;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case "lab":
        return <FaFlask />;
      case "imaging":
        return <FaXRay />;
      case "cardiac":
        return <FaHeartbeat />;
      default:
        return <FaFlask />;
    }
  };

  return (
    <PageContainer>
      <PageHeader>
        <h1>Tests & Services</h1>
        <p>Browse and book diagnostic tests and medical services</p>
      </PageHeader>

      <SearchFilterSection>
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
            placeholder="Search tests or services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBox>

        <FilterControls>
          <CategoryFilter>
            <label>
              <FaFilter
                style={{
                  background: "transparent",
                  color: "grey",
                  padding: "0.5rem",
                  borderRadius: "0",
                }}
                size={35}
              />{" "}
              Category:
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="lab">Lab Tests</option>
              <option value="imaging">Imaging</option>
              <option value="cardiac">Cardiac</option>
            </select>
          </CategoryFilter>

          <QuickFilter>
            <label>
              <FaFilter
                style={{
                  background: "transparent",
                  color: "grey",
                  padding: "0.5rem",
                  borderRadius: "0",
                }}
                size={35}
              />{" "}
              Filter:
            </label>
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="all">All Services</option>
              <option value="fasting">Fasting Required</option>
              <option value="walkin">Walk-In Available</option>
            </select>
          </QuickFilter>
        </FilterControls>
      </SearchFilterSection>

      <ServicesGrid>
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <ServiceCard key={service.id}>
              <ServiceHeader>
                <CategoryIcon category={service.category}>
                  {getCategoryIcon(service.category)}
                </CategoryIcon>
                <h3>{service.name}</h3>
              </ServiceHeader>

              <ServiceDescription>
                <p>{service.description}</p>
              </ServiceDescription>

              <ServiceDetails>
                <DetailItem>
                  <FaClock
                    style={{
                      background: "transparent",
                      color: "grey",
                      padding: "0.5rem",
                      borderRadius: "0",
                    }}
                    size={40}
                  />
                  <span>{service.duration}</span>
                </DetailItem>
                <DetailItem>
                  <FaCalendarAlt
                    style={{
                      background: "transparent",
                      color: "grey",
                      padding: "0.5rem",
                      borderRadius: "0",
                    }}
                    size={40}
                  />
                  <span>{service.available.join(", ")}</span>
                </DetailItem>
              </ServiceDetails>

              <PreparationInfo>
                <strong>Preparation:</strong> {service.preparation}
              </PreparationInfo>

              <PriceBookSection>
                <PriceTag>{service.price}</PriceTag>
                <BookButton>Book Now</BookButton>
              </PriceBookSection>
            </ServiceCard>
          ))
        ) : (
          <NoResults>
            <p>No services match your search criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedFilter("all");
              }}
            >
              Reset Filters
            </button>
          </NoResults>
        )}
      </ServicesGrid>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  color: #333;
`;

const PageHeader = styled.div`
  margin-bottom: 2rem;
  text-align: center;

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

const SearchFilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

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

const FilterControls = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const CategoryFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-weight: 500;
  }

  select {
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ddd;
    background: white;
  }
`;

const QuickFilter = styled(CategoryFilter)`
  // Inherits styles from CategoryFilter
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  h3 {
    margin: 0;
    color: #1e88e5;
    font-size: 1.3rem;
  }
`;

const CategoryIcon = styled.div`
  background: ${(props) =>
    props.category === "lab"
      ? "#e3f2fd"
      : props.category === "imaging"
      ? "#e8f5e9"
      : "#fce4ec"};
  color: ${(props) =>
    props.category === "lab"
      ? "#1565c0"
      : props.category === "imaging"
      ? "#2e7d32"
      : "#c2185b"};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const ServiceDescription = styled.div`
  margin-bottom: 1.2rem;

  p {
    margin: 0;
    color: #555;
    line-height: 1.5;
  }
`;

const ServiceDetails = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  color: #666;
  flex-wrap: wrap;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
`;

const PreparationInfo = styled.div`
  padding: 0.8rem;
  background: #fff8e1;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;

  strong {
    color: #ff8f00;
  }
`;

const PriceBookSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PriceTag = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2e7d32;
`;

const BookButton = styled.button`
  background: #1e88e5;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
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

export default TestsServicesPage;
