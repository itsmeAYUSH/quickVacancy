import React from "react";
import { Navbar } from "../../../../layout/navbar/Navbar";
import Header from "../../../../layout/header/Header";
import styles from "./HrConsulting.module.css";

export const HrConsulting = () => {
  return (
    <div
      className={styles.header}
      style={{
        backgroundImage: 'url("/images/Group 21.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Header></Header>
      <Navbar></Navbar>
      <div className={styles.content}>
        <h4>HR Consulting:</h4>
        <p>
          Human Resource (HR) Consulting, often known as "Human Capital
          Management", encompasses consulting and implementation duties
          pertaining to an organization's human capital and the HR Strategy. The
          spectrum of services provided by the leading HR Consultancies, such as
          Quick Vacancy, spans from complete work on the human capital strategy
          to the design and execution of a remuneration and benefits structure,
          all the way down to HR function restructuring. Quick Vacancy , India's
          best HR Consultancy, provides a wide range of HR services to
          organizations. Defining a business model, organizational design,
          developing a people strategy that supports important aspects of the
          venture, and establishing HR-related undertakings in areas like
          diversity, employment, and talent acquisition etc. Being the best
          Recruitment Agency and HR Consulting firm with a pan-India presence,
          Quick Vacancy understands that a company’s most valuable and
          significant asset is its Human Resources. The success, brand image,
          and work culture of a business entirely depend on the human capital it
          possesses. In addition, the team, teamwork, and team spirit are the
          traits that propel an organization to greatness. Human Resource
          Management encompasses various activities, including Recruiting,
          Performance-based Training, Human Resource Planning, Succession
          Planning, Policy & Procedure Development, Legal Compliance, and
          Remuneration. In order to become the best HR Consulting firm, Quick
          Vacancy has hired some of the best HR experts. Only a skilled eye can
          recognize and foresee the complexity of HR Management since certain
          elements of HR Management are intangible. Quick Vacancy HR Consulting
          practices encompasses all activities required to recruit, retain and
          develop talent, with the right structure. Our key propositions
          includes -strategic workforce planning – recruitment & retention,
          workforce effectiveness and performance management. With our years of
          expertise across many industrial areas in HR Consulting, Quick Vcancy
          is a favorable destination for any HR solution from consultancy
          services in hiring to human resource planning; from training to
          remuneration; from succession planning to competency
          mapping and much more.
        </p>
      </div>
    </div>
  );
};