import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "./actionTypes"
import axios from "axios";
export const loginReq = ()=>{
  return {type : LOGIN_REQUEST }
}
export const loginSuc = (payload)=>{
  return {type : LOGIN_SUCCESS, payload }
}
export const loginFail = ()=>{
  return {type : LOGIN_FAILURE }
}



export const loginReqAction = (userdata)=>(dispatch)=>{
  dispatch(loginReq())

  axios.post(`https://reqres.in/api/login`,userdata).then((res)=>{
    console.log(res.data);
    dispatch(loginSuc(res.data))
  }).catch(()=>{
    dispatch(loginFail())
  })
}


export const logOut = (dispatch)=>{
  dispatch({type : LOG_OUT})
  
}



















// import { useDispatch } from "react-redux"
// import { DELETE_TODO_SUCCESS, GET_TODO_SUCCESS, PATCH_TODO_SUCCESS, POST_TODO_SUCCESS, TODO_FAILURE, TODO_REQUEST } from "./actionTypes"
// import axios from "axios"


// export const RequestAction=()=>{
//     return {type : TODO_REQUEST }
// }

// export const failureAction=()=>{
//     return {type : TODO_FAILURE }
// }

// export const getSuccessAction=(payload)=>{
//     return {type : GET_TODO_SUCCESS, payload }
// }

// export const postSuccessAction=(payload)=>{
//     return {type : POST_TODO_SUCCESS ,payload}
// }


// export const patchSuccessAction=(payload)=>{
//     return {type : PATCH_TODO_SUCCESS ,payload}
// }

// export const deleteSuccessAction=(payload)=>{
//     return {type : DELETE_TODO_SUCCESS ,payload}
// }

// // const dispatch = useDispatch();

// export const getTodos =(page)=> (dispatch)=>{
//     dispatch(RequestAction())
//   axios.get(`http://localhost:8080/todos?_limit=4&_page=${page}`).then((res)=>{
//     //   console.log(res.headers.get('x-total-count'));
//       dispatch(getSuccessAction(res.data))
//   }).catch((err)=>{
//     dispatch(failureAction())
//   })
  
// }

// export const postTodos=(inpVal)=>(dispatch)=>{
//     const newObj = {
//         title : inpVal,
//         status : false
//       }
//       dispatch(RequestAction())
//       axios.post(`http://localhost:8080/todos`,newObj).then((res)=>{
//         dispatch(postSuccessAction(res.data))
//       }).catch((err)=>{
//         dispatch(failureAction())
//       })
// }


// export const toggleTodo = (id,status)=>(dispatch)=>{
//     console.log(id,status);
    
//     dispatch(RequestAction())

//     axios.patch(`http://localhost:8080/todos/${id}`,{status}).then((res)=>{
//         console.log(res.data);
//         dispatch(patchSuccessAction(res.data))
//     })
// }

// export const deleteTodo=(id)=>(dispatch)=>{

//   axios.delete(`http://localhost:8080/todos/${id}`).then((res)=>{
//     console.log(res.data);
//     dispatch(deleteSuccessAction(id))
//   })

// }