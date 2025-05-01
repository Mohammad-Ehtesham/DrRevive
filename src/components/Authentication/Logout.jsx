import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import medical_img from "../../assets/medical_images.png";

// Styled Components
const AuthContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f5f7fa;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AuthIllustration = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #1e88e5, #0d47a1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: white;

  .illustration-content {
    max-width: 500px;

    h2 {
      font-size: 2.2rem;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    img {
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
      display: block;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const AuthFormContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const AuthFormWrapper = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  padding: 2.5rem;
  width: 100%;
  max-width: 450px;

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const AuthHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    color: #2c3e50;
    margin-bottom: 0.5rem;
    font-size: 1.8rem;
  }

  p {
    color: #7f8c8d;
  }
`;

const ToggleAuth = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  overflow: hidden;
  background: #f1f5f9;

  button {
    flex: 1;
    padding: 0.8rem;
    border: none;
    background: transparent;
    cursor: pointer;
    font-weight: 600;
    color: #64748b;
    transition: all 0.3s;

    &.active {
      background: #1e88e5;
      color: white;
    }
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  position: relative;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #2c3e50;
    font-weight: 500;
  }

  .input-icon {
    position: absolute;
    left: 15px;
    top: 40px;
    color: #64748b;
  }

  input {
    width: 100%;
    padding: 12px 15px 12px 40px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    transition: border 0.3s;

    &:focus {
      border-color: #1e88e5;
      outline: none;
      box-shadow: 0 0 0 3px rgba(30, 136, 229, 0.2);
    }
  }

  .password-toggle {
    position: absolute;
    right: 15px;
    top: 40px;
    cursor: pointer;
    color: #64748b;
  }

  .error {
    color: #ef4444;
    font-size: 0.85rem;
    margin-top: 0.5rem;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  background: #1e88e5;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 0.5rem;

  &:hover {
    background: #1565c0;
  }

  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  color: #64748b;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #e2e8f0;
  }

  span {
    padding: 0 1rem;
  }
`;

const SocialAuth = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  button {
    flex: 1;
    padding: 12px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: #f8fafc;
    }

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const AuthFooter = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  color: #64748b;

  a {
    color: #1e88e5;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// Auth Page Component
const Authdesign = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!isLogin && !formData.name) {
      newErrors.name = "Name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Handle authentication logic here
      console.log("Form submitted:", formData);
      // For demo purposes, just navigate to home
      navigate("/");
    }
  };

  return (
    <AuthContainer>
      <AuthIllustration>
        <div className="illustration-content">
          <h2>Welcome to Dr. Revive</h2>
          <p>
            {isLogin
              ? "Login to access your health records, book appointments, and connect with doctors."
              : "Join our community to get personalized healthcare recommendations and easy appointment scheduling."}
          </p>
          <img src={medical_img} alt="Medical Illustration" />
        </div>
      </AuthIllustration>

      <AuthFormContainer>
        <AuthFormWrapper>
          <AuthHeader>
            <h1>{isLogin ? "Welcome Back" : "Create Account"}</h1>
            <p>
              {isLogin
                ? "Sign in to continue"
                : "Get started with your health journey"}
            </p>
          </AuthHeader>

          <ToggleAuth>
            <button
              className={isLogin ? "active" : ""}
              onClick={() => setIsLogin(true)}
            >
              Sign In
            </button>
            <button
              className={!isLogin ? "active" : ""}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </ToggleAuth>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <FormGroup>
                <label htmlFor="name">Full Name</label>
                <div className="input-icon">
                  <FaUser />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <div className="error">{errors.name}</div>}
              </FormGroup>
            )}

            <FormGroup>
              <label htmlFor="email">Email Address</label>
              <div className="input-icon">
                <FaEnvelope />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </FormGroup>

            <FormGroup>
              <label htmlFor="password">Password</label>
              <div className="input-icon">
                <FaLock />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
              <div
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
              {errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </FormGroup>

            {isLogin && (
              <div style={{ textAlign: "right", marginBottom: "1.5rem" }}>
                <a
                  href="/forgot-password"
                  style={{ color: "#1e88e5", fontSize: "0.9rem" }}
                >
                  Forgot Password?
                </a>
              </div>
            )}

            <SubmitButton
              type="submit"
              disabled={
                !formData.email ||
                !formData.password ||
                (!isLogin && !formData.name)
              }
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </SubmitButton>
          </form>

          <Divider>
            <span>or continue with</span>
          </Divider>

          <SocialAuth>
            <button>
              <img src="https://www.google.com/favicon.ico" alt="Google" />
              Google
            </button>
            <button>
              <img src="https://www.facebook.com/favicon.ico" alt="Facebook" />
              Facebook
            </button>
          </SocialAuth>

          <AuthFooter>
            {isLogin
              ? "Don't have an account? <a href=`#` onClick={(e) => { e.preventDefault(); setIsLogin(false); }}>Sign Up</a>"
              : "Already have an account? <a href=`#` onClick={(e) => { e.preventDefault(); setIsLogin(true); }}>Sign In</a>"}
          </AuthFooter>
        </AuthFormWrapper>
      </AuthFormContainer>
    </AuthContainer>
  );
};

export default Authdesign;
