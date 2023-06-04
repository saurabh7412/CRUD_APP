import React from 'react'
import { useSelector } from 'react-redux'
import SideBar from '../Components/SideBar'
import ProductList from '../Components/ProductList'
import { styled } from 'styled-components'

export const HomePage = () => {
    
  return (<DIV>
    <div className='sidebar'>
      <SideBar/>
    </div>
    <div className='productlist'>
      <ProductList/>
    </div>
  </DIV>
  )
}

const DIV = styled.div`
display : flex;
align-items : top;
.sidebar{
width: 15%;
border-right : 2px solid gray;
height : 80vh;
}
.productlist{
  width:85%;
}

`
