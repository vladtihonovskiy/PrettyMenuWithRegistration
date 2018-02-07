import React, { Component } from 'react';
import MenuWrapp from '../../component/Menu_Conponent/MenuWrapp'
import SingleProductShow from '../../component/Product_Component/SingleProductShow'
import {
    Redirect
} from 'react-router-dom'
class newPage extends Component{
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
                <SingleProductShow elementId={this.props.match.params.number} />
            </div>

        )
    }
}
export default newPage;