import React, { Component } from 'react';


import { connect}  from 'react-redux';
import { Input } from 'muicss/react';
class SingleLine extends Component{
    constructor(props, context) {
        super(props, context);
        {
            this.state={
                clear:false,
                valid:true,
                validClass:'blue',
                inputValue:'',

            }
        }
    }
    componentWillMount(){
        if(this.props.item==='phone'||this.props.item==='name') {
            this.setState({
                validClass: 'red',
                valid: false
            })
        }
    }
    onChangeEmail=(e)=>{
        this.setState({inputValue: e.value});
    }
    findSaveValue=(getValueHeader)=> {
            if(getValueHeader!==undefined) {
                if (typeof (getValueHeader) === 'object') {
                    return getValueHeader.length;
                }
                else {
                    return getValueHeader.toString();
                }
            }else{
                return '';
            }
    }
    validateName=({target})=>{
        this.onChangeEmail(target);

        this.props.mainMass===undefined ? this.props.onChangeValue(target,-1):this.props.onChangeValue(target,1);
        if(target.value==='')
        {
            if(this.props.item==='phone'||this.props.item==='name')
            {
                this.setState({
                    validClass:'red',
                    valid:false
                })
            }else {
                this.setState({
                    validClass: 'blue',
                    valid: true
                })
            }
        }else{
            if(this.props.item=='phone')
            {
                let numbervalid=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

                let valid = numbervalid.test(target.value);
                if (valid){

                    if(target.value.length===13){
                        this.setState({
                            validClass:'blue',
                            valid:true
                        })
                    }else{
                        this.setState({
                            validClass:'red',
                            valid:false
                        })
                    }

                }else{
                    this.setState({
                        validClass:'red',
                        valid:false
                    })
                }
                // this.refs.someName.value===''
            }else if(this.props.item=='name')
            {
                let nameValidate= /^[A-Za-z\s]+$/;
                let valid = nameValidate.test(target.value);
                if (valid){

                    if(target.value.length>=4){
                        this.setState({
                            validClass:'blue',
                            valid:true
                        })
                    }else{
                        this.setState({
                            validClass:'red',
                            valid:false
                        })
                    }

                }else{
                    this.setState({
                        validClass:'red',
                        valid:false
                    })
                }
            }else{
                this.setState({
                    validClass:'blue',
                    valid:true
                })
            }

        }

    }
    // componentWillReceiveProps(nextProps){
    //     if(nextProps.clear!==this.state.clear){
    //         this.refs.someName.value = '';
    //         this.setState({
    //             clear:!this.state.clear
    //         })
    //     }
    // }

    render() {

        return (
            this.props.lineId === -1 ?
                <Input onChange={this.validateName} name={this.props.item}
                       defaultValue={this.props.item === 'phone' ? '+380' : ''} ref={this.state.inputValue}
                       className={`form-control ${this.state.validClass}`} key={this.props.item + 'Form'} type="text"
                       placeholder={this.props.item}/> :
                <Input onChange={this.validateName} name={this.props.item}
                       defaultValue={this.findSaveValue(this.props.state.SelfoneData[this.props.lineId][this.props.item])} ref={(input)=>{this.InputValue=input;}}
                       className="form-control" key={this.props.item + 'Form'} type="text"
                       placeholder={this.props.item}/>
        )
    }
}
export default connect(
    state => ({
        state:state.tableValue
    }),
    dispatch => ({
        UserLoginChek: () => {

            dispatch({ type: 'LoginUser' });
        },
        setHeader: (headers)=>{
            dispatch({ type: 'HEADER_CREATE',headers });
        }
    })
)(SingleLine);


