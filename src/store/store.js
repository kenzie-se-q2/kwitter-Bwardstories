import create from "zustand";
import { devtools, redux } from "zustand/middleware";

// define the store's initial state
const initialState = {
  user: {},
  messages: [],
  messageList: [],
  userList: [],
  selectedUser: {},
};

// set action types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GET_MESSAGES = "GET_MESSAGES";
export const RANDOM_USERS = "RANDOM_USERS";
export const SELECTED_USER = "SELECTED_USER";

// define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        user: action.payload,
      };
    case LOGOUT:
      return { user: {} };
    case GET_MESSAGES:
      return { messageList: action.payload };
    case RANDOM_USERS:
      return { userList: action.payload };
    case SELECTED_USER:
      return { selectedUser: action.payload };
    default:
      return state;
  }
};

// create useStore hook
export const useStore = create(devtools(redux(reducer, initialState)));
