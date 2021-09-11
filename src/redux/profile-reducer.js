import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
     postData: [
          { id: 1, message: "hi, how are you", likeCount: 12 },
          { id: 2, message: "Its my first post", likeCount: 10 },
     ],
     profile: null,
     status: ""
}

const profileReducer = (state = initialState, action) =>
{
     switch (action.type) {
          case ADD_POST: {
               let newPost = {
                    id: 5,
                    message: action.newPostTex,
                    likeCount: 0
               };

               return {
                    ...state,
                    postData: [...state.postData, newPost],
               };
          }

          case SET_USER_PROFILE: {
               return {
                    ...state,
                    profile: action.profile
               }
          }

          case SET_STATUS: {
               return {
                    ...state,
                    status: action.status
               }
          }

          default:
               return state;
     }
}
//* ФУНКЦИИ ВСПОМОГАТЕЛЬНЫЕ - для передачи типа action для dispatch(action)
export const addPostActionCreator = (newPostTex) => ({ type: ADD_POST, newPostTex })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })


export const getUserProfile = (userId) => async (dispatch) =>
{
     let response = await profileAPI.getProfile(userId)
     dispatch(setUserProfile(response.data)); // получили пачку пользователей
}

//action creator добавления статуса в state 
export const setStatus = (status) =>
     ({ type: SET_STATUS, status })
// thunk получения статус с сервера 
export const getStatus = (userId) => async (dispatch) =>
{
     let response = await profileAPI.getStatus(userId)
     dispatch(setStatus(response.data)); // получили строку статуса добавляем в state 
}
// thunk обновления  статуса  с сервера 
export const updateStatus = (status) => async (dispatch) =>
{
     let response = await profileAPI.updateStatus(status)

     if (response.data.resultCode === 0) {
          dispatch(setStatus(status)); //получили статус от UI и отправили на сервер 
     }
}

export default profileReducer;