import React from "react";
import {
  onAddNewPost,
  setUserProfile,
  getUserProfile,
  getStatus,
  updateStatus,
} from "../../data/reducerPosts";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
 
  componentDidMount() {
   
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      /*if (!userId) {
        this.props.history.push("/login");
      }*/
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);

  }


  shouldComponentUpdate(nextProps, nextState){
    return nextProps != this.props || nextState != this.state
  }
  

  render() {
   
    return <Profile {...this.props} />;
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
  }),
  withRouter,
  //withAuthRedirect
)(ProfileContainer);
