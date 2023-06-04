import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {styled} from "styled-components";
import { loginReq, loginReqAction } from "../Redux/Authentication/action";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {

    const location = useLocation();

    console.log(location);


    const {isLoading, isError , isAuth, token} = useSelector(state => state.authReducer)
    // console.log(isLoading, isError , isAuth, token);

    const [email,setEmail] = useState('')

    const [password,setPassword] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = ()=>{
        const loginObj = {email,password}

        // console.log(loginObj);
        dispatch(loginReqAction(loginObj))

    }


    useEffect(()=>{
        if(isAuth && location.state){
          navigate(location.state,{replace : true});
        }
        else if(isAuth && !location.state){
          navigate(`/`);
        }
    },[isAuth])

  return (
    <WRAPPER isauth={`${isAuth}`} iserror ={`${isError}`}>
        <h1>{isAuth  ? "Login Successful" : "Login to Continue"}</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </WRAPPER>
  );
};

export default Login;


const WRAPPER = styled.div`
display : flex;
flex-direction : column;
align-items : center ;
h1{
    color : ${({isauth})=>isauth == "true" ? "green" : "gray"};
}
 input{
    height : 30px;
    width : 220px;
    font-size : 20px;
    margin : 30px;
    border-radius : 10px;
    border : ${({iserror})=>iserror == "false"? "2px solid red" : "2px solid green"};
 }
 button {
    width : 220px;
    height : 30px;
    border-radius : 10px;
 }
`;


// eve.holt@reqres.in