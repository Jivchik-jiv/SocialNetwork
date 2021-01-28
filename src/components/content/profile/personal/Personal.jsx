
import React from 'react';
import s from './Personal.module.css';

const Personal = () => {

   return (<div className={s.profile}>
   <div className = {s.header}>
     <img src="https://mrccinci.org/wp-content/uploads/2010/10/header.jpg" alt = "#" />
   </div>
   <div className = {s.personalData}>
        <div>
            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="#"/>
        </div>
        <div className = {s.text}>
            <h2>Mini Yoda</h2>
            <p>Year of birth : 7354</p>
            <p>Planet: Namory</p>
            <p>Education: Jeday school</p>
            <p>Web site: yoda.un</p>
        </div>
   </div>

   </div>
   
 
);}



export default Personal;

