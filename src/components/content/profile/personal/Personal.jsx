import React, { useState } from "react";
import Preloader from "../../../common/Preloader/Preloader";
import s from "./Personal.module.css";
import PersonalData from "./PersonalData";
import PersonalDataFormReduxForm from "./PersonalDataForm";

const Personal = (props) => {
  let [editMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    setEditMode(true);
  };


  const onSubmit = (formData) => {
   props.saveProfile(formData).then(
     ()=> {
      setEditMode(false);
     }
   )
    
   }
    
    
  

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={s.personal}>
      <div>
        <img className = {s.personalAvatar}
          src={
            props.profile.photos.large ||
            "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          }
          alt="#"
        />
        {props.isOwner && (
          <input type="file" onChange={onMainPhotoSelected}></input>
        )}
      </div>
      {editMode ? <PersonalDataFormReduxForm onSubmit = {onSubmit} initialValues = {props.profile} profile = {props.profile}/> 
      : <PersonalData {...props} activateEditMode = {activateEditMode} />}
    </div>
  );
};

export default Personal;
