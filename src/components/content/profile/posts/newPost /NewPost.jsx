import React from "react";
import s from "./NewPost.module.css";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../../../util/validators/validators";
import { Textarea } from "../../../../common/FormsControls/FormsControls";


const maxLength10 = maxLengthCreator(10)

const NewPost = (props) => {


  return <div className = {s.new}>
          <form onSubmit = {props.handleSubmit}>
            <Field  component = {Textarea} placeholder = "What's new?" name = {"newPost"}
            validate = {[required, maxLength10]}/>
            <button>Post</button>


         </form>

  </div>
}



const NewPostRedaxForm = reduxForm({form: "newPost"})(NewPost);

export default NewPostRedaxForm;
