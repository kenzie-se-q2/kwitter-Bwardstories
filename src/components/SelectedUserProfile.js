import React from "react";
import { useStore } from "../store/store";

const SelectedUserProfile = () => {
  const selectedUser = useStore(state => state.selectedUser);
  console.log(selectedUser);
  return <div> {JSON.stringify(selectedUser)}</div>;
};

export default SelectedUserProfile;
