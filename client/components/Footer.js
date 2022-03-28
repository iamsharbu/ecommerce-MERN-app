import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import React from "react";

import styled from 'styled-components';
import {mobile} from "../responsive"; 

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: 'column'})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: 'none'})}
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const Logo = styled.h1`

`
const Desc = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 100%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>LAMA.</Logo>
                <Desc>
                    There dadfwejk fkjwhsdcks cauchas cs csh ciash ckscscch sc schsk dhcks skdjhcskh dcs dcsoijcski dcsk cs odchsoid c.
                </Desc>
                <SocialContainer>
                    <SocialIcon color='#3B5999'>
                        <Facebook></Facebook>
                    </SocialIcon>
                    <SocialIcon color='#E4405F'>
                        <Instagram></Instagram>
                    </SocialIcon>
                    <SocialIcon color='#55ACEE'>
                        <Twitter></Twitter>
                    </SocialIcon>
                    <SocialIcon color='#E60023'>
                        <Pinterest></Pinterest>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>testing</ListItem>
                    <ListItem>testing</ListItem>
                    <ListItem>testing</ListItem>
                    <ListItem>testing</ListItem>
                    <ListItem>testing</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Conatct Us</Title>
                <ContactItem><Room style={{marginRight: '10px'}}/>622 Dixie Path, South Dakota</ContactItem>
                <ContactItem><Room style={{marginRight: '10px'}}/>Alabama</ContactItem>
                <ContactItem><Phone style={{marginRight: '10px'}}/>+1 423 43 53445</ContactItem>
                <ContactItem><MailOutline style={{marginRight: '10px'}}/>djkk@gmail.com</ContactItem>
                <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'></Payment>
            </Right>
        </Container>
    );
}

export default Footer;