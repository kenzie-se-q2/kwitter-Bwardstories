import React from "react";
import { useState } from "react";
import "../assets/index.css";
import { useStore } from "../store/store";
import { postMessage } from "../fetchRequests";

const MessageItem = () => {
  const [userInput, setUserInput] = useState("");
  const user = useStore(state => state.user);

  function handleChange(data) {
    setUserInput(data);
  }

  const handlePost = () => {
    postMessage(userInput, user.token);
    setUserInput("");
  };

  return (
    <section className="messageItem">
      <input
        type="text"
        placeholder="what are you thinking?"
        onChange={event => handleChange(event.target.value)}
        value={userInput}></input>
      <button className="post-message" onClick={handlePost}>
        post
      </button>
    </section>
  );
};

export default MessageItem;
