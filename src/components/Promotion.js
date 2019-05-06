import React, { Component } from 'react';

export default class Promotion extends Component {
  render(){
    return (
      <div>
      {this.props.promotion.Description[0].shortDescription}
      </div>
    )
  }
}
