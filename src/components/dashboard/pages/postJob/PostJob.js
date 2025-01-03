import React, { useState } from "react";
import axios from "axios";
import styles from "./PostJob.module.css"; // Updated CSS module

const PostJob = () => {
  const [job, setJob] = useState({
    title: "",
    openings: "",
    location: "",
    experience: "",
    salary: "",
    bonus: false,
    skills: "",
    description: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setJob((prevJob) => ({
      ...prevJob,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/jobs", job);
      setSuccess("Job posted successfully!");
      setError(null);
      setJob({
        title: "",
        openings: "",
        location: "",
        experience: "",
        salary: "",
        bonus: false,
        skills: "",
        description: "",
      });
    } catch (err) {
      setError("Error posting job. Please try again.");
      setSuccess(null);
    }
  };

  return (
    <div className={styles.postJobContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Post a Job</h2>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Job Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter the job title"
              value={job.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>No of Openings</label>
            <input
              type="number"
              name="openings"
              placeholder="Enter the number of openings"
              value={job.openings}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Job Location</label>
            <input
              type="text"
              name="location"
              placeholder="Enter the job location"
              value={job.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Years of Experience</label>
            <input
              type="text"
              name="experience"
              placeholder="Enter years of experience"
              value={job.experience}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Monthly Salary</label>
            <input
              type="text"
              name="salary"
              placeholder="Enter the salary range"
              value={job.salary}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Bonus Offered</label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="bonus"
                  value={true}
                  checked={job.bonus === true}
                  onChange={() => setJob({ ...job, bonus: true })}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="bonus"
                  value={false}
                  checked={job.bonus === false}
                  onChange={() => setJob({ ...job, bonus: false })}
                />
                No
              </label>
            </div>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label>Skills</label>
          <input
            type="text"
            name="skills"
            placeholder="Enter required skills"
            value={job.skills}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Job Description</label>
          <textarea
            name="description"
            placeholder="Enter the job description"
            value={job.description}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Post Job
        </button>

        {error && <div className={styles.error}>{error}</div>}
        {success && <div className={styles.success}>{success}</div>}
      </form>
    </div>
  );
};

export default PostJob;
