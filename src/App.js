import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, withRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/login/login";
import { connect } from "react-redux";
import { compose } from "redux";
import { Component } from "react";
import { initializeApp } from "./redux/app-reducer";
import PreLouder from "./components/common/Preloader/Preloader";
class App extends Component
{
  componentDidMount()
  {
    this.props.initializeApp();
  }

  render()
  {

    if (!this.props.initialized) {
      return <PreLouder />
    }

    return (

      <div className="app-wrapper" >
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route exact path="/dialogs" render={() =>
            <DialogsContainer />} />
          <Route exact path="/profile/:userId?" render={() =>
            <ProfileContainer />} />
          <Route exact path="/users" render={() =>
            <UsersContainer />} />
          <Route exact path="/login" render={() =>
            <LoginPage />} />
        </div>
        <footer className="footer"></footer>
      </div>

    );
  }
};

const mapStateToProps = (state) =>
({
  initialized: state.app.initialized
})
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

