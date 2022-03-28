import React from "react";

import Product from "./Product";

import styled from 'styled-components';
import { mobile } from "../../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('https://assets.vogue.com/photos/5e67d807b765cc00083b1009/master/w_2438,h_1779,c_limit/VO0420_CoverStory_03.jpg');
    background-size: cover;
    background-position: 0 center;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: white;
    ${mobile({width: '75%'})}
`
const Title = styled.h1`
    font-size: 24px;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    backround-color: grey;
    cursor: pointer;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create an account</Title>
                <Form>
                    <Input placeholder="first name"></Input>
                    <Input placeholder="last name"></Input>
                    <Input placeholder="username"></Input>
                    <Input placeholder="email"></Input>
                    <Input placeholder="password"></Input>
                    <Input placeholder="confirm password"></Input>
                    <Agreement>dfejhvfbebffehf iueqhifu qf qeiuhf iqeuhf q fqhfq foqw </Agreement>
                    <Button>Create</Button>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Register;