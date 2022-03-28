import React from "react";

import styled from 'styled-components';

import Announcement from '../../components/Announcement';
import Navbar from '../../components/Navbar';
import Product from '../../components/Product';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../../responsive";

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: '10px', flexDirection: 'column'})}
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: contain;
    ${mobile({height: '40vh'})}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({padding: '0 10px'})}
`
const Title = styled.h1`

`
const Description = styled.p`
    margin: 20px 0;
`
const Price = styled.span`
    font-weight: bold;
    font-size: 40px;
`
const FilterContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin: 30px 0px;
    ${mobile({width: '100%'})}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: bold;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option`
    
`
const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    ${mobile({width: '100%'})}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid lightgrey;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 1px solid lightgrey;
    background-color: white;
    cursor: pointer;
    &:hover{
        background-color: #f8f8f8;
    }
`


const ProductList = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    <Image src='https://i.pinimg.com/originals/15/c5/46/15c54628e9b48b701485a366f8d6f005.jpg'></Image>
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jump suit</Title>
                    <Description>theha  daos ahdqhd d dhoi doqij doq dl</Description>
                    <Price>$212</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"></FilterColor>
                            <FilterColor color="darkblue"></FilterColor>
                            <FilterColor color="grey"></FilterColor>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
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
                        <Button>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    );
}

export default ProductList;