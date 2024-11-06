import React, { useState } from "react";
import { Navbar } from "../../layout/navbar/Navbar";
import Header from "../../layout/header/Header";
import styles from "./SignUp.module.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const SignUp = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [designation, setDesignation] = useState("");
  const [lookingTo, setLookingTo] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post(`${API_URL}/api/auth/signup`, {
  //       name,
  //       companyName,
  //       email,
  //       phone, // Changed here to match the schema
  //       designation,
  //       lookingTo,
  //       password,
  //     });

  //     const token = response.data.token;
  //     localStorage.setItem("token", token);
  //     setIsLoggedIn(true);
  //     console.log("User signed up successfully and token stored in localStorage");
  //   } catch (error) {
  //     console.error("Signup error:", error);
  //     alert("Signup failed. Please try again.");
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      name,
      companyName,
      email,
      phone,
      designation,
      lookingTo,
      password,
    };

    console.log("Payload being sent:", payload);

    try {
      const response = await axios.post(`${API_URL}/api/auth/signup`, payload);
      const token = response.data.token;
      localStorage.setItem("token", token);
      setIsLoggedIn(true);
      console.log(
        "User signed up successfully and token stored in localStorage"
      );
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please try again.");
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
              <label htmlFor="phone">Phone number</label> {/* Updated here */}
              <input
                type="tel"
                id="phone" // Updated here
                placeholder="Phone number"
                value={phone} // Updated here
                onChange={(event) => setPhone(event.target.value)} // Updated here
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

          <button className={styles.postJobButton} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
