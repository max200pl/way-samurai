import { connect } from "react-redux";
import {
  follow,
  getUsers,
  setCurrentPage,
  toggleFollowingProgress,
  unFollow,
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import PreLouder from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  /*  constructor(props) { // по умолчанию за кадром 
       super(props);
     } */

  componentDidMount() {
    // данный метод вызывается после полной отрисовки компоненты
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    // получем номер страницы по клику onClick у span
    this.props.getUsers(pageNumber, this.props.pageSize);
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

let mapStateToProps = (state) =>
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

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
})(UsersContainer);
