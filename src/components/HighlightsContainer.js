import React from 'react';
import Highlight from './Highlight'
import '../css/highlights.css'

const HighlightsContainer = (props) => {

    let highlights = props.highlights.map(highlight => <li><Highlight highlight={highlight} /></li>)

    return (
      <div>
      <ul>
      {highlights}
      </ul>
      </div>
    )
  }

export default HighlightsContainer
