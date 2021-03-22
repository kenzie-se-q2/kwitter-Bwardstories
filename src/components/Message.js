import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../assets/index.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { likeMessage, removeLike } from "../fetchRequests";
import { useStore, SELECTED_USER } from "../store/store";
import { getSelectedUser } from "../fetchRequests";

const Message = props => {
  const history = useHistory();
  const [liked, setLiked] = useState(false);
  const { messageData, messageId, likeId } = props;
  const token = useStore(state => state.user.token);
  const dispatch = useStore(state => state.dispatch);

  const handleHistory = () => {
    history.push("/selectedUserProfile");
  };

  const handleProfileClick = async () => {
    let selectedUser = await getSelectedUser(messageData.username);
    dispatch({ type: SELECTED_USER, payload: selectedUser });
    handleHistory();
    console.log(selectedUser);
  };

  const handleLike = () => {
    if (liked === true) {
      return;
    }
    likeMessage(token, messageId);
    setLiked(true);
  };
  console.log(liked);
  return (
    <Card className="text-center">
      <Card.Header>UserName: {messageData.username}</Card.Header>
      <Card.Body>
        <Card.Text>message: {messageData.text}</Card.Text>
        <Card.Text>Date Sent: {messageData.createdAt}</Card.Text>
        <Card.Text>Likes: {messageData.likes.length}</Card.Text>
        <Button variant="primary" onClick={handleLike}>
          Like
        </Button>
        <Button variant="primary" onClick={e => removeLike(token, likeId)}>
          unLike
        </Button>
        <Button
          variant="primary"
          onClick={e => handleProfileClick(messageData.username)}>
          View Profile
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default Message;
