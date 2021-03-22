import React, { useEffect } from "react";
import Home from "./views/Home";
import LoginScreen from "./views/LoginScreen";
import NotFound from "./views/NotFound";
import NewUser from "./views/NewUser";
import SelectedUserProfile from "./components/SelectedUserProfile";
import { Switch, Route } from "react-router-dom";
import { useStore, RANDOM_USERS } from "./store/store";
import { getUserList } from "./fetchRequests";
import UserProfile from "./components/UserProfile";

function App() {
  const dispatch = useStore(state => state.dispatch);

  useEffect(() => {
    async function fetchData() {
      const userListData = await getUserList();
      dispatch({ type: RANDOM_USERS, payload: userListData.users });
    }
    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route path="/home" component={Home} />
        <Route path="/createNewUser" component={NewUser} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/selectedUserProfile" component={SelectedUserProfile} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
