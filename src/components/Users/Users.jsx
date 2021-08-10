import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://images.newscientist.com/wp-content/uploads/2017/04/13170132/h4130415-dmitry_mendeleyev_russian_chemist.jpg",
        followed: false,
        fullName: "Dmitry",
        status: "I am a boss",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 2,
        photoUrl:
          "https://images.newscientist.com/wp-content/uploads/2017/04/13170132/h4130415-dmitry_mendeleyev_russian_chemist.jpg",
        followed: true,
        fullName: "Max",
        status: "I am a boss too",
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: 3,
        photoUrl:
          "https://images.newscientist.com/wp-content/uploads/2017/04/13170132/h4130415-dmitry_mendeleyev_russian_chemist.jpg",
        followed: false,
        fullName: "Andrey",
        status: "I am a boss too",
        location: { city: "Kiev", country: "Ukraine" },
      },
    ]);
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} alt="" className={styles.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unFollow(u.id);
                  }}
                >
                  UnFollow
                </button>
              ) : (
                <button
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
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
          </span>
          <span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
