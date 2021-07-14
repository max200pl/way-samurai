import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={s.profileInfo}>
      <img src="https://ribashotelsgroup.ua/img/avatars/user.png" alt="" />
      <div>Ifo avatar</div>
    </div>
  );
};

export default ProfileInfo;
