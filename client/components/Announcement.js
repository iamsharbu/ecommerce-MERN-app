import React from "react";

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    background-color: black;
    color: white;
    font-size: 14px;
`

const Announcement = () => {
    return (
        <Container>Grab 50% discount using the coupon code TCH50. Hurry up!</Container>
    );
}

export default Announcement;