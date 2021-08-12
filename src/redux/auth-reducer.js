const SET_USER_DATA = "SET_USER_DATA";
//const UNFOLLOW = "UNFOLLOW";


let initialState = {
     id: null,
     email: null,
     login: null,
     isAuth: false
}

const authReducer = (state = initialState, action) =>
{
     switch (action.type) {
          case SET_USER_DATA:
               return {
                    ...state,
                    ...action.data, // перетираем на новые данные с state  userId: null, email: null, login: null
                    isAuth: true // если данные пришли то мы залогинены  
               }
          default:
               return state;
     }
}
//* ФУНКЦИИ ВСПОМОГАТЕЛЬНЫЕ actionCreator - для передачи типа action для dispatch(action)
export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } })


export default authReducer;