"use client"
import React from 'react'
import { useStateValue } from '../Context/StateProvider'
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
function Detail() {
    const { product, dispatch } = useStateValue();
    console.log("productdetail", product.productdetail)
    const { image, title, price, rating, description, id, category } = product.productdetail

    const Cart=()=>{
        toast.success('Added to Cart');
        dispatch({
          type: 'ADD_TO_CART',
          payload:{
            image:image, title:title, price:price, rating:rating, description:description,id:id
          }
        })
      }
    
    return (
        <div className='bg-white w-[90%] sm:flex gap-x-10 m-auto p-10 relative shadow-xl top-16'>
            <img className='w-64 hover:scale-110  duration-500 ease-in-out  object-contain'src={image} alt="" />
            {/* <h1 className='text-end'>{category}</h1> */}
            <div className='flex flex-col  justify-between gap-y-5'>
                <div>
                    <h1 className='text-xl font-semibold'>{title}</h1>
                    <div className='flex mt-2 items-center mb-4'>
                        <h1 className='font-semibold text-white mr-1 bg-green-600 h-6  pl-1 w-8 rounded-md '>{rating}</h1>
                        <Rating className='' name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                    </div>

                    <h1 className='text-3xl font-semibold'>${price}</h1>
                    <div className='' >
                        <h1>Description:</h1>
                        <h1 className='font-thin'>{description}</h1>
                    </div>
                </div>

                <div className='lg:w-1/2 flex flex-col items-end relative'>
                {(product.cart.findIndex(i=>i.id===id)===-1)?<button  onClick={Cart} className='bg-yellow-400  hover:bg-yellow-200 w-full h-12 rounded-sm font-semibold'>Add to Cart</button>:  <div className='w-full' > <Link href='/cart'> <button   className='bg-green-400  hover:bg-yellow-200 w-full h-12 rounded-sm font-semibold'>Go to Cart</button></Link> </div>}
                    <button className='bg-orange-400  mt-2 hover:bg-orange-300 w-full h-12 rounded-sm font-semibold'>Buy Now</button>
                    <Toaster/>
                </div>
            </div>
        </div>
    )
}
export default Detail