import React from "react";
import "../assets/index.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Message = props => {
  const { messageData } = props;
  return (
    <Card className="text-center">
      <Card.Header>UserName: {messageData.username}</Card.Header>
      <Card.Body>
        <Card.Text>message: {messageData.text}</Card.Text>
        <Card.Text>Date Sent: {messageData.createdAt}</Card.Text>
        <Card.Text>Likes: {messageData.likes.length}</Card.Text>
        <Button variant="primary">Like</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default Message;
