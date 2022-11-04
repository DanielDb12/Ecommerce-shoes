import React from "react";
import styled from "styled-components";
import {popularProducts} from "../data";
import Product from "./Product.jsx";




  const Container = styled.div`
position: relative;
top:10rem;
padding:25px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`

const Products = () => {

  return(
    <Container>
      {popularProducts.map((item)=>(

        <Product item={item} key={item.id} />



      ))}

    </Container>

  )


}


export default Products;

