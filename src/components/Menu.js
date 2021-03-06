import React from "react";
import { Link } from "react-router-dom";
import { LOGOUT, useStore } from "../store/store";
import { logoutRequest } from "../fetchRequests";
import { useHistory } from "react-router-dom";

function Menu() {
  const history = useHistory();
  const user = useStore(state => state.user);
  const dispatch = useStore(state => state.dispatch);

  const handleHistory = () => {
    history.push("/");
  };

  const logout = () => {
    logoutRequest(user.token)
      .then(() => dispatch({ type: LOGOUT }))
      .then(handleHistory());
  };

  return (
    <div id="menu">
      <Link to="/home">Home</Link>
      <Link to="/profilepage">Profile</Link>
      {user.token && <Link onClick={logout}>Logout</Link>}
    </div>
  );
}

export default Menu;
