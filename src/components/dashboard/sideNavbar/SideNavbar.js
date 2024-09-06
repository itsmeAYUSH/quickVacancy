import React, { useState } from "react";
import styles from "./SideNavbar.module.css";
import { FaHome, FaPlus, FaBriefcase, FaUser, FaCog } from "react-icons/fa";

const SideNavbar = () => {
  const [hovered, setHovered] = useState(null);

  const navItems = [
    { name: "Home", icon: <FaHome /> },
    { name: "Add Job", icon: <FaPlus /> },
    { name: "Jobs", icon: <FaBriefcase /> },
    { name: "Profile", icon: <FaUser /> },
    { name: "Settings", icon: <FaCog /> },
  ];

  return (
    <div className={styles.sidenav}>
      {navItems.map((item, index) => (
        <div
          key={index}
          className={styles.navItem}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className={styles.icon}>{item.icon}</div>
          {/* Use a conditional class to control text visibility */}
          <div
            className={`${styles.text} ${
              hovered === index ? styles.showText : ""
            }`}
          >
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideNavbar;
