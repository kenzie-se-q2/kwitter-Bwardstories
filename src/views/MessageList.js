// TODO: Create a MessageList to display messages
import React, { useEffect } from "react";
import Message from "../components/Message";
import "../assets/index.css";
import { useStore, GET_MESSAGES } from "../store/store";
import { getMessages } from "../fetchRequests";
import "bootstrap/dist/css/bootstrap.min.css";

const MessageList = () => {

  const messageList = useStore(state => state.messageList);
  const username = useStore(state => state.user.username);
  const dispatch = useStore(state => state.dispatch);

  useEffect(async () => {
    const messageData = await getMessages();
    dispatch({ type: GET_MESSAGES, payload: messageData.messages });
  }, []);


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
