import React, { useEffect } from "react";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import MessageList from "./views/MessageList";
import NewUser from "./views/NewUser";
import { Switch, Route } from "react-router-dom";
import { useStore, GET_MESSAGES } from "./store/store";
import { getMessages } from "./fetchRequests";

function App() {
  const dispatch = useStore(state => state.dispatch);

  useEffect(async () => {
    const messageData = await getMessages();
    dispatch({ type: GET_MESSAGES, payload: messageData.messages });
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/messages" component={MessageList}></Route>
        <Route component={NotFound} />
      </Switch>
      <NewUser></NewUser>
    </div>
  );
}

export default App;
