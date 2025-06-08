import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./NotFoundPage.css"; // Create this CSS file
import doctorImage from "../../assets/image.png"; // Adjust the path as necessary

const NotFoundPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Optional: Log 404 errors to analytics
  useEffect(() => {
    console.log(`404 - Page not found: ${location.pathname}`);
    // You would replace this with your actual analytics tracking
  }, [location]);

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-header">
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Page Not Found</h2>
          <p className="not-found-message">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="not-found-details">
          <p>
            You tried to access:{" "}
            <code className="not-found-path">{location.pathname}</code>
          </p>
          <p className="not-found-suggestion">
            While we revive this page, here are some helpful links:
          </p>
        </div>

        <div className="not-found-actions">
          <button
            className="not-found-button primary"
            onClick={() => navigate("/")}
          >
            Return to Home
          </button>
          <button
            className="not-found-button secondary"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>

        <div className="not-found-links">
          <h3>Popular Pages:</h3>
          <ul>
            <li onClick={() => navigate("/services")}>Our Services</li>
            <li onClick={() => navigate("/about")}>About Dr. Revive</li>
            <li onClick={() => navigate("/contact")}>Contact Us</li>
            <li onClick={() => navigate("/blog")}>Health Blog</li>
          </ul>
        </div>

        {/* <div className="not-found-search">
          <h3>Search Our Site:</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate(`/search?query=${e.target.search.value}`);
            }}
          >
            <input
              type="text"
              name="search"
              placeholder="What are you looking for?"
              className="not-found-search-input"
            />
            <button type="submit" className="not-found-search-button">
              Search
            </button>
          </form>
        </div> */}
      </div>

      <div className="not-found-image">
        {/* Replace with your actual image or illustration */}
        <img src={doctorImage} alt="Doctor searching for page" />
      </div>
    </div>
  );
};

export default NotFoundPage;
