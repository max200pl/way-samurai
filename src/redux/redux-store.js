
import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"
import usersReducer from "./users-reducer";

let reducers = combineReducers({
     profilePage: profileReducer,
     dialogPage: dialogsReducer,
     sidebar: sidebarReducer,
     usersPage: usersReducer,
});

let store = createStore(reducers); // создаем Store и закидываем туда наш state 

export default store;