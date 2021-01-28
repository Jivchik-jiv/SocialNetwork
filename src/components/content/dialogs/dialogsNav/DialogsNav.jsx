import React from 'react';
import DialogsItem from './dialogsItems/DialogsItem';
import s from './DialogsNav.module.css';




                   

const DialogsNav = (props)=>{

    const chatsLinks = props.data.map((l)=><DialogsItem link = {l.link} name = {l.name} image = {l.image} key = {l.id}/>);


    return (
            <div className = {s.dialogNav}>
                <h1>Dialogs</h1>
                {chatsLinks}
            </div>
    );

}




export default DialogsNav;