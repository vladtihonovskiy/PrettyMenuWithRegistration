import React, { Component } from 'react';
// import MenuWrapp from '../../component/Menu_Conponent/MenuWrapp'
import ProductWrapp from '../../component/Product_Component/ProductWrapp'
import {
    Redirect
} from 'react-router-dom'
class itemPage extends Component{
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
                <ProductWrapp />
            </div>
        )
    }
}
export default itemPage;