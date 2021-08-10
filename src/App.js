import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

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
          <Profile />} />
        <Route exact path="/users" render={() =>
          <UsersContainer />} />
      </div>
      <footer className="footer"></footer>
    </div>

  );
};

export default App;
