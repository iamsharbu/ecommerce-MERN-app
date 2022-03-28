import React from "react";

import styled from 'styled-components';

import Announcement from '../../components/Announcement';
import Navbar from '../../components/Navbar';
import Products from '../../components/Products';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';
import { mobile } from "../../responsive";

const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({margin: '0 20px', display: 'flex', flexDirection: 'column'})}
`
const FilterText = styled.span`
    font-size: 20px;
    margin-right: 20px;
    ${mobile({margin: '0'})}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin: '10px 0'})}
`
const Option = styled.option`
    
`

const ProductList = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Title>Collections</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Red</Option>
                        <Option>Black</Option>
                        <Option>Grey</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>Small</Option>
                        <Option>Medium</Option>
                        <Option>Large</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option disabled selected>Sort by</Option>
                        <Option>Price low to high</Option>
                        <Option>Price high to low</Option>
                        <Option>Latest</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    );
}

export default ProductList;