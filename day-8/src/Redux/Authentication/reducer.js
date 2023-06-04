import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "./actionTypes"

const initialState = {
  isLoading : false,
  isError : false,
  isAuth : false,
  token : ''
}
export const reducer1 = (state=initialState,{type,payload})=>{
  switch(type){
    case  LOGIN_REQUEST  : {
      return {...state, isLoading : true}
    }
    case  LOGIN_FAILURE  : {
      return {...state, isLoading : false , isError : true}
    }
    case  LOGIN_SUCCESS  : {
      return {...state, isLoading : false, isError : false, isAuth : true, token : payload.token }
    }
    case LOG_OUT : {
      return {...state, isAuth : false}
    }
    default: return state
  }
}






























// import {
//     DELETE_TODO_SUCCESS,
//   GET_TODO_SUCCESS,
//   PATCH_TODO_SUCCESS,
//   POST_TODO_SUCCESS,
//   TODO_FAILURE,
//   TODO_REQUEST,
//   TODO_SUCCESS,
// } from "./actionTypes";

// const initialState = {
//   title: "",
//   status: false,
//   isLoading: false,
//   isError: false,
//   todos: [],
// };

// export const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case TODO_REQUEST: {
//       return { ...state, isLoading: true };
//     }
//     case TODO_FAILURE: {
//       return { ...state, isLoading: false, isError: true };
//     }
//     case GET_TODO_SUCCESS: {
//       return { ...state, isLoading: false, todos: payload };
//     }
//     case POST_TODO_SUCCESS: {
//       return { ...state, todos: [...state.todos, payload] };
//     }
//     case PATCH_TODO_SUCCESS: {

//         // return console.log("work");
//       let filtered = state.todos;
//       filtered = filtered.map((el) => {
//         if (el.id === payload.id) {
//           return (el.status = payload.status);
//         }
//       });
//       console.log(filtered);

//       return { ...state, todos: [...state.todos] };

//     //   let filtered = state.todos.map((el)=>(payload.id === el.id ? payload.status = el.status : el))

//     //   console.log(filtered);
//     //   return {...state, todos : [...state.todos,filtered]}
//     //   return {...state, todos : [...filtered]}
//     }
//     case DELETE_TODO_SUCCESS: {
//         console.log(payload);
//         let filtered = state.todos.filter((el)=>el.id !== payload)
//         console.log(filtered);
//         return { ...state, todos: [...filtered] };
//       }
//     default:
//       return state;
//   }
// };
