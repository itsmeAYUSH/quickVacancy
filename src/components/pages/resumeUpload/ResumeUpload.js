import React, { useRef, useState } from "react";
import Header from "../../layout/header/Header";
import { Navbar } from "../../layout/navbar/Navbar";
import styles from "./ResumeUpload.module.css";

export const ResumeUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [fileErrors, setFileErrors] = useState("");
  const [loading, setLoading] = useState(false); // Initialize loading as false
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    designation: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    validateFile(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setFileErrors("");
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files[0];
    validateFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFormErrors({
      ...formErrors,
      [e.target.name]: "",
    });
  };

  const validateFile = (file) => {
    if (!file) {
      setFileErrors("");
      return;
    }

    const maxSizeMB = 5;
    const allowedType = "application/pdf";

    if (file.size > maxSizeMB * 1024 * 1024) {
      setFileErrors(`File size exceeds ${maxSizeMB}MB limit.`);
      setSelectedFile(null);
    } else if (file.type !== allowedType) {
      setFileErrors("Only PDF files are allowed.");
      setSelectedFile(null);
    } else {
      setFileErrors("");
      setSelectedFile(file);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required.";
    }

    if (!formData.email) {
      errors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid.";
    }

    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone number is invalid.";
    }

    if (!formData.designation) {
      errors.designation = "Designation is required.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      setFileErrors("Please upload your resume in PDF format.");
      return;
    }

    if (validateForm() && !fileErrors) {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("fullName", formData.fullName);
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("phoneNumber", formData.phoneNumber);
      formDataToSubmit.append("designation", formData.designation);
      formDataToSubmit.append("resume", selectedFile);

      setLoading(true); // Start loading

      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:5000/api/uploadResume", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formDataToSubmit,
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Upload successful:", data);
          setIsSubmitted(true);
          // Reset form after submission
          setFormData({
            fullName: "",
            email: "",
            phoneNumber: "",
            designation: "",
          });
          setSelectedFile(null);
        } else {
          const errorData = await response.json();
          console.error("Error:", errorData.message);
          setFileErrors(errorData.message );
        }
      } catch (error) {
        console.error("Error uploading resume:", error);
        setFileErrors("An unexpected error occurred. Please try again.");
      } finally {
        setLoading(false); // Stop loading
      }
    }
  };

  const handlePreviewFile = () => {
    if (selectedFile) {
      const fileURL = URL.createObjectURL(selectedFile);
      window.open(fileURL, "_blank");
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url("/images/Group 33.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Header />
      <Navbar />
      <div className={styles.content}>
        <div className={styles.container}>
          {!isSubmitted ? (
            <>
              <div className={styles.title}>Upload Your Resume.</div>
              <div className={styles.enterDetails}>
                <div
                  className={`${styles.dragAndDrop} ${
                    dragging ? styles.dragging : ""
                  }`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onClick={handleClick}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className={styles.fileInput}
                    accept=".pdf"
                    style={{ display: "none" }}
                  />
                  {selectedFile ? (
                    <div className={styles.filePreview}>
                      <div className={styles.fileInfo}>
                        <img
                          src="./images/fileUploadImage.png"
                          alt="file icon"
                          height="80px"
                          className={styles.fileIcon}
                        />
                        <p>{selectedFile.name}</p>
                      </div>
                      <div className={styles.buttonContainer}>
                        <button
                          className={`${styles.button} ${styles.previewButton}`}
                          onClick={handlePreviewFile}
                        >
                          Preview
                        </button>
                        <button
                          className={`${styles.button} ${styles.removeButton}`}
                          onClick={handleRemoveFile}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p>Drag and drop your file here or click to upload</p>
                      <img
                        src="./images/bx_upload.png"
                        height="30px"
                        alt="upload_icon"
                      />
                      <p>Upload the file in PDF format</p>
                    </>
                  )}
                  {fileErrors && (
                    <p className={styles.errorText}>{fileErrors}</p>
                  )}
                </div>

                <div className={styles.verticalLine}></div>

                <div className={styles.credentials}>
                  <form
                    className={styles.form}
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    <div className={styles.formRow}>
                      <div className={styles.inputGroup}>
                        <input
                          type="text"
                          name="fullName"
                          placeholder="Your Full Name"
                          className={styles.inputField}
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                        {formErrors.fullName && (
                          <span className={styles.errorText}>
                            {formErrors.fullName}
                          </span>
                        )}
                      </div>
                      <div className={styles.inputGroup}>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          className={styles.inputField}
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        {formErrors.email && (
                          <span className={styles.errorText}>
                            {formErrors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.inputGroup}>
                        <input
                          type="tel"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          className={styles.inputField}
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          required
                        />
                        {formErrors.phoneNumber && (
                          <span className={styles.errorText}>
                            {formErrors.phoneNumber}
                          </span>
                        )}
                      </div>
                      <div className={styles.inputGroup}>
                        <select
                          name="designation"
                          className={styles.inputField}
                          value={formData.designation}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Designation</option>
                          <option value="developer">Developer</option>
                          <option value="designer">Designer</option>
                          <option value="manager">Manager</option>
                        </select>
                        {formErrors.designation && (
                          <span className={styles.errorText}>
                            {formErrors.designation}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <button type="submit" className={styles.uploadButton}>
                        {loading ? "Uploading ..." : "Upload"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </>
          ) : (
            <div className={styles.thankYouMessage}>
              <img src="./images/resumeUploadSuccess.png" alt="Success" />
              <h2>Thank you for submitting your resume.</h2>
              <p>
                We will review your application and get back to you shortly.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeUpload;