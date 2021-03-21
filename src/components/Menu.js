import React from "react";
import { Link } from "react-router-dom";
import { LOGOUT, useStore } from "../store/store";
import { logoutRequest } from "../fetchRequests";
import { useHistory } from "react-router-dom";

function Menu(props) {
  const history = useHistory();
  const user = useStore(state => state.user);
  const dispatch = useStore(state => state.dispatch);

  const handleHistory = () => {
    history.push("/");
  };

  const logout = e => {
    logoutRequest(user.token)
      .then(() => dispatch({ type: LOGOUT }))
      .then(handleHistory());
  };

  return (
    <div id="menu">
      <div id="menu-links">
        <Link to="/profile">Profile</Link>
        {user.token && <button onClick={logout}>Logout</button>}
      </div>
    </div>
  );
}

export default Menu;
