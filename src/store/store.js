import create from "zustand";
import { devtools, redux } from "zustand/middleware";

// define the store's initial state
const initialState = { user: { token: "" }, messages: [], messageList: [] };

// set action types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GET_MESSAGES = "GET_MESSAGES";

// define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case LOGOUT:
      return { user: {} };
    case GET_MESSAGES:
      return { messageList: action.payload };
    default:
      return state;
  }
};

// create useStore hook
export const useStore = create(devtools(redux(reducer, initialState)));
