"use client"
import React from 'react'
import { useStateValue } from '../Context/StateProvider'
import Product from './Product';

function Products() {
    const {product,productState} = useStateValue()
    const [Array]=product.products
    console.log(productState.srchquery)
    const array = ()=>{
      if(productState.srchquery!==''){
        return Array?.filter(items=>items.title.toLowerCase().includes(productState.srchquery))
      }
     else if(productState.filter!==""){
        return Array?.filter(item=>item.category===productState.filter)
      }
      else{
        return Array
      }
    }
    
  return (
    <div>
        <h1 className={productState.filter===""?'hidden':'text-center text-gray-500 underline underline-offset-8 decoration-inherit text-3xl  font-semibold mb-3 mt-1'}>{productState.filter}</h1>
    <div className=' sm:flex sm:flex-wrap sm:w-full justify-center'>  
      {array()?.map(item=>(
       <div key={item.id} className=' sm:mr-4 mb-4' >
         <Product image={item.image} title={item.title} price={item.price} rating={item.rating.rate} description={item.description} id={item.id} category={item.category}/>
       </div>
      ))}
    </div>
    </div>
  )
}

export default Products