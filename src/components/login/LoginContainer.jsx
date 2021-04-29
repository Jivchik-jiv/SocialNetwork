import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { login } from '../data/reducerAuth';
import Login from './Login';


class LoginContainer extends React.Component {

    render () {
     
       return <Login login = {this.props.login} isAuth= {this.props.isAuth} captchaUrl = {this.props.captchaUrl}/>
    }
}


const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})


export default compose (connect (mapStateToProps, {login}))(LoginContainer);