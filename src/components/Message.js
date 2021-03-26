import React, { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/index.css";
import { likeMessage, removeLike, baseURL } from "../fetchRequests";
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
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255, 255, 255, 0.15)",
    },
    content: {
      top: "30%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "30%",
      height: "40%",
      transform: "translate(-40%, -10%)",
    },
  };

  const handleProfileClick = () => {
    getSelectedUser(messageData.username).then(data =>
      dispatch({ type: SELECTED_USER, payload: data })
    );
    dispatch({ type: OPEN_MODAL });
    console.log(selectedUser);
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
    dispatch({ type: CLOSE_MODAL });
  };

  useEffect(() => {}, [likes]);

  return (
    <div className="messageCardContainer">
      <Card
        className="text-center"
        style={{
          margin: "2%",
          borderRadius: "2%",
          boxShadow: "8px 8px black",
          height: "200px",
        }}>
        <Card.Body>
          <Card.Text className="messageUsername">
            {messageData.username}
          </Card.Text>
          <Card.Text className="messageMessage">{messageData.text}</Card.Text>
          <Card.Text className="messageLikes">Likes: {likes}</Card.Text>
          <Button className="likeButton" variant="primary" onClick={handleLike}>
            Like
          </Button>
          <Button
            className="unlikeButton"
            variant="primary"
            onClick={handleRemoveLike}>
            unLike
          </Button>
          <Button
            size="sm"
            className="infoButton"
            variant="primary"
            onClick={handleProfileClick}>
            View User Info
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          {messageData.createdAt.slice(0, 10)}
        </Card.Footer>
      </Card>
      <Modal style={customStyles} isOpen={isModalOpen}>
        <div className="modalContentsContainer">
          <img
            src={`${baseURL}users/${selectedUser.user.username}/picture`}
            alt=""
          />
          <p>Name : {selectedUser.user.username}</p>
          <p>AKA : {selectedUser.user.displayName}</p>
          <p>About Me : {selectedUser.user.about}</p>
          <p>User Since : {selectedUser.user.createdAt.slice(0, 10)} </p>
          <p>Last Update : {selectedUser.user.updatedAt.slice(0, 10)}</p>
          <button className="modalButton" onClick={closeModal}>
            X
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Message;
