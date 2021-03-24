import React from "react";
import MessageList from "./MessageList";
import { useStore } from "../store/store";
import RandomUserCarousel from "../components/RandomUserCarousel";
import Menu from "../components/Menu";
import "../assets/index.css";
// import MessageItem from "../components/MessageItem";

function Home() {
  const user = useStore((state) => state.user);
  console.log(user.token);

  return (
    <section className="homePage">
      <div className="leftContainer">
        <Menu />
      </div>
      <div className="middleContainer">
        <h1>Kwitter</h1>
        <h1>Single Message Component Will Go Here</h1>
        {/* <MessageItem /> */}
        <MessageList />
      </div>
      <div className="rightContainer">
        <RandomUserCarousel />
      </div>
    </section>
  );
}

export default Home;
