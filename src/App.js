import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import ProfileContainer from './components/content/profile/ProfileContainer';
import DialogsContainer from './components/content/dialogs/DialogsContainer';
import News from './components/content/news/News';
import Music from './components/content/music/Music';
import Settings from './components/content/settings/Settings';
import UsersContainer from './components/content/users/UsersContainer';




const App = () => {


  return (
    <BrowserRouter>
    <div className='app-wrapper'>

      <Header/>
      <Navbar/>
      
      
      <div className = "app-wrapper-content">
        <Route path = "/dialogs" render = {()=><DialogsContainer/>}/>
        <Route path = "/profile/:userId?" render = {()=><ProfileContainer/>}/>
        <Route path = "/users" render = {()=><UsersContainer/>}/>
        <Route path = "/news" component = {News}/>
        <Route path = "/music" component = {Music}/>
        <Route path = "/settings" component = {Settings}/>
          
      </div>
  </div>
  </BrowserRouter>);
  
}






export default App;
