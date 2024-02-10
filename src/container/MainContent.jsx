import { useState } from 'react'
import Review from "./Review"
import "../styles/MainContent.css"
import SliderLightbox from "./SliderLightbox"
import plusLogo from "./images/icon-plus.svg"
import minusLogo from "./images/icon-minus.svg"

const MainContent = () => {
  const [quantity, setQuantity] = useState(1)

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleIncrease = () => {
    setQuantity(quantity + 1)
  }

  return (
    <>
      <div className="main-content">
        <SliderLightbox />
        <div className="additional-text">
          <span>SNEAKER COMPANY</span>
          <h2>Fall Limited Edition Sneakers</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quasi velit voluptas illum laudantium provident, ipsam doloribus ad ratione illo at eveniet. Quo, alias? Reprehenderit repellat sit sunt aliquid, adipisci cumque asperiores inventore! Explicabo a fugit nostrum est cumque cupiditate?</p>
          <div className="sale-container">
            <h3>$125.00</h3>
            <div className="sale">50%</div>
          </div>
          <h5>$250.00</h5>
          <div className="quantity-container">
            <div className="quantity">
              <button className="minus" onClick={handleDecrease}><img src={minusLogo}/></button>
              <span>{quantity}</span>
              <button className="plus" onClick={handleIncrease}><img src={plusLogo}/></button>
            </div>
            <div className="addToCart">Add to Cart</div>
          </div>
        </div>
      </div>
    <Review/>
    </>
  )
}

export default MainContent
