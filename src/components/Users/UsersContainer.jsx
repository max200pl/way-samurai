import { connect } from "react-redux";
import { followAC, setUsersAC, unFollowAC } from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) =>
  // передаем данные из state в Users
  {
    return {
      users: state.usersPage.users,
    };
  };

let mapDispatchToProps = (dispatch) =>
  // компонента Users получает callback функции для управления State из контейнерной функции
  {
    return {
      follow: (userId) => {
        dispatch(followAC(userId));
      },
      unFollow: (userId) => {
        dispatch(unFollowAC(userId));
      },
      setUsers: (users) => {
        dispatch(setUsersAC(users));
      },
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Users);
