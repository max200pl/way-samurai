import React from "react";
import s from "./DialogsMessage.module.css";

const DialogsMessage = (props) => {
  return (
    <div className={s.DialogsMessage}>
      <div className={s.message__wrapper}>{props.message}</div>
    </div>
  );
};

export default DialogsMessage;
