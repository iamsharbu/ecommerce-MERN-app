import React from "react";

import { products } from "../data";
import Product from "./Product";

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Products = () => {
    console.log(products)
    return (
        <Container>
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </Container>
    );
}

export default Products;