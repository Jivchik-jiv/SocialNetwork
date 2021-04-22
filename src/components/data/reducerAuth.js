import { stopSubmit } from "redux-form";
import {
    loginAPI,
    usersAPI
} from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    }
};

const authReducer = (localState = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...localState,
                ...action.payload,

            };
        default:
            return localState;
    }
}


export const auth = () => async (dispatch)=>{

        let response = await usersAPI.getAuth();
        

            if (response.resultCode === 0) {
                let {
                    id,
                    login,
                    email
                } = response.data;
                dispatch(setAuthUserData(id, email, login, true));}
        
}


export const login = (loginData) => async (dispatch) => {
    
     let response = await loginAPI.postAuth(loginData);
    
        if (response.resultCode === 0) {

            dispatch(auth())
        }else{
            let message = response.messages.length > 0 ? response.messages[0] : "Some error"
            dispatch(stopSubmit("login", {_error: message}));
        }

}

export const logout = () =>async (dispatch) => {
   let response = await loginAPI.deleteAuth();
            dispatch(setAuthUserData(null, null, null, false))
}

export default authReducer;