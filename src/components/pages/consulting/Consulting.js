import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Consulting.module.css";

export const Consulting = () => {
  const navigate = useNavigate();

  const handleResumeClick = () => {
    navigate("/Consulting/resume-writing");
  };
  const handleExecutiveClick = () => {
    navigate("Consulting/executive-search");
  };
  const handleHRClick = () => {
    navigate("/Consulting/HR-Consulting");
  };
  const handleTurnkeyClick = () => {
    navigate("Consulting/turnkey-Recruitment");
  };
  const handleCXOClick = () => {
    navigate("Consulting/CXO-hiring-services");
  };
  return (
    <div
      style={{
        backgroundImage: 'url("/images/browseMoreOptions.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className={styles.consultingTitle}>
        <h2>Consulting</h2>
        <div className={styles.titleButtons}>
          <button className={styles.but1} onClick={handleResumeClick}>
            Resume Writing
          </button>
          <button className={styles.but2} onClick={handleExecutiveClick}>
            Executive Search
          </button>
          <button className={styles.but2} onClick={handleHRClick}>
            Human Resource Consulting
          </button>
        </div>
        <div className={styles.titleButtons}>
          <button className={styles.but2} onClick={handleTurnkeyClick}>
            Turnkey Recruitment
          </button>
          <button className={styles.but2} onClick={handleCXOClick}>
            CXO hiring services
          </button>
        </div>
      </div>
    </div>
  );
};
