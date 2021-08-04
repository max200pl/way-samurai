import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onSendMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };
  return (
    <Dialogs
      updateNewMessageBody={onSendMessageChange}
      sendMessage={onSendMessageClick}
      dialogPage={state}
    />
  );
};

export default DialogsContainer;
