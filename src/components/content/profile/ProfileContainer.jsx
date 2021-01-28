import {
  addPostActionCreator,
  UpNewPostTextActionCreator,
} from "../../data/reducerPosts";
import Profile from "./Profile";
import {connect} from "react-redux";

/*

const ProfileContainer = () => {

    




  return (
    <StoreContext.Consumer>

    { (store) => {
      let onPostChange = (text) => {
        let action = UpNewPostTextActionCreator(text);
        store.dispatch(action);
      };
      
      let onAddNewPost = () => {
        let action = addPostActionCreator();
        store.dispatch(action);
      };
      
      return (<Profile
      localState={store.getState().profilePage.posts}
      newPostText={store.getState().profilePage.newPostText}
      dispatch={store.dispatch.bind(store)}
      onPostChange={onPostChange}
      onAddNewPost={onAddNewPost} />)}}

  </StoreContext.Consumer>
  );
};

*/

let mapStateToProps = (state) =>{

  
  return ({
    state: state.profilePage
  });
};

let mapDispatchToProps = (dispatch) => {
  
  
  return ({
    onPostChange: (text) => {
    let action = UpNewPostTextActionCreator(text);
    dispatch(action);
  },
  onAddNewPost: () => {
    let action = addPostActionCreator();
    dispatch(action);
  }});

}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;