import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
     postData: [
          { id: 1, message: "hi, how are you", likeCount: 12 },
          { id: 2, message: "Its my first post", likeCount: 10 },
     ],
     newPostText: "new post text",
     profile: null
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


export const getProfile = (userId) =>
{
     return (dispatch) =>
     {
          usersAPI.getProfile(userId).then((response) =>
          {
               dispatch(setUserProfile(response.data)); // получили пачку пользователей
          });
     }
}


export default profileReducer;