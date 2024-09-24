import React from 'react';
import styles from './Jobs.module.css';

export const Jobs = () => {
  return (
    <div className={styles.jobContainer}>
      <div className={styles.tableContainer}>
        <h2 className={styles.title}>Manage Jobs</h2>
        <div className={styles.filterOptions}>
          Filter - All / Active / Expired
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Jobs Title</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Software Engineer</td>
              <td>Active</td>
              <td>
                <button className={styles.editButton}>Edit</button>
                <button className={styles.closeButton}>Close</button>
              </td>
            </tr>
            <tr>
              <td>Marketing Specialist</td>
              <td>Active</td>
              <td>
                <button className={styles.editButton}>Edit</button>
                <button className={styles.closeButton}>Close</button>
              </td>
            </tr>
            <tr>
              <td>Sales Manager</td>
              <td>Expired</td>
              <td>
                <button className={styles.editButton}>Edit</button>
                <button className={styles.repostButton}>Repost</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
