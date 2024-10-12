import React, { useState } from "react";
import styles from "./Login.module.css";
import Header from "../../layout/header/Header";
import { Navbar } from "../../layout/navbar/Navbar";
import { Link, Navigate } from "react-router-dom"; // Import Navigate

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for login status

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // const response = await fetch("http://localhost:5000/api/auth/login", {
        const response = await fetch("https://quickvacancy.netlify.app/api/auth/login", {
          method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Successful login, handle token or redirect
        console.log("Login successful:", data);
        // Optionally, store the token in localStorage
        // localStorage.setItem("token", data.token);
        setIsLoggedIn(true); // Set login status to true
      } else {
        // Handle login failure
        setErrorMessage(data.msg || "Login failed");
      }
    } catch (err) {
      console.error("Error during login:", err);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  // If the user is logged in, redirect to the home page
  if (isLoggedIn) {
    return <Navigate to="/" replace />; // Use Navigate for redirection
  }

  return (
    <div>
      <div className={styles.dashboardContainer}>
        {/* Header and Navbar */}
        <Header backgroundColor="#0D4470" />
        <Navbar color="#0D4470" />

        {/* Main content section wrapped in a container */}
        <div className={styles.mainContentContainer}>
          <div className={styles.mainContent}>
            <div className={styles.imageContainer}>
              {/* Image container on the left */}
              <img
                src="./images/creative-people-working-office 1.png"
                alt="Office team"
                className={styles.image}
              />
              <div className={styles.logoOverlay}>
                <img
                  src="./images/Quick-Vacancy-Consultancy-logo 3.png"
                  alt="Logo"
                  className={styles.logo}
                />
              </div>
            </div>

            {/* Login form on the right */}
            <div className={styles.loginContainer}>
              <h2 className={styles.loginTitle}>Login</h2>
              {errorMessage && <p className={styles.error}>{errorMessage}</p>}
              <form onSubmit={handleLogin}>
                <div className={styles.formGroup}>
                  <label>Email address</label>
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className={styles.loginButton}>
                  Login
                </button>
                <p>
                  Don't have an account?{" "}
                  <Link to="/signup" className={styles.signupLink}>
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
