import React from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
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

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialog__wrapper}>{dialogsElements}</div>
      <div className={s.message__wrapper}>{messageElements}</div>

      <AddMessageFomRedux onSubmit={addNewMessage} />
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newMessageBody"
          component="textarea"
          placeholder="Enter your message"
        />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const AddMessageFomRedux = reduxForm({
  form: "dialogAddMessageForm",
})(AddMessageForm);

export default Dialogs;
