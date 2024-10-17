import React, { useState } from "react";
import styles from "./Login.module.css";
import Header from "../../layout/header/Header";
import { Navbar } from "../../layout/navbar/Navbar";
import { Link, Navigate } from "react-router-dom";

export const Login = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when starting login
    setErrorMessage(""); // Clear previous error message

    try {
      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // Check if the response body exists before parsing JSON
      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        localStorage.setItem("token", data.token); // Store the token in localStorage
        setIsLoggedIn(true); // Set login status to true
      } else {
        const errorData = await response.json().catch(() => null); // Handle empty or invalid JSON
        setErrorMessage(errorData?.msg || "Login failed");
      }
    } catch (err) {
      console.error("Error during login:", err);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Set loading to false after login attempt
    }
  };

  // If the user is logged in, redirect to the home page
  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <div className={styles.dashboardContainer}>
        <Header backgroundColor="#0D4470" />
        <Navbar color="#0D4470" />

        <div className={styles.mainContentContainer}>
          <div className={styles.mainContent}>
            <div className={styles.imageContainer}>
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
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={styles.loginButton}
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
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
