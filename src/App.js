import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) =>
{
  return (

    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route exact path="/dialogs" render={() =>
          <DialogsContainer />} />
        <Route exact path="/profile" render={() =>
          <ProfileContainer />} />
        <Route exact path="/users" render={() =>
          <UsersContainer />} />
      </div>
      <footer className="footer"></footer>
    </div>

  );
};

export default App;
