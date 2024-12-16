import React, { useState } from "react";
import { Navbar } from "../../layout/navbar/Navbar";
import Header from "../../layout/header/Header";
import styles from "./SignUp.module.css";
import { Navigate } from "react-router-dom";
// import { auth } from "../../firebaseConfig"; // Import the auth object from your firebase config
import { auth } from "../../fireBaseConfig/FireBaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth"; // Corrected import statement

export const SignUp = () => {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [designation, setDesignation] = useState("");
  const [lookingTo, setLookingTo] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true when starting the signup process
    setErrorMessage(""); // Reset the error message

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User  signed up successfully:", userCredential.user);

      // Optionally, you can store additional user information in your database here
      // For example, using an API call to save name, companyName, etc.

      setIsLoggedIn(true); // Update the login state
    } catch (error) {
      console.error("Signup error:", error.message);
      setErrorMessage("Signup failed. Please try again."); // Set error message for UI
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <Header backgroundColor="#0D4470" />
      <Navbar color="#0D4470" />

      <div className={styles.signupContainer}>
        <h2 className={styles.signupTitle}>Sign up</h2>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}{" "}
        {/* Display error message */}
        <form className={styles.signupForm} onSubmit={handleSubmit}>
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

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone number</label>
              <input
                type="tel"
                id="phone"
                placeholder="Phone number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
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

          <button
            className={styles.postJobButton}
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};
