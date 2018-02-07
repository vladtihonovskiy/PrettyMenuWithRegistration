import React, { Component } from 'react';
import MenuWrapp from '../../component/Menu_Conponent/MenuWrapp'
import {
    Redirect
} from 'react-router-dom'
class contactPage extends Component{
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
                <h1>Contact_page</h1>
            </div>
        )
    }
}
export default contactPage;