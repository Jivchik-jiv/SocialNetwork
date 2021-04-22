
import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import s from './Personal.module.css';
import PersonalStatusWithHooks from './PersonalStatusWithHooks';

const Personal = ({profile, status, updateStatus}) => {
 

  if(!profile){
    return <Preloader/>
  }

   return (<div className={s.profile}>
   <div className = {s.header}>
     <img src="https://mrccinci.org/wp-content/uploads/2010/10/header.jpg" alt = "#" />
   </div>
   <div className = {s.personalData}>
        <div>
            <img src= {profile.photos.small || "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"} alt="#"/>
        </div>
        <div className = {s.text}>
            <h2>{profile.fullName ||"Mini Yoda"}</h2>
            <p>About me: {profile.aboutMe || "I'm a shy guy"}</p>
            {profile.lookingForAJob ? <p>Need a job</p> : <p>Currently employed</p>}
            <PersonalStatusWithHooks status = {status} updateStatus = {updateStatus}/>
        </div>
      
   </div>

   

   </div>
   
 
);}



export default Personal;
