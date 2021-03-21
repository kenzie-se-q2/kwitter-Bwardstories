import React, { useState } from "react";
import { getUser } from "../fetchRequests";
import { useStore } from "../store/store";

const UserProfile = () => {
  const selectedUser = useStore(state => state.selectedUser);
  return <div></div>;
};

export default UserProfile;
