import React from "react";
import Login from "../components/Login";
import { useStore } from "../store/store";
import "../assets/loginScreen.css";

const LoginScreen = () => {
  const user = useStore(state => state.user);
  return (
    <div className="loginScreen">
      <section className="loginContainer">
        <h2>Welcome To</h2>
        <h2>Kenzer</h2>
        {!user.token && <Login />}
      </section>
    </div>
  );
};

export default LoginScreen;
