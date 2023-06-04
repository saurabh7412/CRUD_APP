import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";

const SideBar = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  let initCategory = searchParam.getAll("category");

  let initBrand = searchParam.getAll("brand");

  let initOrder = searchParam.get("orderBy")

  const [category, setCategory] = useState(initCategory || []);
  const [brand, setBrand] = useState(initBrand || []);
  const [orderBy, setOrderBy] = useState(initOrder || '');

  const [search, setSearch] = useState('');


  useEffect(() => {
    let params = {
      category,
      brand,
    };
    if(orderBy) params.orderBy = orderBy;
    if(search) params.q = search;

    setSearchParam(params);
  }, [category, brand, orderBy,search]);

  const handleCategory = (e) => {
    const { value } = e.target;
    // console.log(value);
    let newCat = [...category];

    if (newCat.includes(value)) {
      newCat = newCat.filter((el) => el !== value);
    } else {
      newCat.push(value);
    }

    setCategory(newCat);
  };

  const handleBrand = (e) => {
    const { value } = e.target;
    // console.log(value);
    let newBrand = [...brand];

    if (newBrand.includes(value)) {
      newBrand = newBrand.filter((el) => el !== value);
    } else {
      newBrand.push(value);
    }

    setBrand(newBrand);
  };

  const handleSort = (e)=>{
        const {value} = e.target;
        // console.log(value);
        setOrderBy(value);
  }


  return (
    <DIV>

      <h3>Search Products</h3>
      <div className="searchbar">
        <input type="text" placeholder="Search ..." size={10} onChange={(e)=>setSearch(e.target.value)} value={search}/>
      </div>

      <h3>Filter By Category</h3>
      <div>
        <input type="checkbox" value={"mobiles"} checked={category.includes("mobiles")}  onChange={handleCategory} />
        <label>Mobiles</label>
      </div>

      <div>
        <input type="checkbox" value={"cameras"}  checked={category.includes("cameras")} onChange={handleCategory} />
        <label>Cameras</label>
      </div>

      <div>
        <input type="checkbox" value={"consoles"} checked={category.includes("consoles")}  onChange={handleCategory} />
        <label>Consoles</label>
      </div>

      <h3>Filter By Brand</h3>
      <div>
        <input type="checkbox" value={"Boat"} checked={brand.includes("Boat")} onChange={handleBrand} />
        <label>Boat</label>
      </div>

      <div>
        <input type="checkbox" value={"MadCatz"} checked={brand.includes("MadCatz")} onChange={handleBrand} />
        <label>Mad-Catz</label>
      </div>

      <div>
        <input type="checkbox" value={"Kodak"} checked={brand.includes("Kodak")} onChange={handleBrand} />
        <label>Kodak</label>
      </div>

      <h3>Sort By Price</h3>

      <div>
        <input type="radio" value={'asc'} name="sortby" onChange={handleSort} defaultChecked={orderBy === "asc"}/>
        <label>Ascending</label>
      </div>

      <div>
        <input type="radio" value={'desc'} name="sortby" onChange={handleSort} defaultChecked={orderBy === "desc"}/>
        <label>Descending</label>
      </div>
    </DIV>
  );
};

export default SideBar;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding-left: 10px;
  padding-right: 10px;
  row-gap: 20px;

  .searchbar input{
    border-radius : 8px;
  }
`;
