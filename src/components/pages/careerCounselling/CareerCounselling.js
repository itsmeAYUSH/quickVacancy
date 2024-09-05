import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./CareerCounselling.module.css";

export const CareerCounselling = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/images/careerCounselling.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        paddingTop: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        zIndex: 100,
      }}
    >
      <div className={styles.horizontalAccordionContainer}>
        <Accordion className={styles.horizontalAccordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={styles.accordionText}>
              Career Counselling
            </Typography>
          </AccordionSummary>
          {/* <AccordionDetails>
            <Typography>
              Details about your career counselling services.
            </Typography>
          </AccordionDetails> */}
        </Accordion>

        <Accordion className={styles.horizontalAccordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={styles.accordionText}>
              Growth Formula
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.accordionText}>Passionate</Typography>
          </AccordionDetails>{" "}
          <AccordionDetails>
            <Typography className={styles.accordionText}>Placed</Typography>
          </AccordionDetails>{" "}
          <AccordionDetails>
            <Typography className={styles.accordionText}>
              Prompt (3P)
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className={styles.horizontalAccordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={styles.accordionText}>
              Process of Hiring
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.accordionText}>Website</Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography className={styles.accordionText}>Brochure</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};