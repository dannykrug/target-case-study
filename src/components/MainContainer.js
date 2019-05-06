import React, { Component } from 'react';
import ItemData from '../ItemData'
import ProductContainer from './ProductContainer'

export default class MainContainer extends Component {

  state=ItemData.CatalogEntryView[0]

  render() {
    console.log(this.state);
    return (
      <div>
        <ProductContainer product={this.state}/>
      </div>
    )
  }
}
