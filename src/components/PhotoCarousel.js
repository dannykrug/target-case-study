import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export default class PhotoCarousel extends Component {

  render() {
    let imageArray = this.props.items.AlternateImages
    let images = []

    console.log(images);

    let getImages = (array) => {
      for(let i=0; i < array.length; i++) {
        images.push({original: array[i].image, thumbnail: array[i].image})
      }
    }

    getImages(imageArray)

    return (
      <div style={{width: '75%'}}>
      <ImageGallery
      items={images}
      showPlayButton={false}
      />
      </div>
    )
  }
}
