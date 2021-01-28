import React from 'react';
import { connect } from 'react-redux';
import {follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from '../../data/reducerUsers';
import Users from './Users';
import * as axios from "axios";
import Preloader from '../../common/Preloader/Preloader';



class UsersContainer extends React.Component {
    componentDidMount() {
     
     this.props.toggleIsFetching(true);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
        .then((response) => {
         
          this.props.toggleIsFetching(false);
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
    
    onPageChange(pageNumber) {
      this.props.toggleIsFetching(true);
      this.props.setCurrentPage(pageNumber);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
        .then((response) => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(response.data.items);
        });
    }
  
    render() {
      
     return <>
     {this.props.isFetching ? <Preloader/> : null}
     <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange.bind(this)}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
      />

      </>
    }
  }
  

const mapStateToProps = (state)=>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount, 
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    };
};





export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);