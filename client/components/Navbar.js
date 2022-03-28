import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";

import styled from 'styled-components';

import { mobile } from "../responsive";

const Container = styled.div`
    height: 70px;
    ${mobile({height: '50px'})}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: '5px 0'})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
    ${mobile({flex: 2})}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    ${mobile({paddingRight: '10px'})}
`

const Language = styled.span`
    font-size: 16px;
    cursor: pointer;
    ${mobile({display: 'none'})}
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    margin-left: 25px;
    padding: 5px;
    ${mobile({marginLeft: '10px'})}
`
const Input = styled.input`
    border: none;
    ${mobile({width: '50px'})}
`

const Logo = styled.h1`
    font-family: 'Anton', sans-serif;
    font-size: 36px;
    ${mobile({fontSize: '16px'})}
`

const MenuItem = styled.div`
    display: flex;
    font-size: 16px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: '10px', marginLeft: '5px'})}
    align-items: center;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <Search style={{color: "grey", fontSize: 16}}/>
                    </SearchContainer>
                </Left>
                    <Center>
                        <Logo>TIRUPOOR COTTON HOUSE</Logo>
                    </Center>
                <Right>
                    <MenuItem>Signup</MenuItem>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Navbar;