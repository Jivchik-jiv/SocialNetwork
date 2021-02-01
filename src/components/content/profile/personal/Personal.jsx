
import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import s from './Personal.module.css';

const Personal = (props) => {

  if(!props.profile){
    return <Preloader/>
  }

   return (<div className={s.profile}>
   <div className = {s.header}>
     <img src="https://mrccinci.org/wp-content/uploads/2010/10/header.jpg" alt = "#" />
   </div>
   <div className = {s.personalData}>
        <div>
            <img src= {props.profile.photos.small || "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"} alt="#"/>
        </div>
        <div className = {s.text}>
            <h2>{props.profile.fullName ||"Mini Yoda"}</h2>
            <p>About me: {props.profile.aboutMe || "I'm a shy guy"}</p>
            {props.profile.lookingForAJob ? <p>Need a job</p> : <p>Currently employed</p>}
           
        </div>
   </div>

   </div>
   
 
);}



export default Personal;

