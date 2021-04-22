import React from "react";
import s from "./Profile.module.css";
import Personal from "./personal/Personal";
import Posts from "./posts/Posts";


const Profile = React.memo((props) => {

 
  return (
    <div className={s.content}>
      <Personal profile = {props.state.profile} status= {props.status} updateStatus = {props.updateStatus}/>
      <Posts data={props} />
    </div>
  );
})

export default Profile;
