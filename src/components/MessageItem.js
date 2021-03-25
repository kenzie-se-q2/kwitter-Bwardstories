import React, { useState, useEffect } from "react";
import "../assets/index.css";
import { useStore } from "../store/store";
import { postMessage, baseURL } from "../fetchRequests";
import defaultPic from "../images/defaultProfile.png";

const MessageItem = () => {
  const [userInput, setUserInput] = useState("");
  const user = useStore(state => state.user);
  const [profilePic, setProfilePic] = useState("");
  function handleChange(data) {
    setUserInput(data);
  }

  const handlePost = () => {
    postMessage(userInput, user.token);
    setUserInput("");
  };

  useEffect(() => {
    fetch(`${baseURL}users/${user.username}/picture`).then(res =>
      setProfilePic(res)
    );
  }, []);

  return (
    <section className="messageItem">
      <div className="messageInputContainer">
        {profilePic.status === 200 ? (
          <img src={profilePic.url} alt="" />
        ) : (
          <img src={defaultPic} alt="" />
        )}
        <input
          style={{ border: "none" }}
          type="text"
          placeholder="what are you thinking?"
          onChange={event => handleChange(event.target.value)}
          value={userInput}></input>
        <button className="post-message" onClick={handlePost}>
          Post
        </button>
      </div>
    </section>
  );
};

export default MessageItem;
