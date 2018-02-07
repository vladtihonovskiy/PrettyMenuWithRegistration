import React, { Component } from 'react';
 // import TableHeaderSingLine from '../../component/table/TableHeaderSingLine'
import { connect}  from 'react-redux';
class TableHeader extends Component{
    constructor(props, context) {
        super(props, context);
    }

    render(){
        return (
            <thead>
            <tr>
                {this.props.headers.map ((item,i)=>{
                   return(<th onClick={()=>{this.props.SoredetValue(item)}}  key={item+'Headers'}>{item}</th>)
                })}
            </tr>
            </thead>
        )
    }
}
export default connect(
    state => ({
        state:state.tableValue
    }),
    dispatch => ({
        SoredetValue: (name) => {

            dispatch({ type: 'SORTED',name });
        },
        setHeader: (headers)=>{
            dispatch({ type: 'HEADER_CREATE',headers });
        }
    })
)(TableHeader);