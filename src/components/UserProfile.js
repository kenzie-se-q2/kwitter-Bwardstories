import React, { useState, useEffect } from "react";
import {
  useStore,
  PROFILE_PIC,
  OPEN_MODAL2,
  CLOSE_MODAL2,
} from "../store/store";
import { getSelectedUser, postPicture, patchUser } from "../fetchRequests";
import defaultPic from "../images/defaultProfile.png";
import "../assets/index.css";
import Modal from "react-modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({});
  const [picture, setPicture] = useState(null);
  const [about, setAbout] = useState("");
  const [displayName, setDisplayName] = useState("");
  const profilePic = useStore(state => state.profilePic);
  const user = useStore(state => state.user);
  const isModal2Open = useStore(state => state.isModal2Open);
  const dispatch = useStore(state => state.dispatch);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "20%",
      height: "40%",
    },
  };

  const handleSubmitPhoto = e => {
    postPicture(user.token, user.username, picture);
    dispatch({
      type: PROFILE_PIC,
      payload: `http://kwitter-api-b.herokuapp.com/users/${user.username}/picture`,
    });
  };

  useEffect(() => {
    getSelectedUser(user.username).then(res => setUserProfile(res.user));
    handleSubmitPhoto();
  }, [displayName, about]);

  const handleSubmitAbout = e => {
    e.preventDefault();
    const newUserInfo = {
      about,
    };
    patchUser(user.token, user.username, newUserInfo);
    setAbout("");
  };

  const handleSubmitDisplayName = e => {
    e.preventDefault();
    const newUserInfo = {
      displayName,
    };
    patchUser(user.token, user.username, newUserInfo);
    setDisplayName("");
  };

  return (
    <div className="profileContainer">
      <img
        className="profilePic"
        src={userProfile.pictureLocation ? profilePic : defaultPic}
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
        <input type="file" onChange={e => setPicture(e.target.files[0])} />
        <button onClick={handleSubmitPhoto}>Update Photo</button>
        <button onClick={() => dispatch({ type: OPEN_MODAL2 })}>
          Change User Info
        </button>
      </div>
      <Modal style={customStyles} isOpen={isModal2Open}>
        <div>
          <button
            className="modalButton"
            onClick={() => {
              dispatch({ type: CLOSE_MODAL2 });
            }}>
            X
          </button>
          <Form onSubmit={handleSubmitAbout}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>About</Form.Label>
              <Form.Control
                onChange={e => setAbout(e.target.value)}
                value={about}
                type="text"
                placeholder="About me..."
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <Form onSubmit={handleSubmitDisplayName}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Display Name</Form.Label>
              <Form.Control
                onChange={e => setDisplayName(e.target.value)}
                value={displayName}
                type="text"
                placeholder="my real name"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default UserProfile;
