import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogsChat1 from './dialogsChat/DialogsChat1';
import DialogsChat2 from './dialogsChat/DialogsChat2';
import DialogsChat3 from './dialogsChat/DialogsChat3';
import DialogsChat4 from './dialogsChat/DialogsChat4';
import DialogsChat0 from './dialogsChat/DialogsChat0';
import DialogsNav from './dialogsNav/DialogsNav';






const Dialogs = (props)=>{

    return (
       <BrowserRouter>
            <div className = {s.dialogs}>
                 <DialogsNav data = {props.state.chatsUsers}/>

                 <div className = {s.dialogsChat}>
                  <Route path = "/chat0" render = {()=><DialogsChat0 currentState = {props}/>}/>
                  <Route path = "/chat1" render = {()=><DialogsChat1 currentState = {props}/>}/>
                  <Route path = "/chat2" render = {()=><DialogsChat2 currentState = {props}/>}/>
                  <Route path = "/chat3" render = {()=><DialogsChat3 currentState = {props}/>}/>
                  <Route path = "/chat4" render = {()=><DialogsChat4 currentState = {props}/>}/>
                </div>
            </div>
        
        </BrowserRouter>
    );

}




export default Dialogs;