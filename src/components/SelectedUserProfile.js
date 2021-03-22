import React from "react";
import { useStore } from "../store/store";
import Modal from "react-modal";

const SelectedUserProfile = () => {
  const selectedUser = useStore(state => state.selectedUser);
  console.log(selectedUser);
  return (
    <div className="selectedUserProfile"> {JSON.stringify(selectedUser)}</div>
  );
};

export default SelectedUserProfile;
