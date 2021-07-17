import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";

const App = (props) =>
{
  return (

    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route exact path="/dialogs" render={() =>
          <Dialogs
            dialogPage={props.state.dialogPage}
            dispatch={props.dispatch}
          />} />
        <Route exact path="/profile" render={() =>
          <Profile
            profilePage={props.state.profilePage}
            dispatch={props.dispatch}
          />} />
      </div>
      <footer className="footer"></footer>
    </div>

  );
};

export default App;
