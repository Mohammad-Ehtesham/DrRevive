import React from "react";
import BotNav from "./BotNav"; // Adjust the path as necessary
import ChatInput from "./ChatInput"; // Adjust the path as necessary
import { Box } from "@mui/material"; // Adjust the import based on your project structure

const Bot = () => {
  return (
    <>
      <BotNav />
      <Box sx={{ p: 2 }}>
        <ChatInput />
      </Box>
    </>
  );
};

export default Bot;
