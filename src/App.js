import { Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import MessageList from "./views/MessageList";
import { useStore, GET_MESSAGES } from "./store/store";
import { getMessages } from "./fetchRequests";

function App() {
  const messageList = useStore(state => state.messageList);
  const dispatch = useStore(state => state.dispatch);

  useEffect(async () => {
    const messageData = await getMessages();
    dispatch({ type: GET_MESSAGES, payload: messageData.messages });
  });

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/messages" component={MessageList}></Route>
        <Route component={NotFound} />
      </Switch>
      {/* <MessageList /> */}
    </div>
  );
}

export default App;
