import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPost from "./MyPost/MyPost";

import s from "./Profile.module.css";
const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo />

      <MyPost
        postData={props.profilePage.postData}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
        addPost={props.addPost}
      />
    </div>
  );
};

export default Profile;
