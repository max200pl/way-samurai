const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let store = {
     _state: {
          profilePage: {
               postData: [
                    { id: 1, message: "hi, how are you", likeCount: 12 },
                    { id: 2, message: "Its my first post", likeCount: 10 },
               ],
               newPostText: "new post text"
          },

          dialogPage: {
               dialogs: [
                    { id: 1, name: "dimas" },
                    { id: 2, name: "Macks" },
               ],
               message: [
                    { id: 1, message: "Hi" },
                    { id: 2, message: "Hello" },
                    { id: 3, message: "Yo" },
               ],
               newSendBody: ""
          },

          sidebar: {

          }
     },
     _callSubscriber()
     {
          console.log('state was changed');
     },

     getState()
     {
          return this._state;
     },
     subscribe(observer) 
     {
          this._callSubscriber = observer // наблюдатель = observer
     },

     dispatch(action) // dispatch - отправить; action это object 
     //{type: "ADD-POST"}
     {

          if (action.type === 'ADD-POST') {

               let newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likeCount: 0
               };

               this._state.profilePage.postData.push(newPost)
               this._state.profilePage.newPostText = ""
               this._callSubscriber(this._state);
          } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
               this._state.profilePage.newPostText = action.newText;
               this._callSubscriber(this._state)

          } else if (action.type === 'SEND_MESSAGE') {
               let body = this._state.dialogPage.newSendBody;

               this._state.dialogPage.newSendBody = "";
               this._state.dialogPage.message.push({ id: 6, message: body })
               this._callSubscriber(this._state)
          } else if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
               this._state.dialogPage.newSendBody = action.body;
               this._callSubscriber(this._state)
          }

     }
}

//* ФУНКЦИИ ВСПОМОГАТЕЛЬНЫЕ - для передачи типа action для dispatch(action)
export const addPostActionCreator = () => ({ type: ADD_POST, })

export const updateNewPostTextActionCreator = (text) =>
     ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE, })

export const updateNewMessageBodyCreator = (body) =>
     ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default store;
