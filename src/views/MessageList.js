// TODO: Create a MessageList to display messages
import React from "react";
import Message from "../components/Message";
import "../assets/index.css";
import { useStore } from "../store/store";

const MessageList = () => {
  const messageList = useStore((state) => state.messageList);
  const username = useStore((state) => state.user.username);
  const selectedUser = useStore((state) => state.selectedUser);
  return (
    <section className="messageList">
      {messageList.map((messageData) => (
        <Message
          likeId={messageData.likes.map((like) => {
            if (like.username === username) {
              console.log(like.id);
              return like.id;
            }
          })}
          messageData={messageData}
          messageId={messageData.id}
          key={messageData.id}
        />
      ))}
    </section>
  );
};

export default MessageList;
