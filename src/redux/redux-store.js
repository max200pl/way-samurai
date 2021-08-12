
import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"
import usersReducer from "./users-reducer";

let reducers = combineReducers({
     profilePage: profileReducer,
     dialogPage: dialogsReducer,
     sidebar: sidebarReducer,
     usersPage: usersReducer,
     auth: authReducer,
});

let store = createStore(reducers); // создаем Store и закидываем туда наш state 

export default store;