import React, { useState, useEffect } from "react";
import "../assets/index.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { likeMessage, removeLike } from "../fetchRequests";
import {
  useStore,
  SELECTED_USER,
  OPEN_MODAL,
  CLOSE_MODAL,
} from "../store/store";
import { getSelectedUser } from "../fetchRequests";
import Modal from "react-modal";

const Message = props => {
  const { messageData, messageId, likeId } = props;
  const [likes, setLikes] = useState(messageData.likes.length);
  const token = useStore(state => state.user.token);
  const dispatch = useStore(state => state.dispatch);
  const isModalOpen = useStore(state => state.isModalOpen);
  const selectedUser = useStore(state => state.selectedUser);
  const customStyles = {
    content: {
      top: "20%",
      left: "30%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "40%",
      height: "70%",
      transform: "translate(-40%, -10%)",
    },
  };

  const handleProfileClick = () => {
    getSelectedUser(messageData.username).then(data =>
      dispatch({ type: SELECTED_USER, payload: data })
    );
    dispatch({ type: OPEN_MODAL });
  };

  const handleLike = () => {
    likeMessage(token, messageId).then(setLikes(likes => likes + 1));
  };

  const handleRemoveLike = () => {
    let currentLike = likeId.filter(like => like !== "notLiked");
    if (!currentLike) {
      return;
    }
    removeLike(token, currentLike);
    setLikes(likes => likes - 1);
  };

  const closeModal = () => {
    dispatch({ type: SELECTED_USER, payload: "" });
    dispatch({ type: CLOSE_MODAL });
  };

  useEffect(() => {}, [likes]);

  return (
    <Card
      className="text-center"
      style={{
        margin: "2%",
        borderRadius: "2%",
        boxShadow: "8px 8px black",
      }}>
      <Modal style={customStyles} isOpen={isModalOpen}>
        <div>
          <button onClick={closeModal}>CLOSE</button>
          {JSON.stringify(selectedUser)}
        </div>
      </Modal>
      <Card.Header>UserName: {messageData.username}</Card.Header>
      <Card.Body>
        <Card.Text>message: {messageData.text}</Card.Text>
        <Card.Text>Date Sent: {messageData.createdAt}</Card.Text>
        <Card.Text>Likes: {likes}</Card.Text>
        <Button variant="primary" onClick={handleLike}>
          Like
        </Button>
        <Button variant="primary" onClick={handleRemoveLike}>
          unLike
        </Button>
        <Button variant="primary" onClick={handleProfileClick}>
          View Profile
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default Message;
