import React, { Component } from 'react';
import ItemData from '../ItemData'

export default class MainContainer extends Component {

  state=ItemData

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.CatalogEntryView[0].department}
      </div>
    )
  }
}
