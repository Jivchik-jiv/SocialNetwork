import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../../util/validators/validators";
import { Textarea } from "../../../common/FormsControls/FormsControls";
import s from "./DialogsChat.module.css";

const maxLength50 = maxLengthCreator(50);

const NewMessageForm = (props) => {

return (
<form className={s.newMessage} onSubmit = {props.handleSubmit}>

        <Field component= {Textarea}  
        validate = {[required, maxLength50]}
        placeholder="New..." name = "newMessageBody"/>
        
        <button >Send</button>
      </form>

)
}

const NewMessageFormRedux = reduxForm ({form: "dialogNewMessageForm"})(NewMessageForm);


const DialogsChat0 = (props) => {

  const addNewMessage = (values) =>{
    props.currentState.sendNewMessage(values.newMessageBody);
  }

  const currentUser = props.currentState.state.chatsUsers[0];

  const messages = currentUser.messages
    .map((m) => {
      if (m.iAmSender) {
        return (
          <div className={s.sended} key = {m.id}>
            <p>
              <span>{m.text}</span>
            </p>
          </div>
        );
      } else {
        return (
          <div className={s.resived} key = {m.id}>
            <img src={currentUser.image} alt="a" />
            <p>
              <span>{m.text}</span>
            </p>
          </div>
        );
      }
    })
    .reverse();

  return (
    <div className={s.currentDialog}>
      <h1>{currentUser.name}'s Chat</h1>
      <div className={s.messages}>{messages}</div>
      <NewMessageFormRedux onSubmit = {addNewMessage}/>
    </div>
  );
};



export default DialogsChat0;
