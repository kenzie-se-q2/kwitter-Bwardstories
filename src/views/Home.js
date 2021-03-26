import React from "react";
import MessageList from "./MessageList";
import RandomUserCarousel from "../components/RandomUserCarousel";
import Header from "../components/Header";
import Menu from "../components/Menu";
import "../assets/index.css";
import MessageItem from "../components/MessageItem";

function Home() {
  return (
    <section className="homePage">
      <div className="leftContainer">
        <Menu />
      </div>
      <div className="middleContainer">
        <Header />
        <MessageItem />
        <MessageList />
      </div>
      <div className="rightContainer">
        <RandomUserCarousel />
      </div>
    </section>
  );
}

export default Home;
