import { auth } from "./reducerAuth";

let initialState = {
    initialized: false,
}


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

 const appReducer = (currentState = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...currentState,
                initialized: true
            }
        default:
            return currentState;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
 let promise = dispatch(auth());
 promise.then(()=> {
    dispatch(initializedSuccess());
 })
 
}

export default appReducer;