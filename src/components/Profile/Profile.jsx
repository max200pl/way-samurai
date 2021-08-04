import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo />

      <MyPostContainer store={props.store} />
    </div>
  );
};

export default Profile;
