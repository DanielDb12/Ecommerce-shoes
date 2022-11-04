import React from "react";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {useState, useEffect} from "react"
import {sliderItems} from "../data.jsx";



const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  
`;
const Arrow = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #fff7f7;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "5px"};
  right: ${(props) => props.direction === "right" && "15px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
 display:flex; 
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`  
  height:110%;

  flex: 1;
`;

const Image = styled.img`
  height: 97%;
  width:100%;

`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  position:absolute;
`;

;
const Button = styled.button`
  
  padding: 10px 10px;
  tex-align:center;
  text-decoration:none;
  font-size: 20px;
  cursor: pointer;
  border-radius:5px;
  position:absolute;
  border:none;
  width:10rem;
  top:20rem;
  left:50rem;
  z-index:2;


&:hover {


}

`;

const Slider = () => {
 


const [slideIndex,setSlideIndex] = useState(0);

  const handleClick = (direction) => {
  if (direction === "left") {

    setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3 );
    
  } else {

    setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);

  }


};


  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosNewIcon
          style={{ fontSize: "30px", position: "relative", left: "7px" }}
        />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item)=>(
         <Slide bg={item.bg} key={item.id}>
        <ImgContainer>
            <Image src={item.img} />
          </ImgContainer>
          <InfoContainer>
          </InfoContainer>
        </Slide>

        ))}

      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon
          style={{ fontSize: "30px", position: "relative", left: "10px" }}
        />
      </Arrow>
    </Container>
  );
};

export default Slider;
