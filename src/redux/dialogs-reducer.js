const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
     dialogs: [
          { id: 1, name: "dimas" },
          { id: 2, name: "Macks" },
     ],
     message: [
          { id: 1, message: "Hi" },
          { id: 2, message: "Hello" },
          { id: 3, message: "Yo" },
     ],
     newSendBody: ""
}

export const dialogsReducer = (state = initialState, action) =>
{

     switch (action.type) {
          case UPDATE_NEW_MESSAGE_BODY:
               return {
                    ...state,
                    newSendBody: action.body
               }

          case SEND_MESSAGE:
               let body = state.newSendBody;

               return {
                    ...state, // получаем наш state
                    newSendBody: '', // перезаписываем newSendBody в пустую строку 
                    message: [...state.message, { id: 6, message: body }], // переопределяем свойство messages у копии state и добавляем в конец массива новый объект  
               };

          default:
               return state
     }

}

//* ФУНКЦИИ ВСПОМОГАТЕЛЬНЫЕ - для передачи типа action для dispatch(action)
export const sendMessageCreator = () => ({ type: SEND_MESSAGE, })
export const updateNewMessageBodyCreator = (body) =>
     ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;