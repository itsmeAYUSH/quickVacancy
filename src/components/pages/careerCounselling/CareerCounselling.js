import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from './CareerCounselling.module.css';

export const CareerCounselling = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/images/Group 24.jpg")',
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
            <Typography>Career Counselling</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Details about your career counselling services.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className={styles.horizontalAccordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Growth Formula</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Your growth strategies and how they benefit clients.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className={styles.horizontalAccordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Process of Hiring</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Description of the hiring process.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

