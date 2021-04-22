import './App.css';
import React from 'react';
import {Route, withRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ProfileContainer from './components/content/profile/ProfileContainer';
import News from './components/content/news/News';
import Music from './components/content/music/Music';
import Settings from './components/content/settings/Settings';
import UsersContainer from './components/content/users/UsersContainer';
import HeaderContainer from './components/header/HeaderContainer';
import LoginPage from './components/login/LoginContainer';
import {initializeApp} from './components/data/reducerApp';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './components/data/redux-store';
import { HashRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import { withSuspence } from './components/hoc/withSuspence';
const DialogsContainer = React.lazy(() => import('./components/content/dialogs/DialogsContainer'));



 class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

render () {
  if(!this.props.initialized){
    return <Preloader/>
  }
 

  return (
    
    <div className='app-wrapper'>

      <HeaderContainer/>
      <Navbar/>
      
      
      <div className = "app-wrapper-content">
        <Route path = "/dialogs" render = {withSuspence(DialogsContainer)}/>
        <Route path = "/profile/:userId?" render = {()=><ProfileContainer/>}/>
        <Route path = "/users" render = {()=><UsersContainer/>}/>
        <Route path = "/news" component = {News}/>
        <Route path = "/music" component = {Music}/>
        <Route path = "/settings" component = {Settings}/>
        <Route path = "/login" render = {()=><LoginPage />}/>
          
      </div>
  </div>
 );
  }
}



const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose (withRouter, connect (mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
  return (
    <HashRouter basename = {process.env.PUBLIC_URL}>
    <Provider store = {store}>
      <AppContainer/>
    </Provider>
    </HashRouter>
  )
}

export default SamuraiJSApp;
