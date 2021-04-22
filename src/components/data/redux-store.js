import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import authReducer from "./reducerAuth";
import messageReducer from "./reducerMessages";
import postReducer from "./reducerPosts";
import usersReducer from "./reducerUsers";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./reducerApp";




let reducers = combineReducers({
    dialogsPage: messageReducer,
    profilePage: postReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
window._store_ = store;

export default store;
