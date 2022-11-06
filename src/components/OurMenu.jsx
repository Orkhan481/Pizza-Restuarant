import React from 'react'

const OurMenu = () => {
  return (
    <div className='our-menu'>
        <h1>Our Menu</h1>
        <div className="yellow-line"></div>

        <div className="info">
            <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1667489098/pizza/ourmenu-1_fsyhi2.png" alt="Our menu 1" />
            <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1667489101/pizza/ourmenu-2_skyhik.png" alt="Our menu 2" />
        </div>

        <button className='yellow-btn'>See Menu</button>
    </div>
  )
}

export default OurMenu