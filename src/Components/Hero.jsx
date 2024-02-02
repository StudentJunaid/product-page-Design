import React from 'react'

function Hero() {
  return (
    <div className='Hero'>
        <div className="left">
        <h1>Your Feet Deserve The Best</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo magnam, porro repellendus eum ul</p>
       <div className="button">
       <button className='btn-1' >Shop Now</button>
        <button className='btn-2'>Catogory</button>
       </div>
        <p>also available</p>
        <div className="image">
        <img src="/images/flipkart.png" alt="" />
        <img src="/images/amazon.png" alt="" />
        </div>
        </div>
        <div className="right">
            <img src="/images/hero-image.png" alt="" />
        </div>
    </div>
  )
}

export default Hero