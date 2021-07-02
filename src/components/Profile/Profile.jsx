import React from "react";
import MyPost from "../MyPost/MyPost";

import s from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={s.profile}>
      <a href="#s">contentment</a>

      <MyPost />
    </div>
  );
};

export default Profile;
