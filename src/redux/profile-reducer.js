import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
     postData: [
          { id: 1, message: "hi, how are you", likeCount: 12 },
          { id: 2, message: "Its my first post", likeCount: 10 },
     ],
     newPostText: "new post text",
     profile: null,
     status: ""
}

const profileReducer = (state = initialState, action) =>
{
     switch (action.type) {
          case ADD_POST: {
               let newPost = {
                    id: 5,
                    message: state.newPostText,
                    likeCount: 0
               };

               return {
                    ...state,
                    postData: [...state.postData, newPost],
                    newPostText: '',
               };
          }

          case UPDATE_NEW_POST_TEXT: {
               return {
                    ...state,
                    newPostText: action.newText
               }
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
export const addPostActionCreator = () => ({ type: ADD_POST, })
export const updateNewPostTextActionCreator = (text) =>
     ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const setUserProfile = (profile) =>
     ({ type: SET_USER_PROFILE, profile })


export const getUserProfile = (userId) => (dispatch) =>
{
     profileAPI.getProfile(userId).then((response) =>
     {
          dispatch(setUserProfile(response.data)); // получили пачку пользователей
     });
}


//action creator добавления статуса в state 
export const setStatus = (status) =>
     ({ type: SET_STATUS, status })
// thunk получения статус с сервера 
export const getStatus = (userId) => (dispatch) =>
{
     profileAPI.getStatus(userId).then((response) =>
     {
          dispatch(setStatus(response.data)); // получили строку статуса добавляем в state 
     });
}
// thunk обновления  статуса  с сервера 
export const updateStatus = (status) => (dispatch) =>
{
     profileAPI.updateStatus(status).then((response) =>
     {
          if (response.data.resultCode === 0) {
               dispatch(setStatus(status)); //получили статус от UI и отправили на сервер 
          }
     });
}




export default profileReducer;