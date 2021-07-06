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
               ]
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

     addPost() 
     {
          let newPost = {
               id: 5,
               message: this._state.profilePage.newPostText,
               likeCount: 0
          };

          this._state.profilePage.postData.push(newPost)
          this._state.profilePage.newPostText = ""
          this._callSubscriber()
     },

     updateNewPostText(newText)
     {
          this._state.profilePage.newPostText = newText;
          this._callSubscriber()
     },
     subscribe(observer) 
     {
          this._callSubscriber = observer // наблюдатель = observer
     }

}

export default store;
