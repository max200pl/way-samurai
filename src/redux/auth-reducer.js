import { authAPI } from "../api/api";

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
                    ...action.payload, // перетираем на новые данные с state  userId: null, email: null, login: null
               }
          default:
               return state;
     }
}
//* ФУНКЦИИ ВСПОМОГАТЕЛЬНЫЕ actionCreator - для передачи типа action для dispatch(action)
export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } })

export const getAuthUserData = () => (dispatch) =>
{
     authAPI.me().then((response) =>
     {
          if (response.data.resultCode === 0) {
               let { id, email, login } = response.data.data;
               dispatch(setAuthUserData(id, email, login, true));
          }
     });
}

export const login = (email, password, rememberMe) => (dispatch) => //login это функция thunkCreator 
{
     authAPI.login(email, password, rememberMe).then((response) =>
     {
          if (response.data.resultCode === 0) {
               dispatch(getAuthUserData())
          }
     });
}

export const logout = () => (dispatch) => //login это функция thunkCreator 
{
     authAPI.logout().then((response) =>
     {
          if (response.data.resultCode === 0) {
               dispatch(setAuthUserData(null, null, null, false));
          }
     });
}

export default authReducer;