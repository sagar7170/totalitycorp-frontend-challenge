"use client"

import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useStateValue } from '../Context/StateProvider';
import Link from 'next/link';
import Sidebar from './Sidebar';

function Header() {

  const { productState, dispatchstate,product,dispatch } = useStateValue()
   const [input,setInput] = useState(null)
  const Array= product.cart;
 const cartlength = Array?.length;
  
  const showSlider = () => {
    dispatchstate({
      type: 'SHOW_SLIDER',
    })
  }

  const handleinput=(e)=>{
    setInput(e.target.value.toLowerCase())
    dispatchstate({
      type:'SEARCH_ITEMS',
      payload:input
    })
  }
// console.log("textinput",input)
  return (
    <div className='bg-black fixed z-10 w-full '>
      <div id='nav' className='bg-black w-full h-14 flex items-center justify-between rounded-md '>
        <div onClick={showSlider} className='hover:bg-slate-800'>
          <MenuIcon className='' sx={{ color: 'white' }} fontSize="large" />
        </div>
        <Link href='/'><h1 className=' logo  ml-2 font-bold text-2xl '>ShopPing</h1></Link>
        <div className='flex items-center p-1 text-white ml-4 w-full  sm:visible invisible'>
          <input onChange={handleinput}  className='p-1 rounded-sm w-full text-black ' type="text" />
          <SearchIcon fontSize='large' sx={{ color: 'white' }} />
        </div>
        <Link href="/cart">
        <div className=''>
          <Badge badgeContent={cartlength} color="error" sx={{ margin: 2 }}>
            <ShoppingCartIcon sx={{ color: 'white' }} fontSize="large" />
          </Badge>
        </div>
        </Link>
      </div>
      <div className='flex items-center p-1 pt-0 sm:hidden w-full '>
        <input onChange={handleinput}  className='p-1 rounded-sm w-full' type="text" />
          <SearchIcon fontSize='large' sx={{ color: 'white' }} />
      </div>
      <Sidebar/>
    </div>
  )
}

export default Header
