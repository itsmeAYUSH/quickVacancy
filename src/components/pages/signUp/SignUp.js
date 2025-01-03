import React, { useState } from "react";
import { Navbar } from "../../layout/navbar/Navbar";
import Header from "../../layout/header/Header";
import styles from "./SignUp.module.css";
import { Navigate } from "react-router-dom";
import { auth } from "../../fireBaseConfig/FireBaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [designation, setDesignation] = useState("");
  const [lookingTo, setLookingTo] = useState("I am looking to hire"); // Fixed option
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User  signed up successfully:", userCredential.user);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Signup error:", error.message);
      setErrorMessage("Signup failed. Please try again.");
    } finally {
      setLoading(false);
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
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
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
                <option>Founder / CEO / Director</option>
                <option>Chairman</option>
                <option>Admin</option>
              </select>
            </div>
          </div>
          {/* <div className={styles.formGroup}>
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
          </div> */}
          <div className={styles.formGroup}>
            <label htmlFor="lookingTo">I am looking to</label>
            <input type="text" id="lookingTo" value={lookingTo} readOnly />
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
