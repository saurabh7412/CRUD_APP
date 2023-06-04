import axios from "axios"
import { DELETE_PROD_SUCCESS, GET_PROD_SUCCESS, PATCH_PROD_SUCCESS, POST_PROD_SUCCESS, PROD_FAILURE, PROD_REQUEST } from "./actionTypes"


export const postProduct =(newProd)=>(dispatch)=>{
    dispatch({type : PROD_REQUEST})
    axios.post(`http://localhost:8080/products`,newProd).then((res)=>{
        dispatch({type : POST_PROD_SUCCESS, payload : res.data})
    }).catch(()=>{
        dispatch({type : PROD_FAILURE})
    })
}

export const getProduct =(param)=>(dispatch)=>{
    dispatch({type : PROD_REQUEST})

    axios.get(`http://localhost:8080/products`,param).then((res)=>{
        dispatch({type : GET_PROD_SUCCESS, payload : res.data})

    }).catch((err)=>{
        dispatch({type : PROD_FAILURE})
    })
}


export const patchProduct = (id,newData)=>(dispatch)=>{
    dispatch({type : PROD_REQUEST})

   return axios.patch(`http://localhost:8080/products/${id}`,newData).then((res)=>{
        dispatch({type : PATCH_PROD_SUCCESS})
    })
}

export const deleteProduct =(id)=>(dispatch)=>{
    dispatch({type : PROD_REQUEST})

   axios.delete(`http://localhost:8080/products/${id}`).then((res)=>{
        console.log(res.data)
        dispatch({type: DELETE_PROD_SUCCESS, payload : id})
    })
    // console.log(id);
}


/*

{
      "id": 1,
      "title": "OnePlus Nord CE2 Lite 5G (6GB RAM, 128GB, Blue Tide)",
      "price": 18000,
      "category": "mobiles",
      "brand": "OnePlus",
      "rating": 5,
      "image": "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662443638/Croma%20Assets/Communication/Mobiles/Images/251802_on6al4.png/mxw_2048,f_auto",
      "description": "Loaded with premium features, the OnePlus Nord CE2 Lite 5G allows you to multitask or run heavy files without worrying about the operation speed."
    },

    {

      "id": 2,
      "title": "Nikon Z 50 21.51 MP Mirrorless Camera with Z DX 16-50 mm Single Kit",
      "price": 75499,
      "category": "cameras",
      "brand": "Nikon",
      "rating": 4,
      "image": "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1682681590/Croma%20Assets/Imaging/Camera%20and%20Camcorders/Images/224440_2_cldcy9.png/mxw_2048,f_auto",
      "description": "The Nikon Z 50 Mirrorless Camera with Single Kit (Z DX 16-50 mm) is a compact, lightweight, and powerful mirrorless camera. It is coming with the Z DX 16-50 mm f/3.5-6.3 VR lens kit."
    },
    {
      "id": 3,
      "title": "GoPro Hero9 5K and 20MP 30 FPS Waterproof Action Camera with Bluetooth Connectivity (Black)",
      "price": 37490,
      "category": "cameras",
      "brand": "Bolt",
      "rating": 4.5,
      "image": "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1670425883/Croma%20Assets/Imaging/Camera%20and%20Camcorders/Images/229091_0_te9hxy.png/mxw_2048,f_auto",
      "description": "Use the GoPro Hero 9 20MP Action Camera which offers you to shoot stunning 5K video that maintains serious detail even when zooming in. Also records in 4K, 2.7K, 1440 pixels and 1080 pixels."
    },



*/