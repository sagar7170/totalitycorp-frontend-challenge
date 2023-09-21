"use client"
import React, { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from './reducer';

export const StateContext = createContext();

export const StateProvider = ({children}) => {
  const [product,dispatch]=useReducer(reducer, {
    products:[],
    cart:[],
    productdetail:{},
 })
 
 const [productState,dispatchstate]=useReducer(reducer,{
    slider:false,
    filter:'',
    srchquery:''
 })

 useEffect(() => {
      const apiData = async ()=>{
        const res = await fetch('https://fakestoreapi.com/products');
        const Product_data = await res.json()
        dispatch({
          type:'SET_ALL_PRODUCTS',
          payload:Product_data
        })
      }
      apiData()
  },[])
  
  return (
    <StateContext.Provider value={{productState,dispatchstate,product,dispatch}}>
        {children}
    </StateContext.Provider>
  )
}

export const useStateValue = () => useContext(StateContext);

