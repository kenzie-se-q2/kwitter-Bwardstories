import React from "react";
import Login from "../components/Login";
import { useStore } from "../store/store";
import "../assets/index.css";

const LoginScreen = () => {
  const user = useStore(state => state.user);
  return (
    <section className="">
      <h2>Login Here</h2>
      {!user.token && <Login />}
      <div></div>
      <div></div>
    </section>
  );
};

export default LoginScreen;
