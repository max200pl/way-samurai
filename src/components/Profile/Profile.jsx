import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPost from "./MyPost/MyPost";

import s from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={s.profile}>
      <ProfileInfo />

      <MyPost />
    </div>
  );
};

export default Profile;
