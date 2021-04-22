import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
   return (<header className={s.header}>
     
        <img src="https://avatanplus.com/files/resources/original/57765e87eab77155a6614319.png" alt="pingvn"/>

        <div className = {s.loginBlock}>
          {props.isAuth 
          ? <div>{props.login}  - <button onClick = {props.logout}>Log out</button></div> 
          : <NavLink to="/login">Login</NavLink>}
        </div>
      </header>);

}

export default Header;
