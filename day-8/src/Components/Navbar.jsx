import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {styled} from "styled-components"
import { logOut } from '../Redux/Authentication/action'

const Navbar = () => {
  const isAuth = useSelector((state)=>state.authReducer.isAuth);
  const dispatch = useDispatch();
  return (
    <WRAPPER>
    <div >
        <Link to={"/"}>Home</Link>
        <Link to={"/admin"}>Admin</Link>
        {
          isAuth ? <button onClick={()=>dispatch(logOut)}>LogOut</button> :
        <Link to={"/login"}>Login</Link>
        }
    </div>
    </WRAPPER>
  )
}

export default Navbar



const WRAPPER = styled.div`

    div {
        display : flex ;
        justify-content : space-around;
        color : red;
        border-bottom : 2px solid gray;
        padding : 20px;
        width:90%;
        margin : auto;
        margin-bottom : 30px;
    }
`;