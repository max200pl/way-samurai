import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = this.props.authorizedUsrId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }

    this.props.getUserProfile(userId); // thunk
    this.props.getStatus(userId); // thunk
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    ); // получаем все пропсы через spread operator
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUsrId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),

  withRouter //* HOC для редиректа если пользователь не авторизирован
)(ProfileContainer);
