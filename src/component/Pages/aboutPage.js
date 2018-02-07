import React, { Component } from 'react';
import {
    Redirect
} from 'react-router-dom'
class aboutPage extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            Login: localStorage.getItem('Login') ===  'true'  ? true: false
        };
    }
    render(){
        return (
            <div>
                {/*Проверка на то чо пользователь залогинен */}
                {this.state.Login===false &&  <Redirect to='/Login'/> }
                <h1>About Page</h1>
            </div>
        )
    }
}
export default aboutPage;