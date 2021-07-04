import React from "react";
import s from "./DialogsItem.module.css";

const DialogsItem = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialog__wrapper}>{props.name}</div>
    </div>
  );
};

export default DialogsItem;
