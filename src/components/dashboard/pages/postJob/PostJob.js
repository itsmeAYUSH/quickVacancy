import React from 'react';
import styles from './PostJob.module.css'; // Assuming you will add styles in a separate CSS file

export const PostJob = () => {
  return (
    <div className={styles.postJobContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Post a job</h2>
        <form className={styles.postJobForm}>
          <div className={styles.formRow}>
            <input type="text" placeholder="Job Title" className={styles.inputField} />
            <input type="text" placeholder="Job Description" className={styles.inputField} />
            <input type="text" placeholder="Job Requirements" className={styles.inputField} />
          </div>
          <div className={styles.formRow}>
            <input type="text" placeholder="Location" className={styles.inputField} />
            <input type="text" placeholder="Employment type" className={styles.inputField} />
            <input type="text" placeholder="Salary" className={styles.inputField} />
          </div>
          <div className={styles.formRow}>
            <input type="date" placeholder="Application Deadline" className={styles.inputField} />
          </div>
          <div className={styles.buttonGroup}>
            <button type="button" className={styles.previewButton}>Preview Job</button>
            <button type="submit" className={styles.postButton}>Post Job</button>
          </div>
        </form>
      </div>
    </div>
  );
};

