import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./DialogsMessage/DialogsMessage";

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "dimas" },
    { id: 2, name: "Macks" },
  ];

  let message = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello" },
    { id: 3, message: "Yo" },
  ];

  let dialogsElements = dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messageElements = message.map((message) => (
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
