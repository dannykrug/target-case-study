import React, { Component } from 'react';
import ItemData from '../ItemData'
import ProductContainer from './ProductContainer'

export default class MainContainer extends Component {

  state= {product:ItemData.CatalogEntryView[0], atc:"button", pickup:"button"}

  componentWillMount() {
    let code = this.state.product.purchasingChannelCode
    if(code === "1") {
        this.setState({
          pickup: "hidden"
        })
      } else if(code === "2") {
        this.setState({
          atc: "hidden"
        })
      }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <ProductContainer product={this.state}/>
      </div>
    )
  }
}
