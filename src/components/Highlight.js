import React, { Component } from 'react';

export default class Highlight extends Component {
  render(){
    console.log(this.props);
    return (
      <div>
      {this.props.highlight}
      </div>
    )
  }
}
