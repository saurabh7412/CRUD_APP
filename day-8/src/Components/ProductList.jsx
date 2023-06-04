import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../Redux/Products/action';
import ProductCard from './ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductList = () => {

  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  // console.log(searchParam.getAll("category"));
  // console.log(searchParam.getAll("brand"));
  // console.log(searchParam.get("orderBy"));
  

  const {isLoading, isError, Products} = useSelector((state)=>state.productReducer)

  // const [data,setData] = useState(Products);
  // console.log(searchParam.get("q"));

  const paramObj = {
    params:{
      category : searchParam.getAll("category"),
      brand : searchParam.getAll("brand"),
      _sort : searchParam.get("orderBy") && "price",
      _order : searchParam.get("orderBy"),
      q: searchParam.get("q")
    }
    
  }
  // console.log(paramObj);

  useEffect(()=>{
    dispatch(getProduct(paramObj));
  },[searchParam])

  return (
    <div style={{display: "grid", gridTemplateColumns: "repeat(3,1fr)",gap:"20px",padding:'10px'}}>
      {
        Products?.map((el)=>(
          <ProductCard key={el.id} {...el}/>
        ))
      }
    </div>
  )
}

export default ProductList