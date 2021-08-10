import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./DialogsMessage/DialogsMessage";

const Dialogs = (props) => {
  let state = props.dialogPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));

  let messageElements = state.message.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  let newMessageBody = state.newSendBody;
  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onSendMessageChange = (e) => {
    let body = e.target.value; // получили данные с формы
    props.updateNewMessageBody(body);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialog__wrapper}>{dialogsElements}</div>
      <div className={s.message__wrapper}>{messageElements}</div>

      <div>
        <textarea
          onChange={onSendMessageChange}
          value={newMessageBody}
          placeholder="Enter your message"
        />
      </div>

      <div>
        <button onClick={onSendMessageClick}></button>
      </div>
    </div>
  );
};

export default Dialogs;
