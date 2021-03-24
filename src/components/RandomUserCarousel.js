import React from "react";
import { useStore } from "../store/store";
import Carousel from "react-bootstrap/Carousel";
import defaultPic from "../images/defaultProfile.png";
import "../assets/index.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const RandomUserCarousel = () => {
  const userList = useStore(state => state.userList);

  return (
    <>
      <Carousel className="carouselContainer">
        {userList.map((user, index) => (
          <Carousel.Item key={index}>
            <Card className="userCards">
              <Card.Img
                variant="top"
                src={
                  user.pictureLocation
                    ? `http://kwitter-api-b.herokuapp.com/users/${user.username}/picture`
                    : defaultPic
                }
                style={{ height: "340px" }}
              />
              <Card.Body>
                <Card.Title>{user.displayName}</Card.Title>
                <Card.Text style={{ height: "80px" }}>
                  {user.about
                    ? user.about
                    : "One thing about me, I haven't gotten around to updating my about me info yet"}
                </Card.Text>
                <Button variant="primary">See Profile</Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default RandomUserCarousel;
