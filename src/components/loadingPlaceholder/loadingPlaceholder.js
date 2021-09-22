import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    position:relative;
    width:336px;
    height:336px;
    margin:auto;
    transform:scale(0.6);
`;

const Circle = styled.div`
    position:absolute;
    background-color:rgba(184,149,95,0.99);
    height:60px;
    width:60px;
    border-radius:32px;
    animation-name:f_fadeG;
    animation-duration:1.2s;
    animation-iteration-count:infinite;
    animation-direction:normal;

    @keyframes f_fadeG{
        0%{
            background-color:rgb(255,255,255);
        }
    
        100%{
            background-color:rgba(184,149,95,0.97);
        }
    }
`;

const CircleA = styled(Circle)`
    left:0;
    top:137px;
    animation-delay:0.45s;
`;

const CircleB = styled(Circle)`
    left:39px;
    top:39px;
    animation-delay:0s;
`;

const CircleC = styled(Circle)`
    left:137px;
    top:0;
    animation-delay:0.15s;
`;

const CircleD = styled(Circle)`
    right:39px;
    top:39px;
    animation-delay:0.30s;
`;

const CircleF = styled(Circle)`
    right:0;
    top:137px;
    animation-delay:0.45s;
`;

const CircleG = styled(Circle)`
    right:39px;
    bottom:39px;
    animation-delay:0.60s;
`;

const CircleH = styled(Circle)`
    left:137px;
    bottom:0;
    animation-delay:0.75s;
`;

const CircleI = styled(Circle)`
    left:39px;
    bottom:39px;
    animation-delay:0.90s;
`;

const LoadingPlaceholder = () => {
    return (
        <Wrapper>
            <CircleA></CircleA>
            <CircleB></CircleB>
            <CircleC></CircleC>
            <CircleD></CircleD>
            <CircleF></CircleF>
            <CircleG></CircleG>
            <CircleH></CircleH>
            <CircleI></CircleI>
        </Wrapper>
    )
}

export default LoadingPlaceholder;