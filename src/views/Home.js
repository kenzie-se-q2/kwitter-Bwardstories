import React from "react";
import MessageList from "./MessageList";
import { useStore } from "../store/store";
import RandomUserCarousel from "./RandomUserCarousel";
import Menu from "../components/Menu";
import "../assets/index.css";

function Home(props) {
  const user = useStore(state => state.user);
  return (
    <section className="homePage">
      <div className="leftContainer">
        <Menu />
      </div>
      <div className="middleContainer">
        <h1>Kwitter</h1>
        <h1>Single Message Component Will Go Here</h1>
        <MessageList />
      </div>
      <div className="rightContainer">
        <RandomUserCarousel />
      </div>
    </section>
  );
}

export default Home;
