import React from "react";
import styles from "./Header.module.css";

const   Header = (props) => {
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
