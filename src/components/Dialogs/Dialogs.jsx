import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialog__wrapper}>
        <div className={s.dialog__item + " " + s.active}>
          <NavLink to="/dialog/1">Dims</NavLink>
        </div>
        <div className={s.dialog__item}>
          <NavLink to="/dialog/2">Mask</NavLink>
        </div>
      </div>
      <div className={s.message__wrapper}>
        <div className={s.message__item}>Hi</div>
        <div className={s.message__item}>Hello</div>
      </div>
    </div>
  );
};

export default Dialogs;
