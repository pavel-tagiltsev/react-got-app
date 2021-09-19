import React from "react";
import styled from "styled-components";
import img from './error.jpg';

const Image = styled.img`
    width: 100%;
`;

const Message = styled.span`
    display: block;
    padding-top: 10px;
    text-align: center;
    font-weight: bold;
`;

const ErrorMessage = () => {
    return (
        <>
            <Image src={img} alt="error"></Image>
            <Message>Something goes wrong</Message>
        </>
    )
}

export default ErrorMessage;