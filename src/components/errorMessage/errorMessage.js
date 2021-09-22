import React from "react";
import styled from "styled-components";
import img from './error.jpg';

const Wrapper = styled.div`
    border-radius: 0.25rem;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.7);
`;

const Image = styled.img`
    border-radius: 0.25rem;
    width: 100%;
`;

const Message = styled.span`
    display: block;
    padding-top: 20px;
    text-align: center;
    font-weight: bold;
`;

const ErrorMessage = () => {
    return (
        <Wrapper>
            <Image src={img} alt="error"></Image>
            <Message>An error has occurred. Try reloading the page.</Message>
        </Wrapper>
    )
}

export default ErrorMessage;