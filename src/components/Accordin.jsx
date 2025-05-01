import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { MdExpandCircleDown } from "react-icons/md";

const Accordin = ({ question, answer }) => {
  return (
    <div style={{ marginBottom: "30px" }} className="arcade">
      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandCircleDown className="expicon" size={50} />} // Icon for expand/collapse
          aria-controls="panel1a-content" // Accessibility attribute
          id="panel1a-header" // Accessibility attribute
        >
          <Typography>{question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accordin;
