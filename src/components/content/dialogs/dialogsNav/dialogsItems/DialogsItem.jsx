import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogsItem.module.css';


const DialogsItem = (props)=>{

    return (
            <div className = {s.dialogItem}>
                <img src= {props.image} alt="G"/>
                
                <NavLink to={props.link} activeClassName = {s.active}>{props.name}</NavLink>
                
            </div>
    );

}




export default DialogsItem;