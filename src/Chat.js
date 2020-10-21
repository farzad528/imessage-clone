import { IconButton } from "@material-ui/core";
import { MicNone } from "@material-ui/icons";
import React, { useState } from "react";
import "./Chat.css";

function Chat() {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();

    // Firebase magic...

    setInput("");
  };
  return (
    <div className="chat">
      {/* chat header */}
      <div className="chat__header">
        <h4>
          To: <span className="chat__name"> Channel Name</span>
        </h4>
        <strong>details</strong>
      </div>

      <div className="chat__messages">
          <h2>I am a Message</h2>
          <h2>I am a Message</h2>
          <h2>I am a Message</h2>
          <h2>I am a Message</h2>
          <h2>I am a Message</h2>
      </div>      
      <div className="chat__input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="iMessage"
            type="text"
          />
          <button onClick={sendMessage}>Send Message</button>
        </form>
        <IconButton>
          <MicNone className="chat__mic" />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;