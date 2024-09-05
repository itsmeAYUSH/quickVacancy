import React from 'react';
import styles from './Dashboard.module.css';
import Header from '../layout/header/Header';
import { Navbar } from '../layout/navbar/Navbar';
import SideNavbar from './sideNavbar/SideNavbar';

export const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Header backgroundColor="#0D4470" />
      <div className={styles.mainContent}>
        <SideNavbar />
        <div className={styles.contentArea}>
          <Navbar />
          {/* Add your dashboard content here */}
        </div>
      </div>
    </div>
  );
};
