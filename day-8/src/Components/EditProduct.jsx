import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { patchProduct } from '../Redux/Products/action';

const EditProduct = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {isLoading, isError, Products} = useSelector((state)=> state.productReducer);

  const [data,setData] = useState({});

  // console.log(Products);

  const handleChange =(e)=>{
    const {type,name,value} = e.target;
    setData({...data,[name]: name === "price" || name === "rating" ?  +value : value})
  }

  const handleEdit = ()=>{
    console.log(data);
    dispatch(patchProduct(id,data)).then((res)=>{
      alert(`Product Updated Successfully !!`)
      navigate(`/`)
    })

  }

  useEffect(()=>{
    let obj = Products.find((el)=> el.id === +id)
    setData(obj)
  },[])

  // console.log(data);

  return (
    <div>
      <h1>Edit Product</h1>
      <div>
        <label>Image URL : </label>
        <input type='text' name='image' value={data.image} onChange={handleChange}/>
      </div> <br/>
      <div>
        <label>Title : </label>
        <input type='text' name='title' value={data.title} onChange={handleChange}/>
      </div> <br/>
      <div>
        <label>Brand : </label>
        <input type='text' name='brand' value={data.brand} onChange={handleChange}/>
      </div> <br/>
      <div>
        <label>Category : </label>
        <input type='text' name='category' value={data.category} onChange={handleChange}/>
      </div> <br/>
      <div>
        <label>Price : </label>
        <input type='text' name='price' value={data.price} onChange={handleChange}/>
      </div> <br/>
      <div>
        <label>Rating : </label>
        <input type='text' name='rating' value={data.rating} onChange={handleChange}/>
      </div> <br/>
      <div>
        <label>Description : </label>
        <input type='text' name='description' value={data.description} onChange={handleChange}/>
      </div> <br/>
      <button onClick={handleEdit}>Make Changes</button>
    </div>
  )
}

export default EditProduct