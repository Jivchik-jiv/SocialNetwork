import React from "react";
import {
  onAddNewPost,
  setUserProfile,
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from "../../data/reducerPosts";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {

  refreshProfile () {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
 
  componentDidMount() {
   
   this.refreshProfile();

  }

  componentDidUpdate(prevProps) {
   
    if(this.props.match.params.userId !== prevProps.match.params.userId){
      this.refreshProfile();
    }
    

  }



  render() {
   
    return <Profile {...this.props} 
                    isOwner = {!this.props.match.params.userId}/>;
  }
}

let mapStateToProps = (state) => ({
  state: state.profilePage,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    onAddNewPost,
    setUserProfile,
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter,
)(ProfileContainer);
