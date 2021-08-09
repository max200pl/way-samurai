import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  // берем данные из State и засовываем в Props презентационной компоненте
  return {
    dialogPage: state.dialogPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  // будем передавать наши CallBack в презентационную компоненту
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
// вызывали функцию connect()(Dialogs) -> Dialogs подключили к store
// superDialogsContainer === новая контейнерная компонента
// внутри контейнерной компоненты рендерид презентационную компоненту
// внутрь презентационной компоненты передает через функции в атрибуты данные и функции

export default DialogsContainer;
