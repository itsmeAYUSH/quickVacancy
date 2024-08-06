import React from "react";
import { Navbar } from "../../layout/navbar/Navbar";
import Header from "../../layout/header/Header";
import styles from "./Homepage.module.css";

export const Homepage = () => {
  return (
    <div
      className={styles.header}
      style={{
        backgroundImage: 'url("/images/interview.jpg")',
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Header></Header>
      <Navbar></Navbar>

      <div className={styles.title}>
        <h2>
          Recruit high performing candidates using Quick vacancy Consultancy
        </h2>
        <div className={styles.titleButtons}>
          <button className={styles.but1}>Candidate Resume Upload</button>
          <button className={styles.but2}>Company openings</button>
        </div>
      </div>

      <div className={styles.moreOptions}>
        Browse more options regarding consultancy
        <br></br>
        <button className={styles.optionButton}>        <img src="./images/arrow-down.png"></img>
        </button>
      </div>
    </div>
  );
};
