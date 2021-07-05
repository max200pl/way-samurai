import { rerenderEntireTree } from "../render";

let state = {
     profilePage: {
          postData: [
               { id: 1, message: "hi, how are you", likeCount: 12 },
               { id: 2, message: "Its my first post", likeCount: 10 },
          ]
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

export let addPost = (postMessage) =>
{
     let newPost = {
          id: 5,
          message: postMessage,
          likeCount: 0
     };

     state.profilePage.postData.push(newPost)
     rerenderEntireTree(state)
}

export default state;