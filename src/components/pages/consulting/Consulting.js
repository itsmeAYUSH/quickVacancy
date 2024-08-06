// import React from "react";
// import styles from "./Consulting.module.css";
// import Header from "../../layout/header/Header";
// import { Navbar } from "../../layout/navbar/Navbar";

// export const Consulting = () => {
//   return (
//     <div
//       //   className={styles.header}
//       style={{
//         backgroundImage: 'url("/images/Group 18.jpg")',
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         height: "100vh",
//       }}
//     >
//       <div className={styles.consultingTitle}>
//         <h2>Consulting</h2>
//         <div className={styles.titleButtons}>
//           <button className={styles.but1}>Resume Writing</button>
//           <button className={styles.but2}>Executive Search</button>
//           <button className={styles.but2}>Human Resource Consulting</button>
//         </div>
//         <div className={styles.titleButtons}>
//           <button className={styles.but2}>Turnkey Recruitment</button>
//           <button className={styles.but2}>HR consulting</button>
//           <button className={styles.but2}>CXO hiring services</button>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import styles from "./Consulting.module.css";
import Header from "../../layout/header/Header";
import { Navbar } from "../../layout/navbar/Navbar";
import { ResumeWriting } from "./consultingPages/resumeWriting/ResumeWriting";
export const Consulting = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div
      style={{
        backgroundImage: 'url("/images/Group 18.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      {activeComponent === "ResumeWriting" ? (
        <ResumeWriting />
      ) : (
        <div className={styles.consultingTitle}>
          <h2>Consulting</h2>
          <div className={styles.titleButtons}>
            <button
              className={styles.but1}
              onClick={() => handleButtonClick("ResumeWriting")}
            >
              Resume Writing
            </button>
            <button className={styles.but2}>Executive Search</button>
            <button className={styles.but2}>Human Resource Consulting</button>
          </div>
          <div className={styles.titleButtons}>
            <button className={styles.but2}>Turnkey Recruitment</button>
            <button className={styles.but2}>HR consulting</button>
            <button className={styles.but2}>CXO hiring services</button>
          </div>
        </div>
      )}
    </div>
  );
};
