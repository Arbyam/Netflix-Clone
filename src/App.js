import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { auth } from "./firebase";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { useDispatch, useSelector} from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
     const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if (userAuth){
       
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }else{
        //logged out
        dispatch(logout())
      }
    });

    return unsubscribe;
  },[dispatch]);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path='/profile'>
              <ProfileScreen/>
            </Route>
            <Route exact path="/">
              <HomeScreen></HomeScreen>
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
