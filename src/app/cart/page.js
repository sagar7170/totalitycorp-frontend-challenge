"use client"
import React from 'react'
import { useStateValue } from '../Context/StateProvider';
import CartProduct from '../Components/CartProduct';
import Link from 'next/link';

function Cart() {
  const { product, dispatch } = useStateValue();
  const Array = product.cart;
  const subtotal = Array.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price, 0
  );

  console.log(subtotal);
  return (
    (Array?.length === 0) ?
      <div className=''>
        <h1 className='text-center text-3xl font-bold text-gray-600 '>Shopping Cart</h1>
        <div className='bg-white  w-full relative top-10 items-center h-96 flex justify-center flex-col sm:mt-2 mt-10'>
          <img className='w-80 h-60 ' src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" />
          <h1 className='font-bold text-xl '>Your cart is empty!</h1>
          <h1 className='m-3' >Add items to it now.</h1>
          <Link href='/' ><button className='bg-blue-600 w-44 text-white mt-2 mb-3 hover:bg-blue-500 font-bold h-10 rounded-sm'>Shop Now</button></Link>
        </div>
      </div> :
      <div className=''>
        <h1 className='text-center text-3xl font-bold text-gray-600 '>Shopping Cart</h1>
        <div className='bg-white h-28 p-5 relative top-2 shadow-xl sm:mt-2 mt-12'>
          <div className='flex'>
            <h1 className='text-xl font-bold flex'> subtotal:</h1>
            <h1 className='text-xl ml-3 mr-3 font-thin'>items({Array?.length})</h1>
            <h1 className='text-xl font-bold flex'> $ {subtotal}</h1>
          </div>
          <button className='bg-yellow-400 mt-3 hover:bg-yellow-200 w-44 h-8 rounded-lg font-semibold '>Procced to Buy</button>
        </div>
        <div >
          {
            Array?.map((item) => (
              <div key={item.id}>
                <CartProduct image={item.image} title={item.title} price={item.price} rating={item.rating} description={item.description} id={item.id} />
              </div>
            ))
          }
        </div>
      </div>
  )
}

export default Cart