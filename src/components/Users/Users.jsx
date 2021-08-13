import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/img/avatar.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    // в зависимости от количества страниц отображаем количество span на странице
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && styles.selectPage} // если текущая страница равна номеру в span тогда добавляем к нец стили
              onClick={(e) => {
                props.onPageChanged(p); //получем данные на какую страницу нажали
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt=""
                  className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)} // если в массиве хоть id на которую нажали есть в массиве true и кнопка disable
                  onClick={() => {
                    props.unFollow(u.id);
                  }}
                >
                  UnFollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)} // если в массиве хоть id на которую нажали есть в массиве true и кнопка disable
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>

          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
          </span>
          <span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
