import { DELETE_PROD_SUCCESS, GET_PROD_SUCCESS, PATCH_PROD_SUCCESS, POST_PROD_SUCCESS, PROD_FAILURE, PROD_REQUEST } from "./actionTypes"

 
 const initialState = {
    isLoading : false,
    isError : false,
    Products : [],
 }

 export const reducer2 =(state = initialState,{type,payload})=>{
    switch(type){
      case  PROD_REQUEST : {
         return {...state, isLoading : true}
      }
      case PROD_FAILURE : {
         return {...state , isLoading : false, isError : true}
      }
      case POST_PROD_SUCCESS : {
         return {...state , isLoading : false , isError : false ,Products : [...state.Products,payload]}
      }
      case GET_PROD_SUCCESS : {
         return {...state, isLoading : false, isError : false, Products : payload}
      }
      case PATCH_PROD_SUCCESS : {
         return {...state, isLoading : false, isError : false}
      }
      case DELETE_PROD_SUCCESS : {
         let filtered = state.Products.filter((el)=> el.id != payload)

         return {...state, isLoading : false , Products : filtered}
      }
        default: return state
    }

 }