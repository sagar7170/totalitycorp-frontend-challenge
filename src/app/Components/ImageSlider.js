"use client"
import React from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useStateValue } from '../Context/StateProvider';

function ImageSlider() {
    const { productState, dispatchstate } = useStateValue()
const images =[ 'https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg',
   'https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg']

  return (    
   <div className=' z-0 relative sm:mt-14 mt-24' >  
   <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
     <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      interval={2000}
      >
              <div>
                    <img className='max-h-96' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/July_23/BAU/ATF/luggage/Mokobara/Mokobara_3000._CB600876044_.jpg" />
                </div>
                <div>
                    <img className='max-h-96' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg" />
                </div>
                <div>
                    <img className='max-h-96' src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" />
                </div>
                <div>
                    <img className='max-h-96' src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg" />     
                </div>
                <div>
                    <img className='max-h-96' src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg" />
                </div>
                <div>
                    <img className='max-h-96' src="https://m.media-amazon.com/images/I/6118vUEIQpL._SX3000_.jpg" />
                </div>
            </Carousel>
   </div>
  )
}

export default ImageSlider