import { Rating } from '@mui/material'
import React from 'react'
import { useStateValue } from '../Context/StateProvider'
import toast, { Toaster } from 'react-hot-toast';

function CartProduct({ image, title, price, rating, description,id }) {
    const {product,dispatch} = useStateValue()
    // console.log("cartproduct",product.cart)
    const remove=()=>{
      toast.success('Removed from Cart');
        dispatch({
          type:'REMOVE_ITEM',
          payload:id
        })
    }

  return (
   <div className='flex sm:flex-row flex-col w-full  relative bg-white p-5 top-5  shadow-2xl'>
        <div  className=' w-52  p-5 '>
          <img src={image} alt="" />
        </div>
       <div className=' w-80 '>
          <h1 className='font-bold  whitespace-nowrap overflow-hidden text-ellipsis' >{title}</h1>
          <h1 className='line-clamp-2'>{description}</h1>
          <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
          <h1 className='font-bold'>$ {price}</h1>
          <button  onClick={remove} className='bg-yellow-400 mt-1 hover:bg-yellow-200 w-full h-9 rounded-sm font-semibold '>Remove</button>
          <Toaster/>
        </div>
    </div>
  )
}

export default CartProduct  