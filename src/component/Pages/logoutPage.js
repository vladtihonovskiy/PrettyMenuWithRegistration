import React, { Component } from 'react';
import LogoutForm from '../../component/LoginAndRegistration_Component/LogoutForm'

class logoutPage extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            Login: localStorage.getItem('Login') ===  'true'  ? true: false,
            showLogin:true
        };
    }

    render(){
        return (
            <div>
                <LogoutForm />
            </div>
        )
    }
}
export default logoutPage;