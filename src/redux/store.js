import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


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
          this._state.profilePage = profileReducer(this._state.profilePage, action);
          this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
          this._state.sidebar = sidebarReducer(this._state.sidebar, action);

          this._callSubscriber(this._state);
     }
}



export default store;
