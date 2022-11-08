import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";

import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ heigth: "50px" })};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px;
  ${mobile({ padding: "10px 0px" })};
`;

const Left = styled.div`
  display: flex;
  flex: 1;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })};
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ flex: 2, justifyContent: "center" })};
`;

const MenuItem = styled.div`
  font-size: 14px;
  margin-right: 25px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginRight: "10px" })};
`;

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search style={{color:"gray", fontSize:16}} />
          </SearchContainer>
        </Left>
        <Center><Logo>Lama</Logo></Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Badge badgeContent={4} color={"primary"} style={{marginRight:10}}>
            <ShoppingCartOutlined/>
          </Badge>
        </Right>
      </Wrapper>
    </Container>
)};

export default Home;