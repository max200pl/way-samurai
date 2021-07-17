import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./DialogsMessage/DialogsMessage";

const Dialogs = (props) => {
  let dialogsElements = props.dialogPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messageElements = props.dialogPage.message.map((message) => (
    <Message message={message.message} />
  ));
  let newMessage = React.createRef();

  let addSendMassage = () => {
    props.dispatch({ type: "ADD-SEND" });
  };

  let onSendChange = () => {
    let text = newMessage.current.value;
    let action = { type: "UPDATE-NEW-SEND-TEXT", newText: text };
    props.dispatch(action);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialog__wrapper}>{dialogsElements}</div>
      <div className={s.message__wrapper}>{messageElements}</div>

      <div>
        <textarea
          ref={newMessage}
          onChange={onSendChange}
          value={props.dialogPage.newSendMessage}
        />
      </div>

      <div>
        <button onClick={addSendMassage}></button>
      </div>
    </div>
  );
};

export default Dialogs;
