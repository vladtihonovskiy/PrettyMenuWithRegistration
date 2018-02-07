import React, { Component } from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import SweetAlert from 'react-bootstrap-sweetalert';

class RegistrationForm extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            Login: localStorage.getItem('Login') === true ? true: false,
            password:'',
            name:'',
            email:'',
            showAlert:false,
            title:''
    };
    }
    onChangeEmail=(e)=>{
        this.setState({email: e.target.value})
    }
    onChangePassword=(e)=>{
        this.setState({password: e.target.value})
    }
    onChangeName=(e)=>{
        this.setState({name: e.target.value})
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
            this.setState({
                title:"Такой пользвователь уже зарегистрированн", showAlert:true
            })

        }else{
            mas[this.state.email]={name: this.state.name,password:this.state.password}
            localStorage.setItem('Users',JSON.stringify(mas));
            return 1;
        }
        localStorage.setItem('Users',JSON.stringify(mas));
            e.preventDefault();
            e.stopPropagation();
    }
    render(){
        return (


                <Form className="RegistrationWrap" onSubmit={ this.saveValue} >
                    <SweetAlert warning={ false} show={this.state.showAlert} title={this.state.title} onConfirm={this.ColeAlert} />
                    <legend>Title</legend>
                    <Input label="Email Address" value={this.state.email} onChange={this.onChangeEmail} type="email" required={true} defaultValue="Validation error" />
                    <Input label="Password"  value={this.state.password} onChange={this.onChangePassword} type="password" required={true} />

                    <Textarea label="Name"   value={this.state.name} onChange={this.onChangeName} floatingLabel={true} required={true} />

                    <Button >Sumbit</Button>
                    <Button onClick={this.props.changeShowElement} type="button">Have an account ?</Button>
                </Form>

        )
    }
}
export default RegistrationForm;