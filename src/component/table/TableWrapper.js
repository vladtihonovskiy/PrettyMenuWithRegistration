import React, { Component } from 'react';
import TableHeader from '../../component/table/TableHeader';
import Modal from '../../component/Modal';
import { connect}  from 'react-redux';
 import AdditForm from '../../component/table/AdditValue/AdditForm';

class TableWrapper extends Component{
    constructor(props, context) {
        super(props, context);
        this.state={

            headers:['phone','gender','age','balance','friends','name','company','address','EmptyFill'],
            showModal: false,
            lineId: -1,
            userName: JSON.parse(localStorage.getItem('CurrentUser')).name
        };

    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }
    componentWillMount(){
        let mas={};
        this.state.headers.map((item,i)=>{
            mas[item]='';
        });
        this.props.setHeader(mas);
    }
    handleClick =()=> {
        this.setState({ showModal: !this.state.showModal
        });
    }
    setLineId=(value)=>{

        this.setState({lineId:value});
        this.handleClick();
    }

    findSaveValue=(getValueHeader,getValueMass)=> {
        if (getValueHeader in getValueMass) {
            if(typeof (getValueMass[getValueHeader])==='object'){
                return  getValueMass[getValueHeader].length;
            }
            else{
                return getValueMass[getValueHeader].toString();
            }

        }else{
            return 'Empty'
        }
    }
    sortValue=(name,type)=>{
        this.setState({
            mainMass:this.state.mainMass.sort(function(a, b){
                if(type) {
                    if (a[name] < b[name]) return -1;
                    if (a[name] > b[name]) return 1;
                    return 0;
                }else{
                    if (a[name] < b[name]) return 1;
                    if (a[name] > b[name]) return -1;
                    return 0;
                }
            })
        })
    }
    AddValueTotavle=(valueAdd,lineId)=>{
        let mas = {};
        mas = this.state.mainMass;
        if(lineId==-1) {


            mas.push(valueAdd);

            this.setState({
                mainMass: mas
            })
        }else{

            this.RevriteFunction(valueAdd,lineId);
        }
    }
    searcSend=()=>{
        console.log(this.searchInput.value);
        this.props.setSearchValue(this.searchInput.value)
    }
    fiterObject=(value)=>{
       return value.name.includes(this.props.state.filter);
    }
    RevriteFunction=(valueAdd,lineId)=>{
        let mas = {};
        mas = this.state.mainMass;
        for (let key in valueAdd) {
            mas[lineId][key]=valueAdd[key];
        }
        this.setState({
            mainMass: mas
        })
    }
    render(){

        return (this.props.state.tableValue.SelfoneData!==""?(
            <div>
                <h1 className="Center">Hi {this.state.userName}</h1>
                <input onChange={this.searcSend} type="text"  placeholder="Search by company" ref={(input)=>{this.searchInput=input;}}/>
                <button onClick={()=>{this.handleClick();    this.setState({lineId:-1}); }}>Trigger Modal</button>
                <Modal click  showModal={this.state.showModal} handleClick={this.handleClick}  >
                    <AdditForm  headers={this.state.headers} handleClick={this.handleClick} lineId={this.state.lineId}  AddValueTotavle={this.AddValueTotavle} />
                </Modal>
                <table className="table  table-bordered table-hover ">

                   <TableHeader sortValue={this.sortValue}  headers={this.state.headers} />
                    <tbody>
                    {
                        (this.props.state.tableValue.SelfoneData.filter(this.fiterObject)).map((item, i) => {
                           let id=i;
                           return (

                               <tr key={id}>{
                                   this.state.headers.map((item, i) => {
                                       return (
                                           <td key={id + item}>{this.findSaveValue(item, this.props.state.tableValue.SelfoneData.filter(this.fiterObject)[id])}</td>)
                                   })
                               }
                                   <td onClick={() => {
                                       this.setLineId(id)
                                   }} key={id + 'Close'}>Изменить
                                   </td>
                               </tr>
                           )
                       })}




                    </tbody>
                </table>
                </div>

            ):(
                <h1>Loading </h1>
            )

        );
    }
}
export default connect(
    state => ({
        state:state
    }),
    dispatch => ({
        UserLoginChek: () => {

            dispatch({ type: 'LoginUser' });
        },
        setHeader: (headers)=>{
            dispatch({ type: 'HEADER_CREATE',headers });
        },
        setSearchValue:(value)=>{
            dispatch({type:'SEARCH_PARAMS',value})
        }
    })
)(TableWrapper);