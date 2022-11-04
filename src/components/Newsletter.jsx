import React from "react";
import styled from "styled-components";
import SendIcon from '@mui/icons-material/Send';


const Container = styled.div`
height: 60vh
background-color: black;
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;
margin-top:20rem;

`;
const Title = styled.div`
font-size:5rem;
margin-bottom:1rem;
`;
const Desc = styled.div`
font-size:1.5rem;
font-weight:bold;
`;
const InputContainer = styled.div`
margin-top:1.5rem;
`
const Input = styled.input`
position:relative;
bottom:3px;
flex:8;
height:2rem;
width:20rem;
border:1px solid black;
padding-left;20px;
font-size:1.5rem;

`;


const Button = styled.button`
width:3rem;
height:2.4rem;
background-color: black;
border:1px solid white;
border-radius:5px;
cursor:pointer;
`


const Newsletter = () => {
return(
  <Container>

    <Title>Newsletter</Title>
    <Desc>Get timely updates from your favorite products</Desc>
    <InputContainer>

      <Input placeholder="Your email" />

        <Button>
          <SendIcon style={{color:"#1b7ced"}} />

        </Button>
        
      

    </InputContainer>


  </Container>


)

}


export default Newsletter;
