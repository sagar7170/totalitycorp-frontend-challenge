"use client"
import { Rating } from '@mui/material'
import React, { useState } from 'react'
import { useStateValue } from '../Context/StateProvider'
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

function Product({ image, title, price, rating, description ,id,category}) {
  
  const {product,dispatch,productState} = useStateValue();
  const Array= product.cart;
  
  const productdetail = ()=> {
    dispatch({
      type: 'PRODUCT_DETAIL',
      payload:{
        image:image,title:title, price:price, rating:rating, description:description,id:id,category:category
      }
    })
  }

  const Cart=()=>{
    toast.success('Added to Cart');
    dispatch({
      type: 'ADD_TO_CART',
      payload:{
        image:image, title:title, price:price, rating:rating, description:description,id:id
      }
    })
  }

  // console.log("cartindex",product.cart.findIndex(i=>i.id===id))
  return (
    <div className='w-full flex justify-center h-full relative'>
      <div className='w-[22rem]  p-5  flex justify-between flex-col bg-white relative hover:shadow-2xl hover:shadow-black hover:scale-100 duration-500  top-2 '> 
         <h1 className='text-end text-gray-500'>{category}</h1>
        <Link href='productdetail'> <img onClick={productdetail} className='w-60 h-60 m-auto object-contain' src={image} alt="" /></Link>
        <div>
          <h1 className='font-bold  whitespace-nowrap overflow-hidden text-ellipsis' >{title}</h1>
          <h1 className='line-clamp-2'>{description}</h1>
          <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
          <h1 className='font-bold'>$ {price}</h1>
          {(product.cart.findIndex(i=>i.id===id)===-1)?<button  onClick={Cart} className='bg-yellow-400 mt-1 hover:bg-yellow-200 w-full h-9 rounded-sm font-semibold'>Add to Cart</button>:<Link href='/cart'> <button   className='bg-green-400 mt-1 hover:bg-orange-300 w-full h-9 rounded-sm font-semibold'>Go to Cart</button></Link>}
        </div>
      </div>
      <Toaster/>
    </div>
  )
}
// sm:w-64 sm:p-5


export default Product