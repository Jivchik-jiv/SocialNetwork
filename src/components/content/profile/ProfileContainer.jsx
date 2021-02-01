import React from "react";
import {
  onPostChange,
  onAddNewPost,
  setUserProfile,
} from "../../data/reducerPosts";
import Profile from "./Profile";
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    
    let userId = this.props.match.params.userId;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  
  return {
    state: state.profilePage,
  };
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
  onPostChange,
  onAddNewPost,
  setUserProfile,
})(WithUrlDataContainerComponent);
