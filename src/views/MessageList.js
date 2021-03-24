// TODO: Create a MessageList to display messages
import React, { useEffect } from "react";
import Message from "../components/Message";
import "../assets/index.css";
import { useStore, GET_MESSAGES } from "../store/store";
import { getMessages } from "../fetchRequests";
import "bootstrap/dist/css/bootstrap.min.css";

const MessageList = () => {
  const messageList = useStore(state => state.messageList);
  const user = useStore(state => state.user);
  const dispatch = useStore(state => state.dispatch);

  useEffect(() => {
    async function fetchData() {
      const messageData = await getMessages();
      dispatch({ type: GET_MESSAGES, payload: messageData.messages });
    }
    fetchData();
  }, [dispatch, messageList]);

  return (
    <section className="messageList">
      {messageList.map(messageData => (
        <Message
          likeId={messageData.likes.map(like => {
            if (like.username === user.username) {
              return like.id;
            } else return "notLiked";
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
