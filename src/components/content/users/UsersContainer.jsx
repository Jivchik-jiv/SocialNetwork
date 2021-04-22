import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  unfollow,
  toggleFollowingProgress,
  getUsers,
} from "../../data/reducerUsers";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {getCurrentPage, getFollowingProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsersSuperSelector} from "./../../data/usersSelectors"

class UsersContainer extends React.Component {
  componentDidMount() {
    let {currentPage, pageSize} = this.props;
    this.props.getUsers(currentPage, pageSize);
    
  }

  onPageChange(pageNumber) {
    let { pageSize} = this.props;
    this.props.getUsers(pageNumber, pageSize);
  }

  render() {
    
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange.bind(this)}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          followingProgress={this.props.followingProgress}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
        />
      </>
    );
  }
}



const mapStateToProps = (state) => {
  
  return {
    users: getUsersSuperSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
  }),
  withAuthRedirect
)(UsersContainer);
