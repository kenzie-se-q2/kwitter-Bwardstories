const baseURL = "http://kwitter-api-b.herokuapp.com";

export const loginRequest = (username, password) => {
  return fetch(baseURL + "auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then(res => res.json());
};

export const logoutRequest = token => {
  return fetch(baseURL + "auth/logout", {
    headers: { Authorization: "Bearer " + token },
  }).then(res => res.json());
};

export const getMessages = () => {
  return fetch(baseURL + "/messages", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then(res => res.json());
};

export const createNewUser = (username, displayName, password) => {
  return fetch(baseURL + "/users", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      username,
      displayName,
      password,
    }),
  }).then(res => res.json());
};
