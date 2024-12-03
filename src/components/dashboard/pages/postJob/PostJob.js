import React, { useState } from "react";
import axios from "axios";
import styles from "./PostJob.module.css"; // Assuming you will add styles in a separate CSS file

const PostJob = () => {
  const [job, setJob] = useState({
    title: "",
    description: "",
    requirements: "",
    location: "",
    employmentType: "",
    salary: "",
    applicationDeadline: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({ ...prevJob, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/jobs", job);
      setSuccess("Job posted successfully!");
      setError(null);
      setJob({ // Reset form fields
        title: "",
        description: "",
        requirements: "",
        location: "",
        employmentType: "",
        salary: "",
        applicationDeadline: "",
      });
    } catch (err) {
      setError("Error posting job. Please try again.");
      setSuccess(null);
    }
  };

  return (
    <div className={styles.postJobContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Post a job</h2>
        <form className={styles.postJobForm} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              className={styles.inputField}
              value={job.title}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Job Description"
              className={styles.inputField}
              value={job.description}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="requirements"
              placeholder="Job Requirements"
              className={styles.inputField}
              value={job.requirements}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formRow}>
            <input
              type="text"
              name="location"
              placeholder="Location"
              className={styles.inputField}
              value={job.location}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="employmentType"
              placeholder="Employment Type"
              className={styles.inputField}
              value={job.employmentType}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="salary"
              placeholder="Salary"
              className={styles.inputField}
              value={job.salary}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formRow}>
            <input
              type="date"
              name="applicationDeadline"
              className={styles.inputField}
              value={job.applicationDeadline.split("T")[0]} // Format date for input
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.postButton}>
              Post Job
            </button>
          </div>
          {error && <div className={styles.error}>{error}</div>}
          {success && <div className={styles.success}>{success}</div>}
        </form>
      </div>
    </div>
  );
};

export default PostJob;