import React, { Component } from 'react';
import ItemData from '../ItemData'

export default class MainContainer extends Component {

  state=ItemData

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.CatalogEntryView[0].department}
        <img src={this.state.CatalogEntryView[0].Images[0].PrimaryImage[0].image} alt="blender" />
      </div>
    )
  }
}
