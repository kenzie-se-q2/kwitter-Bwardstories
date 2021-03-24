import React from "react";
import UserProfile from "../components/UserProfile";
import { useStore } from "../store/store";
import RandomUserCarousel from "../components/RandomUserCarousel";
import Menu from "../components/Menu";
import "../assets/index.css";

const UserProfilePage = () => {
  const user = useStore(state => state.user);

  return (
    <section className="profilePage">
      <div className="leftContainer">
        <Menu />
      </div>
      <UserProfile />
      <div className="rightContainer">
        <RandomUserCarousel />
      </div>
    </section>
  );
};

export default UserProfilePage;
