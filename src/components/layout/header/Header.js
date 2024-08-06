import React from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <img
        className={styles.logo_image}
        src="/images/Quick_Vacany_Consultancy_logo.png"
        alt="icon"
      />
      <div className={styles.part}>
        <div className={styles.socials}>
          <img className={styles.socialsIcon} src="/images/facebook_icon.png" alt="icon" />
          <img className={styles.socialsIcon} src="/images/instagram_icon.png" alt="icon" />
          <img className={styles.socialsIcon} src="/images/linkedin_icon.png" alt="icon" />
          <img className={styles.socialsIcon} src="/images/twitter_icon.png" alt="icon" />
        </div>
        <div className={styles.socialButtons}>
          <button className={styles.login}>Login</button>
          <button className={styles.enquire}>Enquire Now</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import styles from './Header.module.css';

// const Header = () => {
//   const location = useLocation();
//   const [headerStyle, setHeaderStyle] = useState({ background: 'transparent' });

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       let newBackground = 'transparent';

//       if (location.pathname === '/') {
//         newBackground = scrollPosition > 100 ? 'linear-gradient(to right, #0D4470, #3B8FD1)' : 'transparent';
//       } else if (location.pathname === '/consulting') {
//         newBackground = scrollPosition > 100 ? 'linear-gradient(to right, #0F7A27, #04310E)' : 'transparent';
//       } else if (location.pathname === '/whyQuickVacancy') {
//         newBackground = scrollPosition > 100 ? 'linear-gradient(to right, #DFCC21, #F36E0D)' : 'transparent';
//       }

//       setHeaderStyle({ background: newBackground });
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [location.pathname]);

//   return (
//     <div
//       className={styles.header}
//       style={{ ...headerStyle, transition: 'background 0.3s ease' }}
//     >
//       <img
//         className={styles.logo_image}
//         src="/images/Quick_Vacany_Consultancy_logo.png"
//         alt="Logo"
//       />
//       <div className={styles.part}>
//         <div className={styles.socials}>
//           <img className={styles.socialsIcon} src="/images/facebook_icon.png" alt="Facebook" />
//           <img className={styles.socialsIcon} src="/images/instagram_icon.png" alt="Instagram" />
//           <img className={styles.socialsIcon} src="/images/linkedin_icon.png" alt="LinkedIn" />
//           <img className={styles.socialsIcon} src="/images/twitter_icon.png" alt="Twitter" />
//         </div>
//         <div className={styles.buttons}>
//           <button className={styles.login}>Login</button>
//           <button className={styles.enquire}>Enquire Now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

