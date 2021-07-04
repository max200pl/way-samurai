import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialog/" + props.id;

  return (
    <div className={s.dialog__item + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message__item}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialog__wrapper}>
        <DialogItem name="dimas" id="1" />
        <DialogItem name="Macks" id="2" />
      </div>
      <div className={s.message__wrapper}>
        <Message message="Hi" />
        <Message message="Hello" />
        <Message message="Hello" />
        <Message message="Hello" />
        <Message message="Hello" />
        <Message message="Hello" />
      </div>
    </div>
  );
};

export default Dialogs;
