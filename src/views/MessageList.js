// TODO: Create a MessageList to display messages
import React from "react";
import Message from "../components/Message";
import "../assets/index.css";
import { useStore } from "../store/store";

const MessageList = () => {
  const messageList = useStore(state => state.messageList);

  return (
    <section className="messageList">
      {messageList.map((messageData, index) => (
        <Message messageData={messageData} key={index} />
      ))}
    </section>
  );
};

export default MessageList;
