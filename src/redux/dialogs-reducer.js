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
     ]
}

export const dialogsReducer = (state = initialState, action) =>
{

     switch (action.type) {
          case SEND_MESSAGE:
               let body = action.newMessageBody;

               return {
                    ...state, // получаем наш state
                    message: [...state.message, { id: 6, message: body }], // переопределяем свойство messages у копии state и добавляем в конец массива новый объект  
               };

          default:
               return state
     }

}

//* ФУНКЦИИ ВСПОМОГАТЕЛЬНЫЕ - для передачи типа action для dispatch(action)
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;