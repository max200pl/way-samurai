import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

// withRouter компонента высшего порядка ==> возвращает новую компоненту с данными URL строки браузера
let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataContainerComponent // получает данные из Store и уже имеем данные с URL
);
