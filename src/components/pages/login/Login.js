import React, { useState } from "react";
import styles from "./Login.module.css";
import Header from "../../layout/header/Header";
import { Navbar } from "../../layout/navbar/Navbar";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when starting the login process
    setErrorMessage(""); // Reset the error message

    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password,
      });
      console.log(response.data);

      // Save the token in local storage
      localStorage.setItem("token", response.data.token);
      setIsLoggedIn(true); // Update the login state
    } catch (error) {
      console.error(
        "Login error:",
        error.response ? error.response.data : error.message
      );
      setErrorMessage("Invalid email or password."); // Set error message for UI
    } finally {
      setLoading(false); // Reset loading state
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
