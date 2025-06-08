import { useEffect, useState } from "react";
import {
  signup,
  login,
  loginWithGoogle,
} from "../../../../../Backend/Auth/auth"; // auth.js file where signup/login functions are written
import {
  getAuth,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../../../../Backend/Auth/firebase";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // remove if not using routing

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // Optional: Redirect if not logged in
      if (!currentUser) {
        navigate("/login"); // redirect to login page
      }
    });

    return () => unsubscribe(); // cleanup listener on unmount
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out!");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  // other state and handlers ...

  const handleReset = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent! Check your inbox.");
      })
      .catch((error) => {
        console.error("Error sending password reset email:", error);
        alert("Failed to send reset email. Maybe invalid email?");
      });
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      alert("Google Login Successful!");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSignup = async () => {
    try {
      await signup(email, password);
      alert("Signup Successful!");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleLogin = async () => {
    try {
      await login(email, password);
      alert("Login Successful!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h2>Auth</h2>
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="search-input"
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSignup} className="btn ">
        Signup
      </button>
      <button onClick={handleLogin} className="btn ">
        Login
      </button>
      <div className="containeur">
        {/* Other signup/login inputs/buttons */}
        <button onClick={handleGoogleLogin}>Login with Google</button>
      </div>
      <div>
        <br />
        <br />
        <h2>Forgot Password</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button onClick={handleReset} className="btn btn-secondary">
          Send Reset Link
        </button>
        <div>
          {user ? (
            <>
              <p>Welcome, {user.email}</p>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <p>Checking authentication...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
