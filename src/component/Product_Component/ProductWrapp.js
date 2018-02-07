import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class ProductWrapp extends Component{
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
        return (this.state.loadingJson?(


            <div className="container content">

                <div className="row">

                    {this.state.mainMass.map((item,i)=>{
                        return (
                            <div key={item.id+"ItemInList"+i} className="col-md-4 products">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="product">
                                            <div className="product-img">
                                                <Link  to={`/Product/${item.id}`}><img src={'https://xcom.ua/images/items/big/'+item.img} /></Link>
                                            </div>
                                            <p className="product-title">
                                                <Link to={`/Product/${item.id}`}>{item.title}</Link>
                                            </p>
                                            <p className="product-price">Price: €{item.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>





            ):(
                <h1>Loading </h1>
            )

        );
    }
}
export default ProductWrapp;