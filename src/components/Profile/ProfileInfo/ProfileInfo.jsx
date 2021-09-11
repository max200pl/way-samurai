import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.profileInfo}>
      <h1>{props.profile.fullName}</h1>
      <div>
        <img src={props.profile.photos.small} alt="" />
      </div>

      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />

      <span>My instagram: {props.profile.contacts.instagram}</span>
    </div>
  );
};

export default ProfileInfo;
