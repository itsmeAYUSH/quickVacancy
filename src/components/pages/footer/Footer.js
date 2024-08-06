import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <div
      className={styles.header}
      style={{
        backgroundImage: 'url("/images/handshake.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className={styles.buttonGroup}>
        <div className={styles.buttonRow}>
          <button>Privacy Policy</button>
          <span className={styles.separator}>|</span>
          <button>FAQs</button>
          <span className={styles.separator}>|</span>
          <button>Terms and Conditions</button>
        </div>
        <div className={styles.buttonRow}>
          <button>Contact Details</button>
          <span className={styles.separator}>|</span>
          <button>Payment</button>
        </div>
      </div>
    </div>
  );
};
