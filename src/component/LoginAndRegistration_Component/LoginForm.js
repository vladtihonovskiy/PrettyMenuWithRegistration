import React, { Component } from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import SweetAlert from 'react-bootstrap-sweetalert';
import {
    Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'
class LoginForm extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            Login: localStorage.getItem('Login') === true ? true: false,
            password:'',
            name:'',
            email:'',
            showAlert:false,
            title:false,
        };
    }

    onChangeEmail=(e)=>{
        this.setState({email: e.target.value})
    }
    onChangePassword=(e)=>{
        this.setState({password: e.target.value})
    }
    ColeAlert=()=>{
        this.setState({
            showAlert:false
        })
    }
    saveValue=(e)=>{
        let mas= JSON.parse(localStorage.getItem('Users'));
        if(mas===null) {
            mas = {};
        }
        if(mas.hasOwnProperty( this.state.email )){
            if(mas[this.state.email].password=== this.state.password){
                localStorage.setItem('Login',true);
                localStorage.setItem('CurrentUser',JSON.stringify({name:mas[this.state.email].name}));
                this.props.UserLoginChek();

                this.setState({
                    homeRedirect:true
                })
                e.preventDefault();
                e.stopPropagation();

            }else{
                this.setState({
                        showAlert: true,title:'Неверный пароль'
                    }
                )
            }
        }else{
            localStorage.setItem('Login',false);
            localStorage.setItem('CurrentUser','')
            this.setState({
                    showAlert: true,title:'Нет такого пользователя'
                }
            )
        }
        e.preventDefault();
        e.stopPropagation();
        console.log(JSON.parse(localStorage.getItem('Login')));

    }
    render(){

        return (

                <Form  className="LoginWrap" onSubmit={ this.saveValue} >
                    {this.state.homeRedirect &&
                    <Redirect to='/Home'/>
                    }
                    <SweetAlert warning={ true} show={this.state.showAlert} title={this.state.title} onConfirm={this.ColeAlert} />
                    <legend>Login</legend>
                    <Input label="Email Address" value={this.state.email} onChange={this.onChangeEmail} type="email" required={true} defaultValue="Validation error" />
                    <Input label="Password"  value={this.state.password} onChange={this.onChangePassword} type="password" required={true} />
                    <Button >Sing in</Button>
                    <Button onClick={this.props.changeShowElement} type="button">Registration</Button>
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

            dispatch({ type: 'LoginUser' });
        }})
)(LoginForm);