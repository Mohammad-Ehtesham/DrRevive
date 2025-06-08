import React from "react";
import styled from "styled-components";
import {
  FaHeartbeat,
  FaUserMd,
  FaCalendarAlt,
  FaMobileAlt,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
// import teamPhoto from "../assets/teamphoto.jpeg"; // Add your team photo
import appScreenshot from "../assets/teamphoto.jpeg"; // Add your app screenshot
import Ehtesham from "../assets/Ehtesham.jpeg"; // Add your team member's photo
import Sohini from "../assets/Sohini.jpg"; // Add another team member's photo
import Ehsan from "../assets/Ehsan.jpeg"; // Add another team member's photo
import Yasir from "../assets/Yasir.jpeg"; // Add another team member's photo
import Rizwan from "../assets/Rizwan.jpeg"; // Add another team member's photo

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ... (keep your existing imports and data arrays)

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Mohammad Ehtesham",
      role: "Frontend Developer",
      bio: "Builds patient-friendly UIs with React for seamless healthcare access",
      image: Ehtesham, // Replace with actual image path
    },
    {
      name: "Sohini Tandon",
      role: "Backend Developer",
      bio: "Expert in Node.js , Django and database architecture",
      image: Sohini,
    },
    {
      name: "Mohammad Ehsan",
      role: "UI/UX Designer",
      bio: "Designs intuitive doctor/patient dashboards with accessibility focus.",
      image: Ehsan,
    },
    {
      name: "Md Yasir",
      role: "UI/UX Designer",
      bio: "Creates intuitive user interfaces",
      image: Yasir, // Replace with actual image path
    },
    {
      name: "Mohd. Rizwan Khan",
      role: "Data Scientists",
      bio: "Develops predictive models for patient risk assessment.",
      image: Rizwan, // Replace with actual image path
    },
  ];

  // Custom arrow components
  const NextArrow = ({ onClick }) => (
    <ArrowButton right onClick={onClick}>
      <FaArrowRight
        style={{
          background: "transparent",
          color: "grey",
          padding: "0.5rem",
          borderRadius: "0",
        }}
        size={40}
      />
    </ArrowButton>
  );

  const PrevArrow = ({ onClick }) => (
    <ArrowButton left onClick={onClick}>
      <FaArrowLeft
        style={{
          background: "transparent",
          color: "grey",
          padding: "0.5rem",
          borderRadius: "0",
        }}
        size={40}
      />
    </ArrowButton>
  );

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const features = [
    {
      icon: (
        <FaHeartbeat
          style={{
            background: "transparent",
            color: "red",
            padding: "0.5rem",
            borderRadius: "0",
          }}
          size={40}
        />
      ),
      title: "Health Tracking",
      description: "Monitor your vital health metrics and medical history",
    },
    {
      icon: (
        <FaUserMd
          style={{
            background: "transparent",
            color: "skyblue",
            padding: "0.5rem",
            borderRadius: "0",
          }}
          size={40}
        />
      ),
      title: "Doctor Connect",
      description: "Find and consult with certified healthcare professionals",
    },
    {
      icon: (
        <FaCalendarAlt
          style={{
            background: "transparent",
            color: "blue",
            padding: "0.5rem",
            borderRadius: "0",
          }}
          size={40}
        />
      ),
      title: "Appointment Management",
      description: "Schedule and manage medical appointments with ease",
    },
    {
      icon: (
        <FaMobileAlt
          style={{
            background: "transparent",
            color: "grey",
            padding: "0.5rem",
            borderRadius: "0",
          }}
          size={40}
        />
      ),
      title: "Mobile Access",
      description: "Access your health data anytime, anywhere",
    },
  ];

  return (
    <AboutContainer>
      <HeroSection>
        <HeroContent>
          <h1>Revolutionizing Healthcare Access</h1>
          <p>
            DR. REVIVE bridges the gap between patients and healthcare providers
            through innovative technology
          </p>
        </HeroContent>
      </HeroSection>

      <AppOverview>
        <AppImage src={appScreenshot} alt="DR. REVIVE App" />
        <AppDescription>
          <h2>About DR. REVIVE</h2>
          <p>
            DR. REVIVE is a comprehensive healthcare platform designed to
            modernize patient-doctor interactions. Our mission is to make
            healthcare more accessible, efficient, and user-friendly through
            cutting-edge technology.
          </p>
          <p>
            Developed as a college project, this application demonstrates the
            potential of web technologies in transforming traditional healthcare
            systems.
          </p>
          <FeatureList>
            {features.map((feature, index) => (
              <FeatureItem key={index}>
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </FeatureItem>
            ))}
          </FeatureList>
        </AppDescription>
      </AppOverview>

      <TeamSection>
        <SectionHeader>
          <h2>Meet Our Team</h2>
          <p>The talented individuals behind DR. REVIVE</p>
        </SectionHeader>

        <TeamCarouselContainer>
          <StyledSlider {...carouselSettings}>
            {teamMembers.map((member, index) => (
              <TeamCard key={index}>
                <TeamPhoto src={member.image} alt={member.name} />
                <TeamInfo>
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p className="bio">{member.bio}</p>
                </TeamInfo>
              </TeamCard>
            ))}
          </StyledSlider>
        </TeamCarouselContainer>
      </TeamSection>

      <MissionSection>
        <h2>Our Mission</h2>
        <p>
          To create a healthcare ecosystem that prioritizes patient convenience
          without compromising on the quality of medical care. We believe
          technology should enhance, not replace, the human touch in medicine.
        </p>
      </MissionSection>
    </AboutContainer>
  );
};

export default AboutPage;

// Styled Components
const TeamCarouselContainer = styled.div`
  padding: 0 2rem;
  margin: 0 auto;
  max-width: 1200px;
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    padding: 0 15px;
    box-sizing: border-box;
  }

  .slick-dots {
    bottom: -40px;

    li button:before {
      color: #1e88e5;
      font-size: 10px;
    }

    li.slick-active button:before {
      color: #1e88e5;
    }
  }
`;

const ArrowButton = styled.div`
  position: absolute;
  top: 50%;
  ${({ left }) => left && "left: -40px;"}
  ${({ right }) => right && "right: -40px;"}
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 1;
  color: #1e88e5;
  transition: all 0.3s ease;

  &:hover {
    background: #1e88e5;
    color: white;
  }

  @media (max-width: 768px) {
    ${({ left }) => left && "left: -20px;"}
    ${({ right }) => right && "right: -20px;"}
    width: 30px;
    height: 30px;
  }
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #333;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1e88e5, #0d47a1);
  color: white;
  padding: 4rem 2rem;
  border-radius: 8px;
  margin-bottom: 3rem;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    opacity: 0.9;
  }
`;

const AppOverview = styled.section`
  display: flex;
  gap: 3rem;
  margin-bottom: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AppImage = styled.img`
  width: 50%;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AppDescription = styled.div`
  width: 50%;

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #1e88e5;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FeatureList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.div`
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    margin: 1rem 0 0.5rem;
    color: #1e88e5;
  }

  p {
    font-size: 0.9rem;
    color: #64748b;
  }
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  color: #1e88e5;
`;

const TeamSection = styled.section`
  margin-bottom: 4rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2rem;
    color: #1e88e5;
    margin-bottom: 0.5rem;
  }

  p {
    color: #64748b;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const TeamCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TeamPhoto = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const TeamInfo = styled.div`
  padding: 1.5rem;

  h3 {
    margin-bottom: 0.5rem;
    color: #1e88e5;
  }

  .role {
    font-weight: 600;
    color: #334155;
    margin-bottom: 0.5rem;
  }

  .bio {
    font-size: 0.9rem;
    color: #64748b;
    line-height: 1.5;
  }
`;

const MissionSection = styled.section`
  background: #f8fafc;
  padding: 3rem;
  border-radius: 8px;
  text-align: center;

  h2 {
    font-size: 2rem;
    color: #1e88e5;
    margin-bottom: 1.5rem;
  }

  p {
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;
