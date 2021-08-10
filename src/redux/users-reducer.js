const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
     users: []
}

const usersReducer = (state = initialState, action) =>
{
     switch (action.type) {
          case FOLLOW:
               return {
                    ...state,
                    users: state.users.map(u => // получем копию массива объектов через .map
                    {
                         if (u.id === action.userId) { // если id пользователя совпадает 
                              return { ...u, followed: true } // делаем копию объекта,  меняем поле followed на true
                         }
                         return u
                    })
               }
          case UNFOLLOW:
               return {
                    ...state,
                    users: state.users.map(u =>
                    {
                         if (u.id === action.userId) { // если id пользователя совпадает 
                              return { ...u, followed: false } // делаем копию объекта,  меняем поле followed на true
                         }
                         return u
                    }) // получем копию массива объектов через .map
               }

          case SET_USERS: {
               return { ...state, users: [...state.users, ...action.users] } // получили весь state, сделали копию users и получили новых пользователей и добавили к старым
          }

          default:
               return state;
     }
}
//* ФУНКЦИИ ВСПОМОГАТЕЛЬНЫЕ actionCreator - для передачи типа action для dispatch(action)
export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;