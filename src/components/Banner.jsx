import React, { useState } from "react";
import "./banner.css"; // Adjust the path as necessary
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons for navigation buttons

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      topText: "NICER,",
      middleText: "UNIQUECANCERCARE",
      bottomText:
        "Specialised Geriatric Programme at Fortis Hospital, Gurugram tailored for the well-being of our elderly population",
    },
    {
      topText: "CAR",
      middleText: "Next Generation",
      bottomText: "Advanced automotive solutions for the modern era",
    },
    // Add more banners as needed
    {
      topText: "HEALTH",
      middleText: "PREMIUMCARE",
      bottomText: "Exceptional healthcare services for all age groups",
    },
  ];

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  // Auto-rotate banners every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextBanner();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="banner-top-text">{banners[currentBanner].topText}</div>
        <div className="banner-middle-text">
          {banners[currentBanner].middleText}
        </div>
        <div className="banner-bottom-text">
          {banners[currentBanner].bottomText}
        </div>
      </div>

      <button className="nav-button prev" onClick={prevBanner}>
        &lt;
      </button>
      <button className="nav-button next" onClick={nextBanner}>
        &gt;
      </button>

      <div className="indicator-dots">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentBanner ? "active" : ""}`}
            onClick={() => setCurrentBanner(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
