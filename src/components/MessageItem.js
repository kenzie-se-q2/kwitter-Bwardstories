import React from "react";
import { useState } from "react";
//import Message from "../components/Message";
import "../assets/index.css";
import { useStore } from "../store/store";
import { postMessage } from "../fetchRequests";

const MessageItem = () => {
  const [userInput, setUserInput] = useState("");
  const user = useStore((state) => state.user);

  function handleChange(data) {
    setUserInput(data);
  }

  return (
    <section className="messageItem">
      <input
        type="text"
        placeholder="what are you thinking?"
        onChange={(event) => handleChange(event.target.value)}
        value={userInput}
      ></input>
      <button
        className="post-message"
        onClick={() => postMessage(userInput, user.token)}
      >
        post
      </button>
    </section>
  );
};

export default MessageItem;
