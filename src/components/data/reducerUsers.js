const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';




export const follow = (userId)=>{
  return { type: FOLLOW, userId};
};

export const unfollow = (userId)=>{
    return { type: UNFOLLOW, userId};
  };

  export const setUsers = (users)=>{
    return { type: SET_USERS, users};
  };

  export const setCurrentPage = (currentPage)=>{
    return { type: SET_CURRENT_PAGE, currentPage};
  };

  export const setTotalUsersCount = (totalUsersCount)=>{
     
      return {type: SET_TOTAL_USERS_COUNT, totalUsersCount};
  };

  export const toggleIsFetching = (isFetching) =>{
      return {type: TOGGLE_IS_FETCHING, isFetching};
  };

  
  
  


  const initialState = {
      users: [],
      pageSize: 10,
      totalUsersCount: 25,
      currentPage:1,
      isFetching: false,
  };

const usersReducer = (localState = initialState, action)=>{

    switch (action.type){
        case FOLLOW:
        return{
            ...localState,
            users: localState.users.map(u=>{
                if(u.id === action.userId){
                    return {...u, followed: true};
                }else{
                    return u;
                }
            }),
        };
        case UNFOLLOW:
            return{
                ...localState,
                users: localState.users.map(u=>{
                    if(u.id === action.userId){
                        return {...u, followed: false};
                    }else{
                        return u;
                    }
                }),
            };
        case SET_USERS:
            
            return { ...localState, users: action.users};
        case SET_CURRENT_PAGE:

            return { ...localState, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            
            let totalCount = action.totalUsersCount< 70 ?  action.totalUsersCount : 70;
            return { ...localState, totalUsersCount: totalCount};
        case TOGGLE_IS_FETCHING:
            
            return {...localState, isFetching: action.isFetching};
        default: 
          return localState;
    }

};

export default usersReducer;