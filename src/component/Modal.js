import React, { Component } from 'react';
import ReactModal from 'react-modal';
// import AdditForm from '../component/AdditForm'
class Modal extends Component {

    componentWillReceiveProps(nextProps){
        console.log('next props line id', nextProps.lineId)
    }
    render () {
        return (

                <ReactModal
                    isOpen={this.props.showModal}
                    contentLabel="Minimal Modal Example"
                    onRequestClose={this.props.handleClick}
                    ariaHideApp={false}
                >

                    <button className="floatRight" onClick={this.props.handleClick}>Close Modal</button>
                    {this.props.children}
                </ReactModal>

        );
    }
}
export default Modal;
