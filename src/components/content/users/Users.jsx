import React from "react";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";


const Users = ({currentPage, onPageChange, totalUsersCount, pageSize, users, followingProgress, follow, unfollow, ...props}) => {
 
  return (
    <div>
      <Paginator currentPage = {currentPage} onPageChange = {onPageChange} totalItemsCount = {totalUsersCount} pageSize = {pageSize}/> 

      {users.map((u) => {
        let imageUrl =
          "https://telegram.org.ru/uploads/posts/2018-04/1523986370_file_488917.jpg";
        return (
         <User key={u.id} user ={u} followingProgress = {followingProgress}
         follow = {follow} unfollow ={unfollow} imageUrl = {imageUrl}/>
        );
      })}
    </div>
  );
};

export default Users;
