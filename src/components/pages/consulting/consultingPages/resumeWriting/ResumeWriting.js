import React from "react";
import Header from "../../../../layout/header/Header";
import { Navbar } from "../../../../layout/navbar/Navbar";
import styles from "./ResumeWriting.module.css";

export const ResumeWriting = () => {
  return (
    <div>
      <div
        className={styles.header}
        style={{
          backgroundImage: 'url("/images/Group 19.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",

          height: "100vh",
        }}
      >
        <Header />
        <Navbar />
        <div className={styles.content}>
          <h4>Resume Writing:</h4>
          <p>
            <br></br>
            The most crucial aspect of your job application is your resume. A
            resume is a manuscript that informs the hiring managers of all they
            need to understand regarding you and what makes you the right match
            for their job vacancy. Resume Writing, or CV Writing, is the
            discipline of effectively constructing a resume.<br></br> Resume
            Writing, also known as Curriculum Vitae (short for “CV” or Biodata),
            is a critical tool if you are seeking for job. A poorly written CV
            might lead to rejection even before the employer has a chance to
            know you.<br></br>
            Writing a resume is a technique for promoting your skills and
            showcasing your skills. It brings the fundamentals of your entire
            life to the employer, demonstrating your suitability for any
            particular work profile. A strong CV can entice any potential
            employer who can comprehend your value through your words. In this
            cutthroat and competitive recruitment market it is essential that
            your CV is not only impressive but also well written.<br></br> The
            Value of Resume Writing:<br></br> CV Writing or Resume Writing
            Services assists in laying out your life and achievements
            chronologically related to a job, starting with your educational
            background and ending with your most recent employment experience.
            Professional Resume writing does not adhere to a single conventional
            format. A CV is like a mirror that is unique to each person. It’s a
            written version of the events you’ve experienced. This implies your
            resume must be very efficient, in a proper manner.<br></br>
            Characteristics of a Good Resume Writing:<br></br> A well-written
            resume aligns all of your educational credentials and academic
            achievements to showcase the employer how your academic experience
            will benefit the company.<br></br> A well-written resume will always
            include your relevant work experience for the job description you
            are looking for.<br></br> Since your resume is critical to your
            future it should be written by professionals who understand the
            significance. If you are unsure of how to write a resume then Quick
            Vacancy can be your answer. The recruitment team of Quick Vacancy
            consists of resume writers who specialize in Resume Writing services
            for this leading recruitment industry by utilizing formal language
            to sell your qualifications to potential employers and write a
            professional resume.
          </p>
          <button className={styles.sampleResume}>Resume Writing</button>
        </div>
      </div>
    </div>
  );
};
