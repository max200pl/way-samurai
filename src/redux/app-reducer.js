import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS ";


let initialState = {
     initialized: false,
}

const appReducer = (state = initialState, action) =>
{
     switch (action.type) {
          case INITIALIZED_SUCCESS:
               return {
                    ...state,
                    initialized: true
               }
          default:
               return state;
     }
}
//* ФУНКЦИИ ВСПОМОГАТЕЛЬНЫЕ actionCreator - для передачи типа action для dispatch(action)
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch) =>
{
     let promise = dispatch(getAuthUserData())



     Promise.all([promise]).then(() => // Когда все promise resolved тогда завернем их в массив 
     {
          dispatch(initializedSuccess()) // И потом dispatch initializedSuccess
     })

}

export default appReducer;