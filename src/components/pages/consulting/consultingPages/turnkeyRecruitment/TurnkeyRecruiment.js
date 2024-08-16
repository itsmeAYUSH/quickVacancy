import React from "react";
import Header from "../../../../layout/header/Header";
import { Navbar } from "../../../../layout/navbar/Navbar";
import styles from "./TurnkeyRecruiment.module.css";

export const TurnkeyRecruiment = () => {
  return (
    <div
      className={styles.header}
      style={{
        backgroundImage: 'url("/images/Group 22.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Header></Header>
      <Navbar></Navbar>
      <div className={styles.content}>
        <h4>Turnkey Recruiting:</h4>
        <p>
          Quick Vacancy is considered as the best HR Consultancy and top
          placement agency for Turnkey Recruitment Services for businesses
          seeking bulk or Mass recruitment across multiple verticals in a short
          period of time. Typically, such a hiring need in contexts of
          start-ups, expansion projects, organization looking to inject crisp
          ability into the group, taking non-performance in recognition or
          topographical expansion into new areas, new product launch in
          business, as well as positions. Quick Vacancy has unparalleled
          experience in being the top recruitment agency for bulk-hiring and
          staffing. Turnkey Recruitment saves our clients a substantial amount
          of time and, more importantly, money. Quick Vcancy ensures that
          employees hired at every tier of the organization are enrolled within
          the given deadlines and monetary frameworks. While doing so, Quick
          Vacancy ensures that the quality of recruitment and administration
          does not deteriorate at all.
        </p>
      </div>
    </div>
  );
};
