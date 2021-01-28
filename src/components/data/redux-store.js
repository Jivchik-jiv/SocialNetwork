import { combineReducers, createStore } from "redux";
import messageReducer from "./reducerMessages";
import postReducer from "./reducerPosts";
import usersReducer from "./reducerUsers";




let reducers = combineReducers({
    dialogsPage: messageReducer,
    profilePage: postReducer,
    usersPage: usersReducer,
});

export let store = createStore(reducers);

