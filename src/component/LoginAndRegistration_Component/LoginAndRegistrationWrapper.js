import React, { Component } from 'react';
import RegistrationForm from '../../component/LoginAndRegistration_Component/RegistrationForm'
import LoginForm from '../../component/LoginAndRegistration_Component/LoginForm'
import LogoutForm from '../../component/LoginAndRegistration_Component/LogoutForm'

class LoginAndRegistrationWrapper extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            Login: localStorage.getItem('Login') ===  'true'  ? true: false,
            showLogin:true
        };
    }
    changeShowElement=()=>{
        this.setState({
            showLogin:!this.state.showLogin
        })
    }
    render(){
        return (
            <div>
                {/*Проверка на то чо пользователь залогинен */}
                {this.state.Login===true ? <LogoutForm />:
                    <div className="loginAndRegistrationWrap">
                        {this.state.showLogin ?  <LoginForm changeShowElement={this.changeShowElement} /> : <RegistrationForm changeShowElement={this.changeShowElement} />}
                    </div>

                }

            </div>
        )
    }
}
export default LoginAndRegistrationWrapper;