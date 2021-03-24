import React from "react";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="Navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profilepage">My Profile</Link>{" "}
        </li>
        <li>
          <Link to="/contact">Contacts</Link>{" "}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
