import React, { useState } from "react";
import { Navbar } from "../../layout/navbar/Navbar";
import Header from "../../layout/header/Header";
import styles from "./SignUp.module.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [designation, setDesignation] = useState("");
  const [lookingTo, setLookingTo] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        // "quick-vacancy-backend-5a8c.vercel.app/api/auth/signup",
        {
          name,
          companyName,
          email,
          phoneNumber,
          designation,
          lookingTo,
          password, // Include password in the request
        }
      );

      const token = response.data.token;

      // Store the token in localStorage
      localStorage.setItem("token", token);

      // Set login status to true, which triggers navigation
      setIsLoggedIn(true);
      console.log("User signed up successfully and token stored in localStorage");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please try again.");
    }
  };

  if (isLoggedIn) {
    // Redirect to the homepage if signup is successful
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <Header backgroundColor="#0D4470" />
      <Navbar color="#0D4470" />

      {/* Signup Form */}
      <div className={styles.signupContainer}>
        <h2 className={styles.signupTitle}>Sign up</h2>
        <form className={styles.signupForm} onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="companyName">Your company name</label>
              <input
                type="text"
                id="companyName"
                placeholder="Your company name"
                value={companyName}
                onChange={(event) => setCompanyName(event.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                placeholder="Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="phoneNumber">Phone number</label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="designation">Select your designation</label>
              <select
                id="designation"
                value={designation}
                onChange={(event) => setDesignation(event.target.value)}
                required
              >
                <option value="" disabled>
                  Select your designation
                </option>
                <option>HR</option>
                <option>Founder</option>
                <option>CEO</option>
                <option>Director</option>
              </select>
            </div>
          </div>

          {/* Row 3 */}
          <div className={styles.formGroup}>
            <label htmlFor="lookingTo">I am looking to</label>
            <select
              id="lookingTo"
              value={lookingTo}
              onChange={(event) => setLookingTo(event.target.value)}
              required
            >
              <option value="" disabled>
                Select an option
              </option>
              <option>Hire</option>
              <option>Get hired</option>
            </select>
          </div>

          {/* Password Field */}
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          {/* Sign Up Button */}
          <button className={styles.postJobButton} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
