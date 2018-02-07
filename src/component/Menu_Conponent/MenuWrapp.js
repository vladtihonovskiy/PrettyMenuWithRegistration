import React, { Component } from 'react';
import {

    Link,
} from 'react-router-dom'
import { elastic as Menu } from 'react-burger-menu'
class MenuWrapp extends Component{
    constructor(props,context) {
        super(props, context);
        this.state = {
            sorted: true,
            show:true,
        }
    }
    btnClick=()=>{
        this.setState({
            show:!this.state.show
        })
    }

    render(){
        return (
            <div className="MenuWrap">
                <Menu noOverlay  width={ 200 } pageWrapId={ "page-wrap" } >
                    {this.props.MassiveAllMenuItems.map((item) => {
                            return (
                               <Link to={'/' + item}>{item}</Link>
                            )
                        }
                    )
                    }
                </Menu>
            </div>
        )
    }
}
export default MenuWrapp;