import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Users.module.css";

const User = ({user, followingProgress, unfollow, follow, imageUrl, ...props}) => {
 
  return (
  
          <div className={s.extraUsersBox} >
            <NavLink to={"/profile/" + user.id}>
              <img src={user.photos.small || imageUrl} alt="#" />
            </NavLink>
            {user.followed ? (
              <button
                disabled={followingProgress.some((id) => id === user.id)}
                onClick={() => {unfollow(user.id); }} >
                Unfollow
              </button>
            ) : (
              <button
                disabled={followingProgress.some((id) => id === user.id)}
                onClick={() => {follow(user.id);}} >
              Follow
              </button>
            )}
            <h2>{user.name}</h2>
          </div>
        )
};

export default User;
