let rerenderEntireTree = () =>
{
     console.log('state was changed');
}

let state = {
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
}

export const addPost = (postMessage) =>
{
     let newPost = {
          id: 5,
          message: state.profilePage.newPostText,
          likeCount: 0
     };

     state.profilePage.postData.push(newPost)
     state.profilePage.newPostText = ""
     rerenderEntireTree()
}
export const updateNewPostText = (newText) =>
{
     state.profilePage.newPostText = newText;
     rerenderEntireTree()
}

export const subscribe = (observer) =>
{
     rerenderEntireTree = observer // наблюдатель = observer
}

export default state;