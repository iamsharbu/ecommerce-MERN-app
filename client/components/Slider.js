import { ArrowLeftOutlined, ArrowRightAltOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";

import styled from 'styled-components';

import { sliderItems } from "../data";
import {mobile} from "../responsive"; 
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #f0f0f0;
    position: relative;
    overflow: hidden;
    ${mobile({display: 'none'})}
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    opacity: .5;
    z-index:1;
    display: ${props => props.hide === 'true' && 'none'};
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
    transition: all .5s ease;
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${props => props.background};
`
const ImgContainer = styled.div`
    flex: 2;
    height: 100%;
`
const Image = styled.img`
    height: 100%;
    margin: 0 auto;
    display: block;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
    font-weight: bold;
`
const Decription = styled.div`
    margin: 50px 0px;
    font-size: 20px;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {

    const [slideIndex,setSlideIndex] = useState(0);
    const handleArrowClick = (direction) => {
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : sliderItems.length-1);
        }
        else{
            setSlideIndex(slideIndex < sliderItems.length-1 ? slideIndex+1 : 0);
        }
    }

    return (
        <Container>
            <Arrow direction="left" hide={slideIndex===0 && "true"} onClick={() => handleArrowClick('left')}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>

                {sliderItems.map(slide => (
                    <Slide key={slide.id} background={slide.bg}>
                        <ImgContainer>
                            <Image src={slide.img}/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{slide.title}</Title>
                            <Decription>{slide.desc}</Decription>
                            <Button>Shop Now</Button>
                        </InfoContainer>
                    </Slide>
                ))}

            </Wrapper>
            <Arrow direction="right" hide={slideIndex===sliderItems.length-1 && "true"} onClick={() => handleArrowClick('right')}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    );
}

export default Slider;