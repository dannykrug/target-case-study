import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

library.add(faTag)

export default class Promotion extends Component {

  state = {
    isClicked: false
  }

  render(){

    let promotion = this.props.promotion

    // let handleClick = (e) => {
    //     e.preventDefault()
    //     this.setState({
    //       isClicked: !this.state.isClicked
    //     })
    //   }

    console.log(this.props);
    return (
      <div className="promo-text">
      <span><FontAwesomeIcon icon="tag" /></span> {promotion.Description[0].shortDescription}
          {
            this.state.isClicked &&
          <div className="promo-legal">
            {promotion.Description[0].legalDisclaimer}
          </div>
        }
      </div>
    )
  }
}
