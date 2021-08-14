import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const mapStateToPropsForRedirect = (state) => {
  // берем данные из State и засовываем в Props презентационной компоненте
  return {
    dialogPage: state.dialogPage, // прокидываем данные в Dialogs компоненту
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

export default compose(
  connect(mapStateToPropsForRedirect, mapDispatchToProps),
  withAuthRedirect //* HOC = Hight Order Component Redirect to other page
)(Dialogs);
