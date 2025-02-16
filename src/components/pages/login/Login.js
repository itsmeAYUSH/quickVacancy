import React, { useState } from "react";
import styles from "./Login.module.css";
import Header from "../../layout/header/Header";
import { Navbar } from "../../layout/navbar/Navbar";
import { Link, Navigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, db } from "../../fireBaseConfig/FireBaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("employee");

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

      const userRef = doc(
        db,
        role === "employee" ? "employeeDB" : "employerDB",
        userCredential.user.uid
      );
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        console.log("User data:", userSnap.data());
        setIsLoggedIn(true);
      } else {
        setErrorMessage("User not found in database.");
      }
    } catch (error) {
      console.error("Login error:", error.message);
      setErrorMessage("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
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
            <h2 className={styles.loginTitle}>Welcome Back</h2>
            <h3
              onClick={() =>
                setRole((prevRole) =>
                  prevRole === "employee" ? "employer" : "employee"
                )
              }
              style={{ cursor: "pointer" }}
            >
              {role === "employee"
                ? "For employer, Login here!"
                : "For employee, Login here!"}
            </h3>
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
            {resetEmailSent && (
              <p className={styles.success}>
                Password reset email sent! Check your inbox.
              </p>
            )}
            <form onSubmit={handleLogin}>
              <div className={styles.formGroup}>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Password</label>
                <div className={styles.passwordContainer}>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className={styles.passwordInput}
                  />
                  <div
                    type="button"
                    className={styles.eyeButton}
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <img src="/images/eye.svg" alt="Show" />
                    ) : (
                      <img src="/images/hide.svg" alt="Hide" />
                    )}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className={styles.loginButton}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
            <p style={{ marginTop: "30px" }}>
              No account? <Link to="/signup">Create one</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
