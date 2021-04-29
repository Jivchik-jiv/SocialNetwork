import React from "react";
import { reduxForm } from "redux-form";
import {
  createField,
  Input,
  Textarea,
} from "../../../common/FormsControls/FormsControls";
import s from "./Personal.module.css";

const PersonalDataForm = ({ handleSubmit, profile, error}) => {
  return (
    <form action="" className={s.personalDataForm} onSubmit = {handleSubmit}>
      <div className={s.mainForm}>
        <div className={s.fotmInput}>
          <b>Full name:</b> {createField("Full name...", "fullName", [], Input)}
        </div>
        <div className={s.fotmInput}>
          <b>About me:</b> {createField("about me...", "aboutMe", [], Input)}
        </div>
        <div className={s.fotmInput}>
          <b>Looking for a job:</b>{" "}
          {createField("", "lookingForAJob", [], Input, "checkbox")}
        </div>
        <div className={s.fotmInput}>
          <b>My professional skills:</b>{" "}
          {createField("My skills", "lookingForAJobDescription", [], Textarea)}
        </div>
      </div>

      <div>
      {Object.keys(profile.contacts).map((key) => {
            return <Contact
                key={key}
                contactTitle={key}
                contactValue={profile.contacts[key]}
              />
            
          

        })}
      </div>
      <div>
        <button>Save</button>
      </div>
    </form>
  );
};

const PersonalDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  PersonalDataForm
);


const Contact = (props) => {
  return (
    <div>
      <b>{props.contactTitle}:</b> {createField(props.contactTitle, "contacts."+ props.contactTitle, [], Input)}
    </div>
  );
};


export default PersonalDataFormReduxForm;
