import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/validators/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOllOWING_PROGRESS = "TOGGLE_IS_FOllOWING_PROGRESS";

let initialState = {
     users: [],
     pageSize: 5, // отображение количества пользователей на странице 
     totalUsersCount: 0, // всего пользователей в БД
     currentPage: 1, // начальная страница 
     isFetching: true,
     followingInProgress: [] // массив который получает id пользователя на который идет подписка 
}

const usersReducer = (state = initialState, action) =>
{
     switch (action.type) {
          case FOLLOW:
               return {
                    ...state,
                    users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
               }
          case UNFOLLOW:
               return {
                    ...state,
                    users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })

                    /*    users: state.users.map(u =>
                       {
                            if (u.id === action.userId) { // если id пользователя совпадает 
                                 return { ...u, followed: false } // делаем копию объекта,  меняем поле followed на true
                            }
                            return u
                       }) // получем копию массива объектов через .map */
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

          case TOGGLE_IS_FOllOWING_PROGRESS: {
               return {
                    ...state,
                    followingInProgress: action.isFetching // если идет загрузка true тогда 
                         ? [...state.followingInProgress, action.userId] // тогда закидываем в массив 
                         : state.followingInProgress.filter(id => id !== action.userId) // удаляем id пользователя если загрузка закончилась и получаем новый массив т.к метод filter 
               }
          }

          default:
               return state;
     }
}
//* ФУНКЦИИ ВСПОМОГАТЕЛЬНЫЕ actionCreator - для передачи типа action для dispatch(action)
export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unFollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOllOWING_PROGRESS, isFetching, userId })

//*thunk in redux  это функция которая делает асинхронную работу и внутри делает кучу dispatch
// снаружи thunk-creator
export const requestUsers = (page, pageSize) =>
{
     // Внутри сидит thunk
     return async (dispatch) =>
     {
          dispatch(toggleIsFetching(true));
          dispatch(setCurrentPage(page));

          let data = await usersAPI.getUsers(page, pageSize)

          dispatch(toggleIsFetching(false));
          dispatch(setUsers(data.items)); // получили пачку пользователей
          dispatch(setTotalUsersCount(data.totalCount)); // получаем всех пользователей (количество)

     }
}
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) =>
{
     dispatch(toggleFollowingProgress(true, userId));

     let response = await apiMethod(userId)

     if (response.data.resultCode === 0) {
          dispatch(actionCreator(userId));
     }

     dispatch(toggleFollowingProgress(false, userId));
}


export const follow = (userId) =>
{
     return async (dispatch) =>
     {
          followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
     }
}

export const unFollow = (userId) =>
{
     return async (dispatch) =>
     {
          followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), unFollowSuccess)
     }
}


export default usersReducer;