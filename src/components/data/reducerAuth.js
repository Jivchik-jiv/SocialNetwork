import { stopSubmit } from "redux-form";
import {
    loginAPI,
    securityAPI,
    usersAPI
} from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null,
}

export const setAuthUserData = (id, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {
            id,
            email,
            login,
            isAuth
        }
    }
};

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
})

const authReducer = (localState = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...localState,
                ...action.payload,

            };
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...localState,
                ...action.payload,
            }
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
        } else{
            if(response.resultCode === 10){
                dispatch(getCaptchaUrl())
            }
            let message = response.messages.length > 0 ? response.messages[0] : "Some error"
            dispatch(stopSubmit("login", {_error: message}));
        }

}

export const logout = () =>async (dispatch) => {
    await loginAPI.deleteAuth();
    dispatch(setAuthUserData(null, null, null, false));
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    dispatch(getCaptchaUrlSuccess(response.data.url))

}

export default authReducer;