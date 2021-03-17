// TODO: Create a MessageList to display messages
import React from "react";
import Message from "../components/Message";
import "../assets/index.css";
import { useStore } from "../store/store";

const MessageList = () => {
  const messageList = useStore(state => state.messageList);

  return (
    <section className="messageList">
      {messageList.map(messageData => (
        <Message messageData={messageData} />
      ))}
    </section>
  );
};

export default MessageList;
