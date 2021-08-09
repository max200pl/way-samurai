const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
     postData: [
          { id: 1, message: "hi, how are you", likeCount: 12 },
          { id: 2, message: "Its my first post", likeCount: 10 },
     ],
     newPostText: "new post text"
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

          default:
               return state;
     }
}
//* ФУНКЦИИ ВСПОМОГАТЕЛЬНЫЕ - для передачи типа action для dispatch(action)
export const addPostActionCreator = () => ({ type: ADD_POST, })
export const updateNewPostTextActionCreator = (text) =>
     ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;