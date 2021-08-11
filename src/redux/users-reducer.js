const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
     users: [],
     pageSize: 5, // отображение количества пользователей на странице 
     totalUsersCount: 0, // всего пользователей в БД
     currentPage: 1, // начальная страница 
     isFetching: true
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
               return { ...state, users: action.users } // получили весь state, сделали копию users и получили новых пользователей 
          }

          case SET_CURRENT_PAGE: {
               return { ...state, currentPage: action.currentPage } // получили весь state, получили currentPage и занесли туда выбранную страницу 
          }

          case SET_TOTAL_USERS_COUNT: {
               return { ...state, totalUsersCount: action.count } // заменяем в State количество пользователей которые пришли по запросу 
          }

          case TOGGLE_IS_FETCHING: {
               return { ...state, isFetching: action.isFetching } // изменяем флаг false на true при загрузке  когда пришел ответ меняем на false  
          }

          default:
               return state;
     }
}
//* ФУНКЦИИ ВСПОМОГАТЕЛЬНЫЕ actionCreator - для передачи типа action для dispatch(action)
export const follow = (userId) => ({ type: FOLLOW, userId })
export const unFollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default usersReducer;