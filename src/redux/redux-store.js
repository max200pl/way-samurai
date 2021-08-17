
import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
     profilePage: profileReducer,
     dialogPage: dialogsReducer,
     sidebar: sidebarReducer,
     usersPage: usersReducer,
     auth: authReducer,
     form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware)); // создаем Store и закидываем туда наш state/ и внедряем  Middleware   

export default store;