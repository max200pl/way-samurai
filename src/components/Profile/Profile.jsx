import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPost from "./MyPost/MyPost";

import s from "./Profile.module.css";
const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo />

      <MyPost postData={props.state.postData} addPost={props.addPost} />
    </div>
  );
};

export default Profile;
