import React from 'react'
import { useState } from 'react'
import Main from './Main'

const Intro = () => {

    const [main,setMain] = useState(false)

  return (
 <>
    <div className='intro' onClick={()=>setMain(main=>!main)}>
      <h1>LA CARAVANA</h1>
      <div className="yellow-line"></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui. Vestibulum ut felis et lorem porta congue vitae nec turpis. Aliquam quis leo at nunc tempor faucibus et ac massa.</p>
        <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1667405560/pizza/pizza-3000285_1920_1_aw2u6h.png" alt="Pizza" className='pizza-up'/>
       
   </div>
   {main && <Main />}
   </>
  )
}

export default Intro