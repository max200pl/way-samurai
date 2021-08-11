import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unFollowAC,
} from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) =>
  // передаем данные из state в Users
  {
    return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
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
      setCurrentPage: (pageNumber) => {
        dispatch(setCurrentPageAC(pageNumber));
      },
      setTotalUsersCount: (totalCount) => {
        dispatch(setTotalUsersCountAC(totalCount));
      },
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Users);
