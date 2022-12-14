import styled from "styled-components";
import { Send } from "@material-ui/icons";

import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  background-color: #fcf5f5;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "60px" })};
`;

const Desc = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })};
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 40px;
  background-color: White;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })};
`;

const Input = styled.input`
  flex: 8;
  padding-left: 20px;
  border: none;
`;

const Button = styled.button`
   flex: 1;
   border: none;
   background-color: teal;
   color: white;
   cursor: pointer;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email"/>
        <Button>
            <Send/>
        </Button>
      </InputContainer>
    </Container>
)};

export default NewsLetter;