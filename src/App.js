import React, { useEffect } from "react";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import MessageList from "./views/MessageList";
import NewUser from "./views/NewUser";
import { Switch, Route } from "react-router-dom";
import { useStore, GET_MESSAGES, RANDOM_USERS } from "./store/store";
import { getMessages, getUserList } from "./fetchRequests";
import RandomUserCarousel from "./views/RandomUserCarousel";

function App() {
  const dispatch = useStore(state => state.dispatch);

  useEffect(async () => {
    const messageData = await getMessages();
    dispatch({ type: GET_MESSAGES, payload: messageData.messages });
  }, []);

  useEffect(async () => {
    const userListData = await getUserList();
    dispatch({ type: RANDOM_USERS, payload: userListData.users });
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/messages" component={MessageList}></Route>
        <Route component={NotFound} />
      </Switch>
      <NewUser></NewUser>
      <RandomUserCarousel />
    </div>
  );
}

export default App;
