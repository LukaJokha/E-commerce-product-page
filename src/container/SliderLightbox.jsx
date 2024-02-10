import React, { useState } from 'react'
import { assetsBaseUrl, product } from "../../data"
import "../styles/SliderLightbox.css"

const SliderLightbox = () => {
  const [currentImage, setCurrentImage] = useState(product.images.originals[0])

  const handleThumbnailClick = (thumbnail) => {
    setCurrentImage(thumbnail)
  }

  return (
    <div className="slider-lightbox">
      <div className="big-picture-container">
        <img src={`${assetsBaseUrl}${currentImage}`} alt="Big Picture" />
      </div>

      <div className="content-container">
        <div className="thumbnails-container">
          {product.images.thumbnails.map((thumbnail, index) => (
            <img
              key={index}
              src={`${assetsBaseUrl}${thumbnail}`}
              alt={`Thumbnail ${index}`}
              className={currentImage === product.images.originals[index] ? 'active-thumbnail' : ''}
              onClick={() => handleThumbnailClick(product.images.originals[index])}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SliderLightbox
