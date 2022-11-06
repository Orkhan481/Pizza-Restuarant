import React from 'react'
import { useState } from 'react'

const Footer = () => {

  const [main,setMain] = useState(false)
  return (
    <div className='footer' onClick={()=>(setMain(main=>!main))} >
   <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1667405560/pizza/pizza-down_epc2jg.png" alt="pizza down" className='pizza-down' />
    
    
    <div className="info">
    <h1>LA CARAVANA</h1>
    <div className="yellow-line"></div>

    <div className="social">
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-whatsapp"></i>
    </div>

    </div>

    <div className="author">All Rights Reserved Ⓒ 2022 Orkhan</div>
    
    </div>
  )
}

export default Footer