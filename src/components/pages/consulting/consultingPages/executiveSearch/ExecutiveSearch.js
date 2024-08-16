import React from "react";
import styles from "./ExecutiveSearch.module.css";
import Header from "../../../../layout/header/Header";
import { Navbar } from "../../../../layout/navbar/Navbar";

export const ExecutiveSearch = () => {
  return (
    <div>
      <div
        className={styles.header}
        style={{
          backgroundImage: 'url("/images/Group 20.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <Header />
        <Navbar />
        <div className={styles.content}>
          <h4>Executive Search:</h4>
          <p>
            Quick Vacancy is the best Recruitment Agency in Mumbai (India) whose
            Executive Search is highly exclusive which focuses on medium to
            high-level executive recruiting. Quick Vacancy Executive Search
            consultants enables each client to grow their business by recruiting
            top industry-ready talents and helping develop adaptable,
            diversified organizations capable of achieving strategic
            business objective.
          </p>
        </div>
      </div>
    </div>
  );
};
