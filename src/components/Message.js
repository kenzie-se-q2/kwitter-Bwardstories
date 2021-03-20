import React from "react";
import "../assets/index.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { getUserList, likeMessage, removeLike } from "../fetchRequests";
import { useStore, SELECTED_USER } from "../store/store";
import { getSelectedUser } from "../fetchRequests";

const Message = (props) => {
  const { messageData, messageId, likeId } = props;
  const token = useStore((state) => state.user.token);
  const dispatch = useStore((state) => state.dispatch);

  const handleProfileClick = async () => {
    let selectedUser = await getSelectedUser(messageData.username);
    dispatch({ type: SELECTED_USER, payload: selectedUser });
  };

  return (
    <Card className="text-center">
      <Card.Header>UserName: {messageData.username}</Card.Header>
      <Card.Body>
        <Card.Text>message: {messageData.text}</Card.Text>
        <Card.Text>Date Sent: {messageData.createdAt}</Card.Text>
        <Card.Text>Likes: {messageData.likes.length}</Card.Text>
        <Button
          variant="primary"
          onClick={(e) => likeMessage(token, messageId)}
        >
          Like
        </Button>
        <Button variant="primary" onClick={(e) => removeLike(token, likeId)}>
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
