import * as React from "react";
import think from "../assets/think.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import "./feedback.css"; // Import your CSS file

export function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={think} title="thinking" />
      <CardContent>
        <form noValidate autoComplete="off">
          <FormControl sx={{ width: "30ch" }}>
            <OutlinedInput placeholder="Ask your question " />
          </FormControl>
        </form>
      </CardContent>
    </Card>
  );
}

const Feedback = () => {
  return (
    <>
      <div className="feedback">
        <div className="coment">
          <p className="textt">Feel Free to ask us</p>
          <div className="content">
            <MediaCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
