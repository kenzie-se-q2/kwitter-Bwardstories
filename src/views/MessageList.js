// TODO: Create a MessageList to display messages
import React, { useEffect, useState } from "react";
import Message from "../components/Message";
import "../assets/index.css";
import { useStore } from "../store/store";

const MessageList = () => {
  const [messageWall, setMessageWall] = useState([]);

  const messageList = useStore(state => state.messageList);

  // useEffect(async () => {
  //   const response = await fetch(
  //     "http://kwitter-api-b.herokuapp.com/messages",
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     }
  //   );
  //   const messages = await response.json();
  //   setMessageWall(messages.messages);
  //   messageWall.map(message => console.log(message));
  // }, []);
  console.log(messageList);

  return (
    <section className="messageList">
      {messageList.map(messageData => (
        <Message messageData={messageData} />
      ))}
    </section>
  );
};

export default MessageList;
