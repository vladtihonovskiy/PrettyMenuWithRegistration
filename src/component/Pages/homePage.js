import React, { Component } from 'react';
import {
    Redirect
} from 'react-router-dom'
import TableWrapper from '../../component/table/TableWrapper'
class homePage extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            Login: localStorage.getItem('Login') === 'true' ? true: false
        };
    }
    render(){
        return (
            <div>
                {/*Проверка на то чо пользователь залогинен */}
                {this.state.Login===false &&  <Redirect to='/Login'/> }
                <TableWrapper />
            </div>
        )
    }
}
export default homePage;