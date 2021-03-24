import React, { useState, useEffect } from "react";
import { useStore } from "../store/store";
import { getSelectedUser } from "../fetchRequests";
import defaultPic from "../images/kenzie.jpe";
import "../assets/index.css";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({});
  const user = useStore(state => state.user);
  const selectedUser = useStore(state => state.selectedUser);

  useEffect(() => {
    getSelectedUser(user.username).then(res => setUserProfile(res.user));
  }, []);

  console.log(userProfile);
  return (
    <div className="profileContainer">
      <img
        className="profilePic"
        src={user.pictureLocation ? user.pictureLocation : defaultPic}
        alt=""
      />
      <div className="profileBody">
        <div>NAME : {userProfile.displayName}</div>
        <div>
          About Me :
          {userProfile.about
            ? userProfile.about
            : " One thing about me, I haven't gotten around to updating my about me info yet"}
        </div>
        <div>Profile Birth : {userProfile.createdAt}</div>
      </div>
    </div>
  );
};

export default UserProfile;
