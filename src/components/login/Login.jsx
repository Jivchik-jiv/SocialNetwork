import React from 'react';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import {  required } from '../../util/validators/validators';
import { createField, Input } from '../common/FormsControls/FormsControls';
import s from '../common/FormsControls/FormsControls.module.css'



const LoginForm = ({handleSubmit, error, captchaUrl}) => {
   
  return  (
  <form onSubmit = {handleSubmit}>
        <div>
            {createField("Email", "login", [required], Input)}
        </div>
        <div>
             {createField("Password", "password", [required], Input, "password")}
           
        </div>
        <div>
            {createField(null, "checkbox", null, Input, "checkbox")}  Remember me  
        
        </div>
        {captchaUrl? <img src = {captchaUrl} alt = ""/> : false}
        {captchaUrl? createField("Symbols from captcha", "captcha", [required], Input) : false}
        {error && <div className = {s.formSummaryError}>
            {error}
        </div>}
        <div>
        <button>Login</button>
        </div>
        
    </form>)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


const Login = (props) => {
    const onSubmit = (input) => {
        const formData = {
            email: input.login,
            password: input.password,
            rememberMe: input.checkbox,
            captcha: input.captcha
        };

        props.login(formData);

    }


    if (props.isAuth) {
        return <Redirect to = {"/profile"}/>
    }

    return <div>
    <h1>Login Page</h1>
    <LoginReduxForm onSubmit = {onSubmit} captchaUrl = {props.captchaUrl}/>
   

</div>
}





export default Login;