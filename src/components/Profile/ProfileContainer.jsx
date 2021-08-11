import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.setUserProfile(response.data); // получили пачку пользователей
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />; // получаем все пропсы через spread operator
  }
}

let mapStateToProps = (state) => ({
  // когда функция возвращает объект нужно ставить скобки
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
