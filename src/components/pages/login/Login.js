import React, { useState } from "react";
import styles from "./Login.module.css";
import Header from "../../layout/header/Header";
import { Navbar } from "../../layout/navbar/Navbar";
import { Link, Navigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../../fireBaseConfig/FireBaseConfig"; // Import auth and googleProvider

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Login error:", error.message);
      setErrorMessage("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    if (!email) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setResetEmailSent(true);
      setErrorMessage("");
    } catch (error) {
      console.error("Password reset error:", error.message);
      setErrorMessage("Failed to send password reset email. Please try again.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("User  signed in with Google:", user);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Google login error:", error.message);
      setErrorMessage("Failed to sign in with Google. Please try again.");
    }
  };

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
              {resetEmailSent && (
                <p className={styles.success}>
                  Password reset email sent! Check your inbox.
                </p>
              )}
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
                <button
                  type="button"
                  className={styles.loginButton} // Use the same class for styling
                  onClick={handleGoogleLogin}
                  disabled={loading}
                  style={{ marginTop: " 10px" }} // Add some margin for spacing
                >
                  Login with Google
                </button>
              </form>
              <button
                onClick={handlePasswordReset}
                className={styles.resetButton}
              >
                Forgot Password?
              </button>
              <p>
                Don't have an account? <Link to="/signup">Register here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
