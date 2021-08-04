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
          case ADD_POST:
               let newPost = {
                    id: 5,
                    message: state.newPostText,
                    likeCount: 0
               };

               state.postData.push(newPost)
               state.newPostText = ""
               return state;
          case UPDATE_NEW_POST_TEXT:
               state.newPostText = action.newText;
               return state;

          default:
               return state;
     }
}
//* ФУНКЦИИ ВСПОМОГАТЕЛЬНЫЕ - для передачи типа action для dispatch(action)
export const addPostActionCreator = () => ({ type: ADD_POST, })
export const updateNewPostTextActionCreator = (text) =>
     ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;