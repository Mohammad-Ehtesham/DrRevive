import * as React from "react";
import think from "../assets/think.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import "./feedback.css"; // Import your CSS file
import Accordin from "./Accordin";

export function MediaCard() {
  return (
    <Card className="cardd">
      <CardMedia sx={{ height: 140 }} image={think} title="thinking" />
      <CardContent>
        <form noValidate autoComplete="off">
          <FormControl className="form">
            <OutlinedInput placeholder="Ask your question " />
          </FormControl>
        </form>
      </CardContent>
    </Card>
  );
}

const Feedback = () => {
  const FAQ = [
    {
      qa: "How do I schedule an appointment?",
      ans: "You can schedule an appointment by calling our office at +91 6263****9 or using our online booking system on the Appointments Page . We’ll confirm your appointment via email or SMS.",
    },
    {
      qa: "Do you accept insurance?",
      ans: "Yes, we accept most major insurance plans. To verify whether we accept your specific plan, please contact our billing department at [Billing Phone Number] or check our Insurance Page .",
    },
    {
      qa: "What should I do in case of a medical emergency?",
      ans: "For life-threatening emergencies, call 911 or go to the nearest emergency room immediately. For urgent but non-life-threatening issues, you can contact our office during business hours or use our after-hours hotline at [Emergency Phone Number].",
    },
    {
      qa: "What services does your medical facility offer?",
      ans: "Our medical facility provides a wide range of services, including primary care, specialist consultations, diagnostic tests, preventive care, and emergency services. We also offer telemedicine appointments and a secure chat app for remote consultations. For a full list of services, please visit our Services Page .",
    },
  ];
  return (
    <>
      <div className="feedback">
        <div className="coment">
          <p className="textt">Feel Free to ask us</p>
          <MediaCard />
        </div>
        <div className="accordin">
          {FAQ.map((item, index) => (
            <Accordin key={index} question={item.qa} answer={item.ans} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Feedback;
