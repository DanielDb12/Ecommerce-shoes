import React from "react";
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import CallIcon from '@mui/icons-material/Call';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Container = styled.div`
position:relative;
top:12rem;
display:flex;
background-color:black;

`;


const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
color:white;

`;
const Logo = styled.h1``;
const Desc = styled.div`
margin:20px 0px;
`;
const SocialContainer = styled.div`
display:flex;
`;
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${(props) => props.color};
display:flex;
align-items:centeR;
justify-conten:center;
margin-right:20px;

`;
const Center = styled.div`
flex:1;
padding:25px;
color:white;
position:relative;
left:2rem;
`;
const Title = styled.h3`
margin-bottom:25px;

`;
const List = styled.ul`
position:relative:
bottom:50rem;
padding:0;
display:flex;
flex-wrap:wrap;
list-style:none;
text-align:center;
`;

const ListItem = styled.li`
width:50%;
margin-bottom:10px;
`;


const Right = styled.div`
flex:1;
padding:10px;
color:white;
position:relative;
padding:1.2rem;

`;
const ContactItem = styled.div`
width:10rem;
margin-bottom:12px;
display:flex;
align-center;
position:relative;
left:5rem;
`;
const Payment = styled.img`
width:50%;
position:relative;
left:5rem;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>OpenShoes</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          placeat nesciunt necessitatibus rerum voluptate sequi quas fugiat
          voluptatum dolor, quis officia. Provident inventore quos magnam
          ducimus repellat hic mollitia quas?
        </Desc>

        <SocialContainer>
          <SocialIcon>

            <FacebookIcon />
          </SocialIcon>

          <SocialIcon>

            <InstagramIcon />
          </SocialIcon>

          <SocialIcon>

            <TwitterIcon />
          </SocialIcon>
 <SocialIcon>

            <PinterestIcon />
          </SocialIcon>


        </SocialContainer>
      </Left>

      <Center>
        <Title style={{textAlign:"center"}}> Links</Title>
        <List>
        <ListItem>Home</ListItem>
        <ListItem>Cart</ListItem>
        <ListItem>Sport</ListItem>
        <ListItem>Shoes</ListItem>
        <ListItem>Shirt</ListItem>
        <ListItem>Accessories</ListItem>
        <ListItem>MyAccount</ListItem>
        <ListItem>WishList</ListItem>
        <ListItem>Terms</ListItem>
        
        </List>


      </Center>
      <Right>
        <Title style={{textAlign:"left",width:"5rem", position:"relative",left:"5rem", top:"8px"}}>Contact</Title>
        <ContactItem>

        <HomeOutlinedIcon /> 650 Houston Texas

        </ContactItem>
        <ContactItem>

        <CallIcon/> +01-528-360-567

        </ContactItem>
        <ContactItem>
          <MailOutlineIcon /> OpenShoes@email.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
