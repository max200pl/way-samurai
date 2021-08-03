const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";


export const dialogsReducer = (state, action) =>
{
     switch (action.type) {
          case SEND_MESSAGE:
               let body = state.newSendBody;
               state.newSendBody = "";
               state.message.push({ id: 6, message: body })
               return state
          case UPDATE_NEW_MESSAGE_BODY:
               state.newSendBody = action.body;
               return state
          default:
               return state
     }

}

//* ФУНКЦИИ ВСПОМОГАТЕЛЬНЫЕ - для передачи типа action для dispatch(action)
export const sendMessageCreator = () => ({ type: SEND_MESSAGE, })
export const updateNewMessageBodyCreator = (body) =>
     ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;