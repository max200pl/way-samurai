import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    this.props.getUserProfile(userId);
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
export default connect(mapStateToProps, { getUserProfile })(
  WithUrlDataContainerComponent // получает данные из Store и уже имеем данные с URL
);
