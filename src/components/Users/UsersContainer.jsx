import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleFollowingProgress,
  toggleIsFetching,
  unFollow,
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import PreLouder from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  /*  constructor(props) { // по умолчанию за кадром 
       super(props);
     } */

  componentDidMount() {
    // данный метод вызывается после полной отрисовки компоненты
    this.props.toggleIsFetching(true);
    axios
      .get(
        //получаем выбранную заданную изначально страницу и количество пользователей
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items); // получили пачку пользователей
        this.props.setTotalUsersCount(response.data.totalCount); // получаем всех пользователей (количество)
      });
  }

  onPageChanged = (pageNumber) => {
    // получем номер страницы по клику onClick у span
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber); // вызываем метод и передаем в dispatch и передаем номер текущей страницы на который нажали
    axios
      .get(
        // получаем данные по URL страницы которую получили с сервера
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items); // закидываем данные State по клику на номер страницы
      });
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
          toggleFollowingProgress={this.props.toggleFollowingProgress}
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
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  toggleFollowingProgress,
})(UsersContainer);
