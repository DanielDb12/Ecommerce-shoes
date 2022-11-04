import React from "react";
import styled from "styled-components";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

const Info = styled.div`
opacity:0;
height:18rem;
width:18rem;
margin:20px;
position:absolute;
display:flex;
background-color: rgba(0, 0, 0, 0.2);
align-items:center;
justify-content:center;
transition: all 0.5s ease;
cursor:pointer;
z-index:3;
`;


const Container = styled.div`
flex:1;
margin:10px;
min-width: 300px;
height:320px;
display:flex;
background-color: #242526;
border-radius:5%;
&:hover ${Info}{
opacity:1;

}
`
const Circle = styled.div`

`;


const Image = styled.img`
height:85%;
margin:1.6rem;
border-radius:5%;
z-index:2;
`;

const Icon = styled.div`
width:30px;
height:30px;
border-radius:50%;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
margin:10px;
transition:all 0.5s ease;




&:hover{
background-color: #e9f5f5;
transform: scale(1:1);

}
`;

const Product= ({item}) => {
return(
  <Container>
    <Circle />
    <Image src={item.img} />
 <Info>
   <Icon><LocalGroceryStoreOutlinedIcon /></Icon>
   <Icon><SearchIcon /></Icon>
   <Icon><FavoriteBorderIcon /></Icon>
  </Info>

    </Container>


)
}



export default Product;
