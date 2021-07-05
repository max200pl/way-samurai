import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./DialogsMessage/DialogsMessage";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messageElements = props.state.message.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialog__wrapper}>{dialogsElements}</div>
      <div className={s.message__wrapper}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
