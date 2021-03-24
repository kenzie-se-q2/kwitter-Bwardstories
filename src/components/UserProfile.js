import React, { useState, useEffect } from "react";
import { useStore } from "../store/store";
import { getSelectedUser, postPicture } from "../fetchRequests";
import defaultPic from "../images/kenzie.jpe";
import "../assets/index.css";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({});
  const [picture, setPicture] = useState(null);
  const user = useStore(state => state.user);
  const selectedUser = useStore(state => state.selectedUser);

  useEffect(() => {
    getSelectedUser(user.username).then(res => setUserProfile(res.user));
  }, [picture, postPicture]);

  const handleSubmitPhoto = e => {
    postPicture(user.token, user.username, picture);
  };

  return (
    <div className="profileContainer">
      <img
        className="profilePic"
        src={
          userProfile.pictureLocation
            ? `http://kwitter-api-b.herokuapp.com/users/${userProfile.username}/picture`
            : defaultPic
        }
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
        <input type="file" onChange={e => setPicture(e.target.files[0])} />
        <button onClick={handleSubmitPhoto}>Update Photo</button>
      </div>
    </div>
  );
};

export default UserProfile;
