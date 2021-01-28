import React from 'react';
import s from './DialogsChat.module.css';




const DialogsChat1 = (props)=>{

    const newMessage = React.createRef();

    const sendNewMessage = (event)=>{
        event.preventDefault();
        props.currentState.sendNewMessage();
    }

    const onMessageChange = ()=>{
        let text=newMessage.current.value;
        props.currentState.onMessageChange(text);
        
    }


  

     const currentUser = props.currentState.state.chatsUsers[1];
    
    const messages = currentUser.messages.map((m) =>{

        if(m.iAmSender){
            
           return <div className = {s.sended} key = {Math.random()}><p><span>{m.text}</span></p></div>
        }else{
            return <div className = {s.resived} key = {Math.random()}>
                <img src= {currentUser.image } alt="a"/>
                <p><span>{m.text}</span></p>
                </div>
        }
    }).reverse();




   

    return (

            <div className = {s.currentDialog}>
                 <h1>{currentUser.name}'s Chat</h1>
              <div className = {s.messages}>   
               {messages}
              </div>
              <form className = {s.newMessage}>
                <textarea ref = {newMessage} 
                placeholder="Your message..."
                onChange = {onMessageChange}
                value = {props.currentState.state.newMessageText}
                ></textarea>
                <button onClick = {sendNewMessage}>Send</button>
                <div className = {s.clear}></div>
              </form>
            </div>
        
   
    );

}




export default DialogsChat1;