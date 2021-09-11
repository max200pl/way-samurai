import profileReducer, { addPostActionCreator } from "./profile-reducer";

it('renders', () =>
{
     let action = addPostActionCreator("it-lam")
     let state = {
          postData: [
               { id: 1, message: "hi, how are you", likeCount: 12 },
               { id: 2, message: "Its my first post", likeCount: 10 },
          ]
     }

     let newState = profileReducer(state, action);

     expect(newState.postData.length).toBe(3);
     expect(newState.postData[4].message).toBe("it-lam")
});