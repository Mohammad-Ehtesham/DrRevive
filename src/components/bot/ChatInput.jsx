import React, { useState } from "react";
import style from "./ChatInput.module.css"; // Adjust the path as necessary
import { IoSend } from "react-icons/io5";

const ChatInput = () => {
  const [text, settext] = useState("");
  return (
    <>
      <div className={style.chat}>
        <div className={style.chatbox}>
          <input
            type="text"
            value={text}
            placeholder="Ask Problem"
            onChange={(e) => settext(e.target.value)}
            className={style.input}
          />
          <button
            className={style.send}
            onClick={() => {
              if (text) {
                console.log("Sending message:", text);
                settext("");
              }
            }}
          >
            <IoSend size={50} className={style.icon} />{" "}
            {/* smaller size fits better */}
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatInput;
