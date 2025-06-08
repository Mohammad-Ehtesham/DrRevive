import React, { useState } from "react";
import styled from "styled-components";
import {
  FaShieldAlt,
  FaHospital,
  FaListAlt,
  FaCheckCircle,
  FaSearch,
  FaHandHoldingMedical,
  FaRupeeSign,
  FaProcedures,
  FaUserFriends,
  FaClock,
  FaPercentage,
} from "react-icons/fa";
import { MdClose } from "react-icons/md";

const InsurancePage = () => {
  const [activeTab, setActiveTab] = useState("network");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Sample insurance data
  const myInsurancePlans = [
    {
      id: 1,
      provider: "HealthGuard Insurance",
      planName: "Gold Family Plan",
      policyNumber: "HG-789456123",
      coverage: "₹5,00,000/year",
      expiryDate: "2025-12-31",
      status: "active",
      coveredServices: ["Hospitalization", "OPD", "Dental", "Maternity"],
    },
    {
      id: 2,
      provider: "Star Health",
      planName: "Senior Citizen Care",
      policyNumber: "ST-321654987",
      coverage: "₹3,00,000/year",
      expiryDate: "2024-11-30",
      status: "active",
      coveredServices: ["Hospitalization", "OPD", "Chronic Illness"],
    },
  ];
  const networkProviders = [
    {
      id: 1,
      name: "Max Bupa Health Insurance",
      logo: "https://via.placeholder.com/150x50?text=Max+Bupa",
      cashlessHospitals: 5200,
      claimSettlement: 96.5,
      plans: [
        {
          name: "Health Companion",
          premium: "₹12,000/year",
          coverage: "₹5,00,000",
          features: [
            "Room rent limit: ₹5,000/day",
            "Pre/post hospitalization",
            "Day care procedures",
          ],
          waitingPeriod: "30 days",
          networkHospitals: "5,200+",
        },
        {
          name: "Family First",
          premium: "₹25,000/year",
          coverage: "₹10,00,000",
          features: [
            "Cover for 2 adults + 3 children",
            "Maternity cover",
            "Annual health checkup",
          ],
          waitingPeriod: "90 days (maternity)",
          networkHospitals: "5,200+",
        },
      ],
      contact: "1800-123-4567",
      website: "www.maxbupa.com",
    },
    {
      id: 2,
      name: "ICICI Lombard",
      logo: "https://via.placeholder.com/150x50?text=ICICI+Lombard",
      cashlessHospitals: 7800,
      claimSettlement: 94.2,
      plans: [
        {
          name: "Health Advantage Plus",
          premium: "₹15,000/year",
          coverage: "₹7,50,000",
          features: [
            "No room rent limit",
            "AYUSH treatment",
            "Global coverage",
          ],
          waitingPeriod: "30 days",
          networkHospitals: "7,800+",
        },
      ],
      contact: "1800-266-6666",
      website: "www.icicilombard.com",
    },
    {
      id: 3,
      name: "HDFC ERGO",
      logo: "https://via.placeholder.com/150x50?text=HDFC+ERGO",
      cashlessHospitals: 6500,
      claimSettlement: 95.8,
      plans: [
        {
          name: "Optima Restore",
          premium: "₹18,000/year",
          coverage: "₹10,00,000",
          features: [
            "Automatic recharge of sum insured",
            "No claim bonus",
            "Critical illness cover",
          ],
          waitingPeriod: "90 days (pre-existing)",
          networkHospitals: "6,500+",
        },
      ],
      contact: "1800-266-7766",
      website: "www.hdfcergo.com",
    },
    {
      id: 4,
      name: "Star Health Insurance",
      logo: "https://via.placeholder.com/150x50?text=Star+Health",
      cashlessHospitals: 9800,
      claimSettlement: 92.3,
      plans: [
        {
          name: "Comprehensive",
          premium: "₹9,500/year",
          coverage: "₹3,00,000",
          features: ["Diabetes cover", "Senior citizen focus", "OPD coverage"],
          waitingPeriod: "48 months (specific ailments)",
          networkHospitals: "9,800+",
        },
      ],
      contact: "1800-425-2255",
      website: "www.starhealth.in",
    },
    {
      id: 5,
      name: "Bajaj Allianz",
      logo: "https://via.placeholder.com/150x50?text=Bajaj+Allianz",
      cashlessHospitals: 6000,
      claimSettlement: 95.1,
      plans: [
        {
          name: "Health Guard",
          premium: "₹14,500/year",
          coverage: "₹5,00,000",
          features: ["Restore benefit", "Maternity cover", "Modern treatments"],
          waitingPeriod: "24 months (specific treatments)",
          networkHospitals: "6,000+",
        },
      ],
      contact: "1800-209-5858",
      website: "www.bajajallianz.com",
    },
    {
      id: 6,
      name: "New India Assurance",
      logo: "https://via.placeholder.com/150x50?text=New+India",
      cashlessHospitals: 4500,
      claimSettlement: 90.7,
      plans: [
        {
          name: "Medi Plus",
          premium: "₹8,000/year",
          coverage: "₹2,50,000",
          features: [
            "Government provider",
            "Low-cost option",
            "Basic coverage",
          ],
          waitingPeriod: "12 months",
          networkHospitals: "4,500+",
        },
      ],
      contact: "1800-209-1415",
      website: "www.newindia.co.in",
    },
    {
      id: 7,
      name: "Reliance General",
      logo: "https://via.placeholder.com/150x50?text=Reliance",
      cashlessHospitals: 5500,
      claimSettlement: 93.4,
      plans: [
        {
          name: "Health Gain",
          premium: "₹11,000/year",
          coverage: "₹4,00,000",
          features: [
            "Preventive health checkup",
            "Day care cover",
            "Domiciliary treatment",
          ],
          waitingPeriod: "36 months (certain conditions)",
          networkHospitals: "5,500+",
        },
      ],
      contact: "1800-3009-9090",
      website: "www.reliancegeneral.co.in",
    },
    {
      id: 8,
      name: "Aditya Birla Health",
      logo: "https://via.placeholder.com/150x50?text=Aditya+Birla",
      cashlessHospitals: 7000,
      claimSettlement: 96.0,
      plans: [
        {
          name: "Activ Health",
          premium: "₹20,000/year",
          coverage: "₹15,00,000",
          features: [
            "Rewards for healthy behavior",
            "Comprehensive coverage",
            "Wellness programs",
          ],
          waitingPeriod: "24 months",
          networkHospitals: "7,000+",
        },
      ],
      contact: "1800-270-7000",
      website: "www.adityabirlahealth.com",
    },
    {
      id: 9,
      name: "Kotak Mahindra",
      logo: "https://via.placeholder.com/150x50?text=Kotak",
      cashlessHospitals: 5000,
      claimSettlement: 94.8,
      plans: [
        {
          name: "Platinum Health",
          premium: "₹16,500/year",
          coverage: "₹8,00,000",
          features: [
            "Automatic restoration",
            "Critical illness rider",
            "Alternative treatments",
          ],
          waitingPeriod: "48 months (specific conditions)",
          networkHospitals: "5,000+",
        },
      ],
      contact: "1800-209-8800",
      website: "www.kotakgeneral.com",
    },
    {
      id: 10,
      name: "Care Health",
      logo: "https://via.placeholder.com/150x50?text=Care+Health",
      cashlessHospitals: 8500,
      claimSettlement: 95.3,
      plans: [
        {
          name: "Joy Today",
          premium: "₹13,000/year",
          coverage: "₹5,00,000",
          features: [
            "No pre-policy checkup",
            "OPD benefits",
            "Quick claim settlement",
          ],
          waitingPeriod: "12 months",
          networkHospitals: "8,500+",
        },
      ],
      contact: "1800-108-4400",
      website: "www.careinsurance.com",
    },
    {
      id: 11,
      name: "Niva Bupa (Formerly Max Bupa)",
      logo: "https://via.placeholder.com/150x50?text=Niva+Bupa",
      cashlessHospitals: 5800,
      claimSettlement: 96.2,
      plans: [
        {
          name: "ReAssure 2.0",
          premium: "₹22,000/year",
          coverage: "₹15,00,000",
          features: [
            "No claim bonus up to 100%",
            "Automatic recharge",
            "Global coverage",
          ],
          waitingPeriod: "36 months (pre-existing)",
          networkHospitals: "5,800+",
        },
      ],
      contact: "1800-102-4477",
      website: "www.nivabupa.com",
    },
    {
      id: 12,
      name: "ManipalCigna",
      logo: "https://via.placeholder.com/150x50?text=ManipalCigna",
      cashlessHospitals: 6200,
      claimSettlement: 95.5,
      plans: [
        {
          name: "ProHealth Plus",
          premium: "₹17,500/year",
          coverage: "₹10,00,000",
          features: [
            "Lifetime renewability",
            "Health coaching",
            "Second medical opinion",
          ],
          waitingPeriod: "48 months (certain ailments)",
          networkHospitals: "6,200+",
        },
      ],
      contact: "1800-209-5859",
      website: "www.manipalcigna.com",
    },
    {
      id: 13,
      name: "Oriental Insurance",
      logo: "https://via.placeholder.com/150x50?text=Oriental",
      cashlessHospitals: 4000,
      claimSettlement: 91.2,
      plans: [
        {
          name: "Medi Classic",
          premium: "₹7,500/year",
          coverage: "₹3,00,000",
          features: [
            "Government rates",
            "Basic hospitalization",
            "Wide network",
          ],
          waitingPeriod: "24 months",
          networkHospitals: "4,000+",
        },
      ],
      contact: "1800-113-456",
      website: "www.orientalinsurance.org.in",
    },
  ];

  const claimHistory = [
    {
      id: 1,
      date: "2023-05-15",
      provider: "HealthGuard",
      amount: "₹12,500",
      status: "approved",
      service: "Knee Surgery",
    },
    {
      id: 2,
      date: "2023-02-28",
      provider: "Star Health",
      amount: "₹3,200",
      status: "approved",
      service: "Dental Procedure",
    },
  ];

  const filteredProviders = networkProviders.filter((provider) =>
    provider.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <InsuranceContainer>
      <Header>
        <Title>
          <FaShieldAlt
            style={{
              background: "transparent",
              color: "#007BFF",
              padding: "0.5rem",
              borderRadius: "0",
            }}
            size={45}
          />
          <h1>Insurance Center</h1>
        </Title>
        <Subtitle>Manage your health coverage and claims</Subtitle>
      </Header>

      <Tabs>
        <TabButton
          $active={activeTab === "myPlans"}
          onClick={() => setActiveTab("myPlans")}
        >
          <FaListAlt
            style={{
              background: "transparent",
              color: "#8E44AD",
              padding: "0.5rem",
              borderRadius: "0",
            }}
            size={45}
          />{" "}
          My Plans
        </TabButton>
        <TabButton
          $active={activeTab === "network"}
          onClick={() => setActiveTab("network")}
        >
          <FaHospital
            style={{
              background: "transparent",
              color: "#87CEEB",
              padding: "0.5rem",
              borderRadius: "0",
            }}
            size={45}
          />{" "}
          Network Providers
        </TabButton>
        <TabButton
          $active={activeTab === "claims"}
          onClick={() => setActiveTab("claims")}
        >
          <FaCheckCircle
            style={{
              background: "transparent",
              color: "#8D6E63",
              padding: "0.5rem",
              borderRadius: "0",
            }}
            size={45}
          />{" "}
          Claim History
        </TabButton>
      </Tabs>

      {activeTab === "myPlans" && (
        <PlansSection>
          {myInsurancePlans.map((plan) => (
            <PlanCard key={plan.id}>
              <PlanHeader>
                <h3>{plan.provider}</h3>
                <StatusBadge status={plan.status}>
                  {plan.status.toUpperCase()}
                </StatusBadge>
              </PlanHeader>
              <PlanDetails>
                <DetailItem>
                  <strong>Plan:</strong> {plan.planName}
                </DetailItem>
                <DetailItem>
                  <strong>Policy #:</strong> {plan.policyNumber}
                </DetailItem>
                <DetailItem>
                  <strong>Coverage:</strong> {plan.coverage}
                </DetailItem>
                <DetailItem>
                  <strong>Expiry:</strong>{" "}
                  {new Date(plan.expiryDate).toLocaleDateString()}
                </DetailItem>
              </PlanDetails>
              <CoveredServices>
                <strong>Covered Services:</strong>
                <ServiceTags>
                  {plan.coveredServices.map((service, index) => (
                    <ServiceTag key={index}>{service}</ServiceTag>
                  ))}
                </ServiceTags>
              </CoveredServices>
              <PlanActions>
                <ActionButton primary>View Details</ActionButton>
                <ActionButton>Make Claim</ActionButton>
              </PlanActions>
            </PlanCard>
          ))}
          <AddPlanCard>
            <FaHandHoldingMedical
              size={40}
              style={{
                background: "transparent",
                color: "grey",
                padding: "0.5rem",
                borderRadius: "0",
              }}
            />
            <p>Add New Insurance Plan</p>
          </AddPlanCard>
        </PlansSection>
      )}

      {activeTab === "claims" && (
        <ClaimsSection>
          <ClaimsTable>
            <thead>
              <tr>
                <th>Date</th>
                <th>Provider</th>
                <th>Service</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {claimHistory.map((claim) => (
                <tr key={claim.id}>
                  <td>{new Date(claim.date).toLocaleDateString()}</td>
                  <td>{claim.provider}</td>
                  <td>{claim.service}</td>
                  <td>{claim.amount}</td>
                  <td>
                    <StatusBadge status={claim.status}>
                      {claim.status.toUpperCase()}
                    </StatusBadge>
                  </td>
                  <td>
                    <ActionButton small>Details</ActionButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </ClaimsTable>
          <NewClaimButton>
            <FaHandHoldingMedical /> Submit New Claim
          </NewClaimButton>
        </ClaimsSection>
      )}
      {activeTab === "network" && (
        <NetworkSection>
          <SearchBox>
            <FaSearch
              style={{
                background: "transparent",
                color: "grey",
                padding: "0.5rem",
                borderRadius: "0",
              }}
              size={45}
            />
            <input
              type="text"
              placeholder="Search insurance providers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchBox>

          <ProvidersGrid>
            {filteredProviders.map((provider) => (
              <ProviderCard key={provider.id}>
                <ProviderLogo src={provider.logo} alt={provider.name} />
                <ProviderInfo>
                  <h3>{provider.name}</h3>
                  <ProviderStats>
                    <StatItem>
                      <FaHospital
                        style={{
                          background: "transparent",
                          // color: "#81c784",
                          padding: "0.5rem",
                          borderRadius: "0",
                        }}
                        size={40}
                      />
                      <span>
                        {provider.cashlessHospitals.toLocaleString()}+ cashless
                        hospitals
                      </span>
                    </StatItem>
                    <StatItem>
                      <FaPercentage
                        style={{
                          background: "transparent",
                          // color: "#81c784",
                          padding: "0.5rem",
                          borderRadius: "0",
                        }}
                        size={40}
                      />
                      <span>
                        {provider.claimSettlement}% claim settlement ratio
                      </span>
                    </StatItem>
                  </ProviderStats>
                </ProviderInfo>
                <ViewPlansButton onClick={() => setSelectedProvider(provider)}>
                  View Plans
                </ViewPlansButton>
              </ProviderCard>
            ))}
          </ProvidersGrid>
        </NetworkSection>
      )}

      {/* Plan Details Modal */}
      {selectedProvider && (
        <ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              <h2>{selectedProvider.name} Health Plans</h2>
              <CloseButton
                onClick={() => {
                  setSelectedProvider(null);
                  setSelectedPlan(null);
                }}
              >
                <MdClose
                  style={{
                    background: "transparent",
                    color: "#DC3545",
                    padding: "0.5rem",
                    borderRadius: "0",
                  }}
                  size={40}
                />
              </CloseButton>
            </ModalHeader>

            {!selectedPlan ? (
              <>
                <ProviderContact>
                  <span>Contact: {selectedProvider.contact}</span>
                  <span>
                    Website:{" "}
                    <a
                      href={`https://${selectedProvider.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {selectedProvider.website}
                    </a>
                  </span>
                </ProviderContact>

                <PlansList>
                  {selectedProvider.plans.map((plan, index) => (
                    <PlanCard key={index} onClick={() => setSelectedPlan(plan)}>
                      <PlanName>{plan.name}</PlanName>
                      <PlanPrice>
                        <FaRupeeSign
                          style={{
                            background: "transparent",
                            color: "#2E7D32",
                            padding: "0.5rem",
                            borderRadius: "0",
                          }}
                          size={35}
                        />
                        <span>{plan.premium}</span>
                      </PlanPrice>
                      <PlanCoverage>
                        <FaShieldAlt
                          style={{
                            background: "transparent",
                            color: "#007BFF",
                            padding: "0.5rem",
                            borderRadius: "0",
                          }}
                          size={35}
                        />
                        <span>Coverage: {plan.coverage}</span>
                      </PlanCoverage>
                    </PlanCard>
                  ))}
                </PlansList>
              </>
            ) : (
              <PlanDetailsView>
                <BackButton onClick={() => setSelectedPlan(null)}>
                  ← Back to Plans
                </BackButton>

                <PlanHeader>
                  <h3>{selectedPlan.name}</h3>
                  <PlanPriceTag>
                    <FaRupeeSign
                      style={{
                        background: "transparent",
                        color: "#2E7D32",
                        padding: "0.5rem",
                        borderRadius: "0",
                      }}
                      size={35}
                    />{" "}
                    {selectedPlan.premium}
                  </PlanPriceTag>
                </PlanHeader>

                <PlanHighlights>
                  <HighlightItem>
                    <FaShieldAlt
                      style={{
                        background: "transparent",
                        color: "#007BFF",
                        padding: "0.5rem",
                        borderRadius: "0",
                      }}
                      size={35}
                    />
                    <span>
                      <strong>Coverage:</strong> {selectedPlan.coverage}
                    </span>
                  </HighlightItem>
                  <HighlightItem>
                    <FaProcedures
                      style={{
                        background: "transparent",
                        color: "#007BFF",
                        padding: "0.5rem",
                        borderRadius: "0",
                      }}
                      size={35}
                    />
                    <span>
                      <strong>Network Hospitals:</strong>{" "}
                      {selectedPlan.networkHospitals}
                    </span>
                  </HighlightItem>
                  <HighlightItem>
                    <FaClock
                      style={{
                        background: "transparent",
                        color: "#007BFF",
                        padding: "0.5rem",
                        borderRadius: "0",
                      }}
                      size={35}
                    />
                    <span>
                      <strong>Waiting Period:</strong>{" "}
                      {selectedPlan.waitingPeriod}
                    </span>
                  </HighlightItem>
                </PlanHighlights>

                <FeaturesSection>
                  <h4>Key Features:</h4>
                  <FeaturesList>
                    {selectedPlan.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </FeaturesList>
                </FeaturesSection>

                <ActionButtons>
                  <Button primary>Download Brochure</Button>
                  <Button>Apply Now</Button>
                </ActionButtons>
              </PlanDetailsView>
            )}
          </ModalContainer>
        </ModalOverlay>
      )}
    </InsuranceContainer>
  );
};

// Styled Components

// New Styled Components for Modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;

  h2 {
    margin: 0;
    color: #1e88e5;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  padding: 0.5rem;

  &:hover {
    color: #333;
  }
`;

const ProviderContact = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 4px;
  font-size: 0.9rem;

  a {
    color: #1e88e5;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const PlansList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

const PlanCard = styled.div`
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #1e88e5;
    background: #f5f9ff;
  }
`;

const PlanName = styled.h4`
  margin: 0 0 0.5rem 0;
  color: #333;
`;

const PlanPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2e7d32;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const PlanCoverage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #555;
  font-size: 0.9rem;
`;

const PlanDetailsView = styled.div``;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #1e88e5;
  cursor: pointer;
  padding: 0;
  margin-bottom: 1rem;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

const PlanHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;

  h3 {
    margin: 0;
    color: #333;
  }
`;

const PlanPriceTag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background: #e8f5e9;
  color: #2e7d32;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 500;
`;

const PlanHighlights = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const HighlightItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: #f5f5f5;
  border-radius: 4px;
  font-size: 0.9rem;

  svg {
    color: #1e88e5;
  }
`;

const FeaturesSection = styled.div`
  margin: 2rem 0;

  h4 {
    margin: 0 0 1rem 0;
    color: #333;
  }
`;

const FeaturesList = styled.ul`
  padding-left: 1.5rem;
  margin: 0;
  color: #555;

  li {
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: 1px solid ${(props) => (props.primary ? "#1e88e5" : "#ddd")};
  background: ${(props) => (props.primary ? "#1e88e5" : "white")};
  color: ${(props) => (props.primary ? "white" : "#333")};
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background: ${(props) => (props.primary ? "#1565c0" : "#f5f5f5")};
  }
`;

const InsuranceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Header = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 0.5rem;

  h1 {
    color: #1e88e5;
    margin: 0;
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 1.1rem;
`;

const Tabs = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #ddd;
`;

const TabButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  background: ${(props) => (props.active ? "#1e88e5" : "transparent")};
  color: ${(props) => (props.active ? "white" : "#666")};
  cursor: pointer;
  border-radius: 4px 4px 0 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background: ${(props) => (props.active ? "#1565c0" : "#f0f0f0")};
  }
`;

const PlansSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1.5rem;
`;

// const PlanCard = styled.div`
//   background: white;
//   border-radius: 8px;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//   padding: 1.5rem;
// `;

// const PlanHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 1rem;

//   h3 {
//     margin: 0;
//     color: #333;
//   }
// `;

const StatusBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${(props) =>
    props.status === "active" || props.status === "approved"
      ? "#e8f5e9"
      : "#ffebee"};
  color: ${(props) =>
    props.status === "active" || props.status === "approved"
      ? "#2e7d32"
      : "#c62828"};
`;

const PlanDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const DetailItem = styled.div`
  font-size: 0.9rem;
  color: #555;
`;

const CoveredServices = styled.div`
  margin: 1.5rem 0;

  strong {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
  }
`;

const ServiceTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ServiceTag = styled.span`
  background: #e3f2fd;
  color: #1565c0;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
`;

const PlanActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const ActionButton = styled.button`
  padding: ${(props) => (props.small ? "0.25rem 0.75rem" : "0.5rem 1rem")};
  border: 1px solid ${(props) => (props.primary ? "#1e88e5" : "#ddd")};
  background: ${(props) => (props.primary ? "#1e88e5" : "white")};
  color: ${(props) => (props.primary ? "white" : "#333")};
  border-radius: 4px;
  cursor: pointer;
  font-size: ${(props) => (props.small ? "0.8rem" : "0.9rem")};
  transition: all 0.2s;

  &:hover {
    background: ${(props) => (props.primary ? "#1565c0" : "#f5f5f5")};
  }
`;

const AddPlanCard = styled.div`
  background: white;
  border: 2px dashed #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.2s;
  color: #666;

  &:hover {
    border-color: #1e88e5;
    color: #1e88e5;
  }

  p {
    margin: 1rem 0 0 0;
    font-weight: 500;
  }
`;

const NetworkSection = styled.div``;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  max-width: 500px;

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

const ProvidersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
`;

const ProviderCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProviderLogo = styled.img`
  height: 40px;
  margin-bottom: 1rem;
`;

const ProviderInfo = styled.div`
  h3 {
    margin: 0 0 1rem 0;
    color: #333;
  }
`;

const ProviderStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #555;

  svg {
    color: #1e88e5;
  }
`;

const ProviderPlans = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const PlanTag = styled.span`
  background: #f5f5f5;
  color: #333;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
`;

const ViewPlansButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background: #1e88e5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.2s;

  &:hover {
    background: #1565c0;
  }
`;

const ClaimsSection = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const ClaimsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1.5rem;

  th,
  td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #eee;
  }

  th {
    background: #f5f5f5;
    color: #333;
    font-weight: 500;
  }

  tr:hover {
    background: #f9f9f9;
  }
`;

const NewClaimButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #1e88e5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background: #1565c0;
  }
`;

export default InsurancePage;
