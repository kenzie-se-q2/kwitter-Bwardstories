import React from "react";
import { useStore } from "../store/store";

const UserProfile = () => {
  const selectedUser = useStore(state => state.selectedUser);
  return <div>{selectedUser}</div>;
};

export default UserProfile;
