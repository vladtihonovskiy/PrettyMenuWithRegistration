
import React, { Component } from 'react';
import Home_page from '../src/component/Pages/homePage';
import About_page from '../src/component/Pages/aboutPage';
import Contact_page from '../src/component/Pages/contactPage';
import New_page from '../src/component/Pages/newPage';
import Item_page from '../src/component/Pages/itemPage';
import Login_page from '../src/component/Pages/loginPage';
import LogoutPage from '../src/component/Pages/logoutPage';
import MenuWrapp from '../src/component/Menu_Conponent/MenuWrapp';
import Modal from '../src/component/Modal';
import { connect } from 'react-redux'


import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'
class App extends Component{
    constructor(props,context) {
        super(props, context);
        this.state = {
            showFullWidth:false,
        }
    }
    componentDidMount () {
    this.props.AddTelePhone();
    }
    showFullWidth=()=>{
        this.setState({
            showFullWidth:!this.state.showFullWidth
        })
    }
    render(){

        return (
            <Router >
                <div >
                    <MenuWrapp  MassiveAllMenuItems={this.props.menu} showFullWidth={this.showFullWidth}/>
                    <main   id="page-wrap" className={this.state.showFullWidth ? 'main showAllWidth':'main showSmallWidth'}>
                        <Route path='/Home' component={Home_page}></Route>
                        <Route exact path='/' component={Modal}></Route>
                        <Route path='/About' component={About_page}></Route>
                        <Route path='/Contact' component={Contact_page}></Route>
                        <Route path='/Product/:number' component={New_page}/>
                        <Route exact path='/Product' component={Item_page}/>
                        <Route  path='/Login' component={Login_page}/>
                        <Route  path='/Logout' component={LogoutPage}/>
                    </main>
                </div>


            </Router>
        )
    }
}
export default connect(
    state => ({
        track: state.tracks,
        menu:state.menu
    }),
    dispatch => ({
            AddTelePhone: () => {
                fetch('source/tableValue.json')
                    .then( (response) => {
                        if (response.status >= 400) {
                            throw new Error('Bad response from server');
                        }
                        return response.json();
                    })
                    .then( (data) => {
                        dispatch({ type: 'ADD_TELEPHONE', data });
                    });
            }})
)(App);