import React, { useState } from "react";
import styled from "styled-components";
import {
  FaFileMedical,
  FaSearch,
  FaDownload,
  FaPrint,
  FaShare,
  FaCalendarAlt,
  FaUserMd,
} from "react-icons/fa";
// import { grey } from "@mui/material/colors";

const MedicalReportsPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Sample medical report data
  const reports = [
    {
      id: 1,
      title: "Annual Physical Exam",
      date: "2023-05-15",
      doctor: "Dr. Sarah Johnson",
      type: "checkup",
      summary:
        "Normal results, cholesterol slightly elevated. Recommended: follow-up in 6 months.",
    },
    {
      id: 2,
      title: "Blood Test Results",
      date: "2023-03-10",
      doctor: "Dr. Michael Chen",
      type: "lab",
      summary:
        "Complete blood count within normal ranges. Vitamin D levels low.",
    },
    {
      id: 3,
      title: "X-Ray Report - Right Knee",
      date: "2023-01-22",
      doctor: "Dr. Emily Rodriguez",
      type: "imaging",
      summary: "No fractures detected. Mild arthritis present in joint.",
    },
  ];

  // Filter reports based on search and active tab
  const filteredReports = reports.filter((report) => {
    const matchesSearch =
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.doctor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === "all" || report.type === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <ReportsContainer>
      <Header>
        <h1>
          <FaFileMedical
            style={{
              background: "transparent",
              color: "grey",
              padding: "0.5rem",
              borderRadius: "0",
            }}
            size={50}
          />
          Medical Reports
        </h1>
        <p>View and manage your health records</p>
      </Header>

      <Controls>
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
            placeholder="Search reports..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBox>

        <FilterTabs>
          <TabButton
            active={activeTab === "all"}
            onClick={() => setActiveTab("all")}
          >
            All Reports
          </TabButton>
          <TabButton
            active={activeTab === "checkup"}
            onClick={() => setActiveTab("checkup")}
          >
            Checkups
          </TabButton>
          <TabButton
            active={activeTab === "lab"}
            onClick={() => setActiveTab("lab")}
          >
            Lab Results
          </TabButton>
          <TabButton
            active={activeTab === "imaging"}
            onClick={() => setActiveTab("imaging")}
          >
            Imaging
          </TabButton>
        </FilterTabs>
      </Controls>

      <ReportsList>
        {filteredReports.length > 0 ? (
          filteredReports.map((report) => (
            <ReportCard key={report.id}>
              <ReportHeader>
                <h3>{report.title}</h3>
                <ReportActions>
                  <button>
                    <FaDownload
                      style={{
                        background: "transparent",
                        color: "grey",
                        padding: "0.5rem",
                        borderRadius: "0",
                      }}
                      size={30}
                    />{" "}
                    Download
                  </button>
                  <button>
                    <FaPrint
                      style={{
                        background: "transparent",
                        color: "grey",
                        padding: "0.5rem",
                        borderRadius: "0",
                      }}
                      size={30}
                    />{" "}
                    Print
                  </button>
                  <button>
                    <FaShare
                      style={{
                        background: "transparent",
                        color: "grey",
                        padding: "0.5rem",
                        borderRadius: "0",
                      }}
                      size={30}
                    />{" "}
                    Share
                  </button>
                </ReportActions>
              </ReportHeader>

              <ReportDetails>
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
                  <span>{new Date(report.date).toLocaleDateString()}</span>
                </DetailItem>
                <DetailItem>
                  <FaUserMd
                    style={{
                      background: "transparent",
                      color: "grey",
                      padding: "0.5rem",
                      borderRadius: "0",
                    }}
                    size={40}
                  />
                  <span>{report.doctor}</span>
                </DetailItem>
              </ReportDetails>

              <ReportSummary>
                <h4>Summary:</h4>
                <p>{report.summary}</p>
              </ReportSummary>

              <ViewFullButton>View Full Report</ViewFullButton>
            </ReportCard>
          ))
        ) : (
          <NoResults>No reports found matching your criteria.</NoResults>
        )}
      </ReportsList>
    </ReportsContainer>
  );
};

// Styled Components
const ReportsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #333;
`;

const Header = styled.div`
  margin-bottom: 2rem;

  h1 {
    color: #1e88e5;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 2rem;
  }

  p {
    color: #666;
  }
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: #f5f5f5;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;

  input {
    border: none;
    background: transparent;
    padding: 0.5rem;
    width: 100%;
    font-size: 1rem;
    outline: none;
  }
`;

const FilterTabs = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const TabButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  background: ${(props) => (props.active ? "#1e88e5" : "#f0f0f0")};
  color: ${(props) => (props.active ? "white" : "#333")};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${(props) => (props.active ? "#1565c0" : "#e0e0e0")};
  }
`;

const ReportsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ReportCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ReportHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h3 {
    color: #1e88e5;
    margin: 0;
  }
`;

const ReportActions = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    background: #f5f5f5;
    border: none;
    padding: 0.3rem 0.8rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: #e0e0e0;
    }
  }
`;

const ReportDetails = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  color: #666;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ReportSummary = styled.div`
  margin-bottom: 1.5rem;

  h4 {
    margin: 0 0 0.5rem 0;
    color: #444;
  }

  p {
    margin: 0;
    line-height: 1.5;
  }
`;

const ViewFullButton = styled.button`
  background: #1e88e5;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #1565c0;
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
  background: #f9f9f9;
  border-radius: 8px;
`;

export default MedicalReportsPage;
