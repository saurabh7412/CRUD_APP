import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { postProduct } from "../Redux/Products/action";

const initialState = {
  image: "",
  price: '',
  brand: "",
  name: "",
  category: "",
  gender: "",
};

export const Admin = () => {
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e)=>{
    const {value,name,type} = e.target;
    // console.log(value,name,type)
    const newProduct = {...product,
      [name] : type === "number" ? +value : value
    }

    setProduct(newProduct);
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    // console.log(product);
    dispatch(postProduct(product))
  }


  return (
    <div>
      <WRAPPER>
        <form>
          <input
            type="text"
            placeholder="Image"
            name="image"
            value={product.image}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="number"
            placeholder="Price"
            name="price"
            value={product.price}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="Brand"
            name="brand"
            value={product.brand}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={product.name}
            onChange={(e) => handleChange(e)}
          />

          <select
            name="category"
            value={product.category}
            onChange={(e) => handleChange(e)}
          >
            <option value="">Select Category</option>
            <option value="top-wear">Top Wear</option>
            <option value="bottom-wear">Bottom Wear</option>
            <option value="shoes">Shoes</option>
          </select>

          <select
            name="gender"
            value={product.gender}
            onChange={(e) => handleChange(e)}
          >
            <option value="">Select Gender</option>
            <option value="male">Men</option>
            <option value="female">Women</option>
            <option value="kids">Kids</option>
          </select>

          <button type="submit" onClick={handleSubmit}>Add Products</button>
        </form>
      </WRAPPER>
    </div>
  );
};

const WRAPPER = styled.div`
  width: 500px;
  margin: auto;
  border: 2px solid gray;
  border-radius: 30px;
  margin-top: 30px;
  form {
    margin: 40px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }

  input,
  select,
  button {
    height: 45px;
    font-size: 20px;
    border-radius: 10px;
  }
`;
