import React, { useState } from "react";
import { loginRequest } from "../fetchRequests";
import { Link } from "react-router-dom";
import { LOGIN, useStore } from "../store/store";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const dispatch = useStore(state => state.dispatch);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleHistory = () => {
    history.push("/home");
  };

  const handleLogin = e => {
    e.preventDefault();
    loginRequest(formData.username, formData.password)
      .then(userData => dispatch({ type: LOGIN, payload: userData }))
      .then(handleHistory());
  };

  const handleChange = e => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData(state => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <>
      <form id="login-form" onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          autoFocus
          required
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          required
          onChange={handleChange}
        />
        <button type="submit" onSubmit={handleLogin}>
          Login
        </button>

        <p>
          Click
          <Link to="/createNewUser" c>
            Here
          </Link>
          to sign up
        </p>
      </form>
    </>
  );
}

export default Login;
