// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "./Consulting.module.css";

// export const Consulting = () => {
//   const navigate = useNavigate();

//   const handleResumeClick = () => {
//     navigate("/Consulting/resume-writing");
//   };
//   const handleExecutiveClick = () => {
//     navigate("Consulting/executive-search");
//   };
//   const handleHRClick = () => {
//     navigate("/Consulting/HR-Consulting");
//   };
//   const handleTurnkeyClick = () => {
//     navigate("Consulting/turnkey-Recruitment");
//   };
//   const handleCXOClick = () => {
//     navigate("Consulting/CXO-hiring-services");
//   };
//   return (
//     <div
//       style={{
//         backgroundImage: 'url("/images/browseMoreOptions.png")',
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         height: "100vh",
//       }}
//     >
//       <div className={styles.consultingTitle}>
//         <h2>Consulting</h2>
//           <div className={styles.titleButtons}>
//             <button className={styles.but1} onClick={handleResumeClick}>
//               Resume Writing
//             </button>
//           <button className={styles.but2} onClick={handleExecutiveClick}>
//             Executive Search
//           </button>
//           <button className={styles.but2} onClick={handleHRClick}>
//             Human Resource Consulting
//           </button>
//         </div>
//         <div className={styles.titleButtons}>
//           <button className={styles.but2} onClick={handleTurnkeyClick}>
//             Turnkey Recruitment
//           </button>
//           <button className={styles.but2} onClick={handleCXOClick}>
//             CXO hiring services
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

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
          <div className={styles.consultingItem}>
            <img
              src="/images/Resumewriting.png"
              alt="Resume Writing"
              className={styles.imageStyle}
            />
            <div className={styles.imageText}>Resume Writing</div>
            <button className={styles.but1} onClick={handleResumeClick}>
              Resume Writing
            </button>
          </div>
          <div className={styles.consultingItem}>
            <img
              src="/images/executiveSearch.png"
              alt="Executive Search"
              className={styles.imageStyle}
            />
            <div className={styles.imageText}>Executive Search</div>
            <button className={styles.but2} onClick={handleExecutiveClick}>
              Executive Search
            </button>
          </div>
          <div className={styles.consultingItem}>
            <img
              src="/images/hrConsulting.png"
              alt="Human Resource Consulting"
              className={styles.imageStyle}
            />
            <div className={styles.imageText}>Human Resource Consulting</div>
            <button className={styles.but2} onClick={handleHRClick}>
              Human Resource Consulting
            </button>
          </div>
        </div>
        <div className={styles.titleButtons}>
          <div className={styles.consultingItem}>
            <img
              src="/images/turnkeyRecruitment.png"
              alt="Turnkey Recruitment"
              className={styles.imageStyle}
            />
            <div className={styles.imageText}>Turnkey Recruitment</div>
            <button className={styles.but2} onClick={handleTurnkeyClick}>
              Turnkey Recruitment
            </button>
          </div>
          <div className={styles.consultingItem}>
            <img
              src="/images/CXOHiringServices.png"
              alt="CXO Hiring Services"
              className={styles.imageStyle}
            />
            <div className={styles.imageText}>CXO Hiring Services</div>
            <button className={styles.but2} onClick={handleCXOClick}>
              CXO hiring services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
