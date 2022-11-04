import styled from "styled-components";


const Container = styled.div`
flex:1;
padding: 2rem;
height:60%;
position:relative;
top:5rem;
`;



const Image = styled.img`
position: relative;
left:4rem;
width:60%;
max-height:100%;
object-fit:cover;

`;


const Info = styled.div`
position:relative;
button:5rem;
Right:16px;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`;

const Title = styled.div`
margin-top:1.5rem;
color:black;
font-weight:bold;
margin-bottom;20px;
font-size:1.2rem;

`

const Button = styled.button`
border:none;
border-radius:2rem;
padding:15px 25px;
background-color:#0A0A0A;
color:white;
cursor:pointer;
transition: all 0.2s ease-in;
&:hover {
background-color:#1b7ced;


}

`;



const CategoryItem = ({item}) => {
return (

  <Container>
    <Image src={item.img} />
    <Info>
      <Title>{item.title}</Title>
      <Button>SHOP NOW</Button>
    </Info>


  </Container>

)
}

export default CategoryItem;
