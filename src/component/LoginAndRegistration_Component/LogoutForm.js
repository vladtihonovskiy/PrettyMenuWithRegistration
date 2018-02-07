import React, { Component } from 'react';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import {
    Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'
class LogoutForm extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            Login: localStorage.getItem('Login') === true ? true: false,
            password:'',
            name:'',
            email:'',
            logout:false
        };
    }
    onChangeEmail=(e)=>{
        this.setState({email: e.target.value})
    }
    onChangePassword=(e)=>{
        this.setState({password: e.target.value})
    }
    saveValue=(e)=>{
        localStorage.setItem('Login',false);
        localStorage.setItem('CurrentUser',JSON.stringify({name:'Аноним'}));
        this.props.UserLoginChek();
        this.setState({
            logout:true
        })

        e.preventDefault();
        e.stopPropagation();
    }
    render(){
        return (

            <Form  className="LogoutWrap" onSubmit={ this.saveValue} >
                {this.state.logout && <Redirect to='/Home'/>}
                <legend>Wanna change Account? </legend>
                <Button >Logout</Button>
            </Form>

        )
    }
}
export default connect(
    state => ({
        menu:state.menu
    }),
    dispatch => ({
        UserLoginChek: () => {

            dispatch({ type: 'NotLoginUser' });
        }})
)(LogoutForm);