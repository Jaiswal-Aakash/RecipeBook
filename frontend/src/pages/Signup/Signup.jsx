import React, { useState } from "react";
import { auth } from "../../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful! You can now log in.");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-title">Create an Account</h1>
        <p className="signup-subtitle">Sign up to get started</p>
        <form className="signup-form" onSubmit={handleSignup}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="signup-button" type="submit">
            Sign Up
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <p className="signup-footer">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
