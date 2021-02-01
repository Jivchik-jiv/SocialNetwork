import React from "react";
import s from "./Profile.module.css";
import Personal from "./personal/Personal";
import Posts from "./posts/Posts";

const Profile = (props) => {
 
  return (
    <div className={s.content}>
      <Personal profile = {props.state.profile}/>

      <Posts data={props} />
    </div>
  );
};

export default Profile;
