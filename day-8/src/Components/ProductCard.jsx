import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { deleteProduct, getProduct } from "../Redux/Products/action";

const ProductCard = ({
  id,
  brand,
  category,
  description,
  image,
  price,
  rating,
  title,
}) => {

  const isAuth = useSelector((store)=>store.authReducer.isAuth)

  const navigate = useNavigate();
  const dispatch= useDispatch();


  const handleDelete=(id)=>{
    if(!isAuth){
      navigate(`/login`)
    }
    else{
      dispatch(deleteProduct(id))
      // console.log(id,isAuth);
    }

  }
  return (
    <div
      style={{
        borderRadius: "15px",
        padding: "30px",
        boxShadow:
          "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
      }}
    >
      <img src={image} style={{ width: "60%" }} />
      <h3>{title}</h3>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <h4>Brand : {brand}</h4>
        <h4>Category : {category}</h4>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <p>Price : {price}</p>
        <p>Rating : {rating}</p>
      </div>
      <p>{description}</p>
      <button
        style={{
          borderRadius: "10px",
          padding: "10px",
          boxShadow:
            "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
            border:"none"
        }}
      >
        <Link
          to={`/edit/${id}`}
          style={{ textDecoration: "none", fontSize: "20px" }}
        >
          Edit
        </Link>
      </button>

      <button
        style={{
          borderRadius: "10px",
          padding: "10px",
          boxShadow:
            "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
            border:"none",
          marginLeft : "80px",
          textDecoration: "none",
           fontSize: "20px"
        }}
        onClick={()=>handleDelete(id)}
      >
          Delete
      </button>
    </div>
  );
};

export default ProductCard;
