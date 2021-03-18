import React from "react";
import "../assets/index.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { likeMessage, removeLike } from "../fetchRequests";
import { useStore } from "../store/store";

const Message = props => {
  const { messageData, messageId, likeId } = props;
  const token = useStore(state => state.user.token);

  return (
    <Card className="text-center">
      <Card.Header>UserName: {messageData.username}</Card.Header>
      <Card.Body>
        <Card.Text>message: {messageData.text}</Card.Text>
        <Card.Text>Date Sent: {messageData.createdAt}</Card.Text>
        <Card.Text>Likes: {messageData.likes.length}</Card.Text>
        <Button variant="primary" onClick={e => likeMessage(token, messageId)}>
          Like
        </Button>
        <Button variant="primary" onClick={e => removeLike(token, likeId)}>
          unLike
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default Message;
