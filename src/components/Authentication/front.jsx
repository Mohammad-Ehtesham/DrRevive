import React, { useState } from "react";
import "./style.css"; // Assuming you have a CSS file for styling the component
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

const Front = () => {
  const [signInBtn, setSignInBtn] = useState(false);

  const handleSignUpClick = () => {
    setSignInBtn(true); // Go to Sign Up mode
  };

  const handleSignInClick = () => {
    setSignInBtn(false); // Go to Sign In mode
  };

  return (
    <>
      <div className={`container ${signInBtn ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="" className="sign-in-form">
              <h2 className="title">Sign In</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />

              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <FaFacebook className="i-design" />
                </a>
                <a href="#" className="social-icon">
                  <FaXTwitter className="i-design" />
                </a>
                <a href="#" className="social-icon">
                  <FaGoogle className="i-design" />
                </a>
              </div>
            </form>

            <form action="" className="sign-up-form">
              <h2 className="title">Sign Up</h2>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Sign Up" className="btn solid" />

              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <FaFacebook className="i-design" />
                </a>
                <a href="#" className="social-icon">
                  <FaXTwitter className="i-design" />
                </a>
                <a href="#" className="social-icon">
                  <FaGoogle className="i-design" />
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                minus natus est.
              </p>
              <button className="btn transparent" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
            <img src="./img/log.svg" className="image" alt="" />
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>One of us?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                minus natus est.
              </p>
              <button className="btn transparent" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <img src="./img/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Front;
