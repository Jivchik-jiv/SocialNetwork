import React from "react";
import s from "./Personal.module.css";
import PersonalStatusWithHooks from "./PersonalStatusWithHooks";
import facebook from './../../../images/contacts/facebook.png';
import incognito from './../../../images/contacts/incognito.png';
import instagram from './../../../images/contacts/instagram.png';
import github from './../../../images/contacts/github.png';

const PersonalData = ({ profile, status, updateStatus, isOwner, activateEditMode }) => {
  return (
    <div className={s.personalData}>
      <div className={s.text}>
        <h2>{profile.fullName || "Mini Yoda"}</h2>
        <p>About me: {profile.aboutMe || "I'm a shy guy"}</p>
        {profile.lookingForAJob ? <p>Need a job</p> : <p>Currently employed</p>}
        <p>Skills: {profile.lookingForAJobDescription}</p>
        <PersonalStatusWithHooks
          status={status}
          updateStatus={updateStatus}
          isOwner={isOwner}
        />
      </div>
      <div className={s.contacts}>
        {Object.keys(profile.contacts).map((key) => {
        
          if (profile.contacts[key]) {
            return (
              <Contact
                key={key}
                contactTitle={key}
                contactValue={profile.contacts[key]}
              />
            );
          }

          return false;
        })}
      </div>
      <div><button onClick={activateEditMode}>Edit data</button></div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {

  let contact;
switch (contactTitle){
  case 'facebook':
     contact = facebook;
    break;
  case 'instagram':
    contact = instagram;
     break;
  case 'github':
   contact = github;
    break;
  default:
    contact = incognito;
}

  return (
    <div className = {s.contact}>
      <a href={contactValue || "#"}>
        <img className =  {s.contactImg} src={contact} alt="" />
        <p className =  {s.contactText}>{contactValue}</p>
      </a>
    </div>
  );
};


export default PersonalData;
