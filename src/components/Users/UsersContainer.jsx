import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  toggleFollowingProgress,
  unFollow,
  requestUsers,
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import PreLouder from "../common/Preloader/Preloader";
import { compose } from "redux";
import {
  getPageSize,
  getUsers,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  /*  constructor(props) { // по умолчанию за кадром 
       super(props);
     } */

  componentDidMount() {
    // данный метод вызывается после полной отрисовки компоненты
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    // получем номер страницы по клику onClick у span
    this.props.requestUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        <div>{this.props.isFetching ? <PreLouder /> : null}</div>
        <Users // прокидываем данные и callback function Users
          totalUsersCount={this.props.totalUsersCount} // всего пользователей
          pageSize={this.props.pageSize} // размер страницы
          currentPage={this.props.currentPage} // текущая страница
          onPageChanged={this.onPageChanged} // функция для выбора страницы
          users={this.props.users} // все пользователи в State которые пришли с API для отрисовки количества страниц
          unFollow={this.props.unFollow} //
          follow={this.props.follow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

/* let mapStateToProps = (state) =>
  // передаем данные из state в UsersContainer
  {
    return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching, // получение флага загрузки данных
      followingInProgress: state.usersPage.followingInProgress, // прокидываем данные для флага подписки пользователя в компоненту UsersContainer
    };
  };
 */

let mapStateToProps = (state) =>
  // передаем данные из state в UsersContainer
  {
    return {
      users: getUsers(state), // getUsers() это функция selector
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state), // получение флага загрузки данных
      followingInProgress: getFollowingInProgress(state), // прокидываем данные для флага подписки пользователя в компоненту UsersContainer
    };
  };

export default compose(
  //withAuthRedirect,
  /**
   * connect -- это функция которая создает контейнерную компоненту над презентационной
   * отрисует презентационную
   * получает данные Store через contextApi
   * закидывает в качестве props данные в презентационную через свойства функции mapStateToProps, mapDispatchToProps
   * если state изменился его часть тот объект который был скопирован, тогда перерисовывает презентационную компоненту и mapStateToProps вызывается по новой
   */

  connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers,
  })
)(UsersContainer);
