import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";

import { mobile } from "../responsive";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";


const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({ flexDirection: "column", padding: "10px" })};
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ heigth: "40vh" })};
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })};
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
  ${mobile({ width: "100%" })};
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  margin: 0px 5px;
  border-radius: 50%;
  background-color: ${props => props.color};
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  ${mobile({ width: "100%" })};
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Amount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin: 0px 5px;
  border: 1px solid teal;
  border-radius: 10px;
  font-weight: 700;
`;

const Button = styled.button`
  background-color: white;
  padding: 15px;
  border: 1px solid teal;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src='https://i.ibb.co/S6qMxwr/jean.jpg'/>
        </ImgContainer>
        <InfoContainer>
            <Title>Denim Jumpsuit</Title>
            <Desc>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Excepturi quis aliquam neque voluptate officiis cumque, minima, esse deserunt earum consequuntur 
              cupiditate similique animi maiores libero tempore nesciunt laboriosam ducimus facilis!
            </Desc>
            <Price>$ 20</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black"/>
                <FilterColor color="darkblue"/>
                <FilterColor color="gray"/>
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove/>
                <Amount>1</Amount>
                <Add/>
              </AmountContainer>
              <Button>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
)};

export default Product;