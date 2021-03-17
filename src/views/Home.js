import React from "react";
import Login from "../components/Login";
import Menu from "../components/Menu";
import { useStore } from "../store/store";

import "../assets/index.css";

function Home(props) {
  const user = useStore(state => state.user);
  return (
    <section className="homePage">
      <Menu />
      <h2>Your favorite microblogging platform</h2>
      {!user.token && <Login />}
      <div></div>
      <div></div>
    </section>
  );
}

export default Home;
