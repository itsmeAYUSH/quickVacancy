import React from "react";
import styles from "./OurVision.module.css";
import Header from "../../layout/header/Header";
import { Navbar } from "../../layout/navbar/Navbar";

export const OurVision = () => {
  return (
      <div
        className={styles.header}
        style={{
          backgroundImage: 'url("/images/Group 29.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <Header backgroundColor="#0F7A27"></Header>
        <Navbar color="#0F7A27"></Navbar>
        <div className={styles.content}>
          <img
            className={styles.aboutUsIcons}
            src="/images/aboutUsVision.svg" alt="vision-image"
          ></img>
          <h4>Our Vision:</h4>
          <p>
            Our vision is to establish a long-term and strategic recruitment
            partnership with our clients and assist them in transforming today’s
            difficulties into tomorrow’s Rejoice.
          </p>
          <br></br>
          <img
            className={styles.aboutUsIcons}
            src="/images/aboutUsMission.svg" alt="mission-image"
          ></img>
          <h4>Our Mission:</h4>
          <p>
            Our mission is to increase your organization’s efficiency through
            maximising the potential of your human manpower and to ensure that
            people get the right opportunity to progress in their careers.
          </p>
        </div>
      </div>
  );
};
