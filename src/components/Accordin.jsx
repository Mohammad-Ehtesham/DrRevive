import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordin = () => {
  return (
    <div style={{ margin: "20px" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />} // Icon for expand/collapse
          aria-controls="panel1a-content" // Accessibility attribute
          id="panel1a-header" // Accessibility attribute
        >
          <Typography>Accordion Header 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is the content of the first accordion panel. You can add any
            content here.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion Header 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is the content of the second accordion panel. Add more details
            here.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accordin;
