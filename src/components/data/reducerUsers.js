import {
    usersAPI
} from "../../api/api";
import { updateObjectInArray } from "../../util/helpers/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';




export const followSuccess = (userId) => {
    return {
        type: FOLLOW,
        userId
    };
};

export const unfollowSuccess = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    };
};

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    };
};

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    };
};

export const setTotalUsersCount = (totalUsersCount) => {

    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    };
};

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    };
};

export const toggleFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
};






const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 25,
    currentPage: 1,
    isFetching: false,
    followingProgress: [],
};

const usersReducer = (localState = initialState, action) => {

    switch (action.type) {
        case FOLLOW:

        
            return {
                ...localState,
                users: updateObjectInArray(localState.users, action.userId, "id", {followed: true})
            };
        case UNFOLLOW:
            return {
                ...localState,
                users: updateObjectInArray(localState.users, action.userId, "id", {followed: false})
            };
        case SET_USERS:

            return {
                ...localState, users: action.users
            };
        case SET_CURRENT_PAGE:

            return {
                ...localState, currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:

            let totalCount = action.totalUsersCount < 705 ? action.totalUsersCount : 705;
            return {
                ...localState, totalUsersCount: totalCount
            };
        case TOGGLE_IS_FETCHING:

            return {
                ...localState, isFetching: action.isFetching
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:

            return {
                ...localState,
                followingProgress: action.isFetching ? [...localState.followingProgress, action.userId] :
                    localState.followingProgress.filter(id => id !== action.userId)
            }
            default:
                return localState;
    }

};

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
   
        dispatch(toggleIsFetching(true));
       dispatch(setCurrentPage(currentPage));

      let response =await usersAPI.getUsers(currentPage, pageSize);
  

            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));

}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) =>{

    dispatch(toggleFollowingProgress(true, userId));

      let response = await apiMethod(userId);
      
            if (response.resultCode === 0) {
                dispatch(actionCreator(userId));
            }

            dispatch(toggleFollowingProgress(false, userId));

}

export const unfollow = (userId) => async (dispatch) =>{

    let apiMethod = usersAPI.deleteSubscription.bind(usersAPI);
    let actionCreator = unfollowSuccess;

    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);

       

}


export const follow = (userId) => async (dispatch) => {

    let apiMethod = usersAPI.postSubscription.bind(usersAPI);
    let actionCreator = followSuccess;

    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);

}

export default usersReducer;