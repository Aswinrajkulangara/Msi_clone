import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Courosal() {
  return (
    <div id='btn'>
        <Carousel fade>
      <Carousel.Item>
        <img 
        className='d-block w-100'
        src="https://storage-asset.msi.com/global/picture/banner/banner_1698219753809a67b0cd9118300e55af7b87227b85.jpeg" alt="first" />
        
      </Carousel.Item>
      <Carousel.Item>
      <img 
        className='d-block w-100'
        src="https://storage-asset.msi.com/in/picture/banner/banner_16963047816cc1a886567a8151b70f8b7692eb3514.jpeg" alt="first" />
        
      </Carousel.Item>
      <Carousel.Item>
      <img 
        className='d-block w-100'
        src="https://storage-asset.msi.com/global/picture/banner/banner_169776311869a3f6a8a8f1b7f7039dd2586f586c19.jpeg" alt="first" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Courosal