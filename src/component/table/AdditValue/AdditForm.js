import React, { Component } from 'react';
import SingleLine from '../AdditValue/SingleLine'
import { connect}  from 'react-redux';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';


class AdditForm extends Component{
    constructor(props, context) {
        super(props, context);
        this.state={
            masssivAllVal:{},
            clear:false,
            FormName:'Созать новую запись',
            phoneCheck:false,
            nameCheck:false,
            phoneCheckRedact:true,
            nameCheckRedact:true,
            showBtn:false,
            showRedactBtn:true,
        }
    }
    componentWillReceiveProps(nextProps){
        console.log('next props line id', nextProps.lineId)
    }
    onChangeValue=(target,id)=>{
        let mas=this.state.masssivAllVal;

        mas[target.name]=target.value;
        this.setState({
            masssivAllVal:mas
        })
        this.showBtnChek(mas,id);
    }
    onBtnClick=()=>{
        this.setState({
            clear:!this.state.clear,
            masssivAllVal:{}
        })
        this.props.handleClick();
    }
    showBtnChek=(mas,id)=>{
        if(id===-1) {
            if (mas.hasOwnProperty('phone')) {
                if (this.state.masssivAllVal['phone'] !== '') {
                    let numbervalid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
                    let valid = numbervalid.test(this.state.masssivAllVal['phone']);
                    if (valid) {
                        if (this.state.masssivAllVal['phone'].length === 13) {
                            this.setState({phoneCheck: true}, function () {
                                if (this.state.nameCheck === true && this.state.phoneCheck === true) {
                                    this.setState({
                                        showBtn: true
                                    })
                                } else {
                                    this.setState({
                                        showBtn: false
                                    })
                                }
                            });
                        } else {
                            this.setState({phoneCheck: false}, function () {
                                if (this.state.nameCheck === true && this.state.phoneCheck === true) {
                                    this.setState({
                                        showBtn: true
                                    })
                                } else {
                                    this.setState({
                                        showBtn: false
                                    })
                                }
                            });
                        }

                    } else {
                        this.setState({phoneCheck: false}, function () {
                            if (this.state.nameCheck === true && this.state.phoneCheck === true) {
                                this.setState({
                                    showBtn: true
                                })
                            } else {
                                this.setState({
                                    showBtn: false
                                })
                            }
                        });
                    }
                }
                else {
                    this.setState({phoneCheck: false}, function () {
                        if (this.state.nameCheck === true && this.state.phoneCheck === true) {
                            this.setState({
                                showBtn: true
                            })
                        } else {
                            this.setState({
                                showBtn: false
                            })
                        }
                    });
                }

            }
            if (mas.hasOwnProperty('name')) {
                if (this.state.masssivAllVal['name'] !== '') {
                    let nameValidate = /^[A-Za-z\s]+$/;
                    let valid = nameValidate.test(this.state.masssivAllVal['name']);
                    if (valid) {
                        if (this.state.masssivAllVal['name'].length >= 4) {
                            this.setState({nameCheck: true}, function () {
                                if (this.state.nameCheck === true && this.state.phoneCheck === true) {
                                    this.setState({
                                        showBtn: true
                                    })
                                } else {
                                    this.setState({
                                        showBtn: false
                                    })
                                }
                            });
                        } else {
                            this.setState({nameCheck: false}, function () {
                                if (this.state.nameCheck === true && this.state.phoneCheck === true) {
                                    this.setState({
                                        showBtn: true
                                    })
                                } else {
                                    this.setState({
                                        showBtn: false
                                    })
                                }
                            });
                        }

                    } else {
                        this.setState({nameCheck: false}, function () {
                            if (this.state.nameCheck === true && this.state.phoneCheck === true) {
                                this.setState({
                                    showBtn: true
                                })
                            } else {
                                this.setState({
                                    showBtn: false
                                })
                            }
                        });
                    }
                } else {
                    this.setState({nameCheck: false}, function () {
                        if (this.state.nameCheck === true && this.state.phoneCheck === true) {
                            this.setState({
                                showBtn: true
                            })
                        } else {
                            this.setState({
                                showBtn: false
                            })
                        }
                    });
                }
            }
        }else{
            if (mas.hasOwnProperty('phone')) {
                if (this.state.masssivAllVal['phone'] !== '') {
                    let numbervalid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
                    let valid = numbervalid.test(this.state.masssivAllVal['phone']);
                    if (valid) {
                        if (this.state.masssivAllVal['phone'].length === 13) {
                            this.setState({phoneCheckRedact: true}, function () {
                                if (this.state.nameCheckRedact === true && this.state.phoneCheckRedact === true) {
                                    this.setState({
                                        showRedactBtn: true
                                    })
                                } else {
                                    this.setState({
                                        showRedactBtn: false
                                    })
                                }
                            });
                        } else {
                            this.setState({phoneCheckRedact: false}, function () {
                                if (this.state.nameCheckRedact === true && this.state.phoneCheckRedact === true) {
                                    this.setState({
                                        showRedactBtn: true
                                    })
                                } else {
                                    this.setState({
                                        showRedactBtn: false
                                    })
                                }
                            });
                        }

                    } else {
                        this.setState({phoneCheckRedact: false}, function () {
                            if (this.state.nameCheckRedact === true && this.state.phoneCheckRedact === true) {
                                this.setState({
                                    showRedactBtn: true
                                })
                            } else {
                                this.setState({
                                    showRedactBtn: false
                                })
                            }
                        });
                    }
                }
                else {
                    this.setState({phoneCheckRedact: false}, function () {
                        if (this.state.nameCheckRedact === true && this.state.phoneCheckRedact === true) {
                            this.setState({
                                showRedactBtn: true
                            })
                        } else {
                            this.setState({
                                showRedactBtn: false
                            })
                        }
                    });
                }

            }
            if (mas.hasOwnProperty('name')) {
                if (this.state.masssivAllVal['name'] !== '') {
                    let nameValidate = /^[A-Za-z\s]+$/;
                    let valid = nameValidate.test(this.state.masssivAllVal['name']);
                    if (valid) {
                        if (this.state.masssivAllVal['name'].length >= 4) {
                            this.setState({nameCheckRedact: true}, function () {
                                if (this.state.nameCheckRedact === true && this.state.phoneCheckRedact === true) {
                                    this.setState({
                                        showRedactBtn: true
                                    })
                                } else {
                                    this.setState({
                                        showRedactBtn: false
                                    })
                                }
                            });
                        } else {
                            this.setState({nameCheckRedact: false}, function () {
                                if (this.state.nameCheckRedact === true && this.state.phoneCheckRedact === true) {
                                    this.setState({
                                        showRedactBtn: true
                                    })
                                } else {
                                    this.setState({
                                        showRedactBtn: false
                                    })
                                }
                            });
                        }

                    } else {
                        this.setState({nameCheckRedact: false}, function () {
                            if (this.state.nameCheckRedact === true && this.state.phoneCheckRedact === true) {
                                this.setState({
                                    showRedactBtn: true
                                })
                            } else {
                                this.setState({
                                    showRedactBtn: false
                                })
                            }
                        });
                    }
                } else {
                    this.setState({nameCheckRedact: false}, function () {
                        if (this.state.nameCheckRedact === true && this.state.phoneCheckRedact === true) {
                            this.setState({
                                showRedactBtn: true
                            })
                        } else {
                            this.setState({
                                showRedactBtn: false
                            })
                        }
                    });
                }
            }
        }
    }
    render(){
        return (
            <div className="additWrapp">
                <div className="additIncide">
                    <h1>{this.state.FormName}</h1>

                    <Form>
                        <div className="form-group">
                            {this.props.lineId===-1 ?  this.props.headers.map ((item,i)=>{
                                return  <SingleLine key={item+'SingLine'} lineId={this.props.lineId} showBtnChek={this.showBtnChek} onChangeValue={this.onChangeValue} clear={this.state.clear} item={item}/>
                            })
                             : this.props.headers.map ((item,i)=>{
                                    return  <SingleLine  key={item+'SingLine'} lineId={this.props.lineId} mainMass={this.props.mainMass} onChangeValue={this.onChangeValue} clear={this.state.clear} item={item}/>
                                })

                            }
                         </div>
                        {this.props.lineId===-1 ?
                            <div className={ this.state.showBtn?'Center':'hide'}> <Button type="button"  onClick={()=>{this.props.AddNewValue(this.state.masssivAllVal); this.onBtnClick();}} className="btn btn-primary mb-2">Добавить</Button></div>:
                            <div className={ this.state.showRedactBtn?'Center':'hide'}> <Button type="button"  onClick={()=>{this.props.changeValue(this.props.lineId,this.state.masssivAllVal); this.onBtnClick();}} className="btn btn-primary mb-2">Исправить</Button></div>

                        }
                    </Form>

                </div>
            </div>
        );
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
        },
        AddNewValue:( masssivAllVal)=>{
            dispatch({type:'ADD_NEW_VALUE_SAGA',masData:masssivAllVal})
        },
        // AddNewValue:( masssivAllVal)=>{
        //     dispatch({type:'ADD_NEW_VALUE_',masData:masssivAllVal})
        // },
        changeValue:( lineId,masssivAllVal)=>{

            dispatch({type:'CHANGE_VALUE',masData:{lineId:lineId,mas:masssivAllVal}})
        }
    })
)(AdditForm);