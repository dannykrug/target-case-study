import React, { Component } from 'react';
import Highlight from './Highlight'

export default class HighlightsContainer extends Component {
  render(){
    console.log(this.props);
    let highlights = this.props.highlights.map(highlight => <li><Highlight highlight={highlight} /></li>)

    return (
      <div>
      <ul>
      {highlights}
      </ul>
      </div>
    )
  }
}