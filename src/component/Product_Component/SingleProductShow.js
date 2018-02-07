import React, { Component } from 'react';
import { Link } from 'react-router'
class SingleProductShow extends Component{
    constructor(props, context) {
        super(props, context);
        this.state={
            loadingJson:false,
            mainMass:[],
        };
    }
    componentDidMount () {
        fetch('../source/selfoneList.json')
            .then( (response) => {
                if (response.status >= 400) {
                    throw new Error('Bad response from server');
                }
                return response.json();
            })
            .then( (data) => {
                console.log('data', data.items);

                this.setState({
                    loadingJson:!this.state.loadingJson,mainMass:data.items
                })
            });
    }
    render(){
        return (

            this.state.loadingJson?(


                <div className="container content">


                        {this.state.mainMass.map((item,i)=>{
                            if (item.id==this.props.elementId)
                            {
                                return (
                                    <div key={item.id+"ItemInList"+i} className=" products">
                                        <div className="proudctclass">

                                                <div className="product">
                                                    <div className="product-img">
                                                        <img src={'https://xcom.ua/images/items/big/'+item.img} />
                                                    </div>
                                                    <p className="product-title">
                                                        <p>{item.title}</p>
                                                        <p>{item.description}</p>
                                                    </p>

                                                    <p className="product-price">Price: €{item.price}</p>
                                                </div>

                                        </div>
                                    </div>
                                )
                            }})}

                </div>
            ):(
                <h1>Loading </h1>
            )

        );
    }
}
export default SingleProductShow;