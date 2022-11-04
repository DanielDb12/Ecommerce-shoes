import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center; ;
`;
const Lenguage = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  margin-left: 25px;
  border: 1px solid lightgray;
  padding: 5px;
  display: flex;
  align-items: center;
   
`;

const Input = styled.input`
  border: none;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  font-size: 20px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Lenguage>EN</Lenguage>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16, cursor:"pointer" }} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>SHOPLOGO</Logo>
        </Center>

        <Right>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <AddShoppingCartIcon />
            </Badge>
          </MenuItem>

          <MenuItem>Register</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
