import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box" fade>Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that allows businesses or 
            individuals to sell products and services to customers over the internet.
            These websites facilitate various transactions, from browsing and selecting
            items to making secure payments and arranging for product delivery.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox