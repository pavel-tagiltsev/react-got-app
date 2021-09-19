import React from "react";
import styled from "styled-components";
import { ListGroup, ListGroupItem } from "reactstrap";

const Title = styled.h4`
    margin-left: 20px;
    margin-bottom: 20px;
    text-align: left;
`;

const Term = styled.span`
    font-weight: bold;
`;

const Placeholder= styled.span`
    display: inline-block;
    width: 50%;
    height: 20px;

    animation-duration: 1.7s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: placeholderAnimate;
    background: #f6f7f8;
    background: linear-gradient(to right, #eee 2%, #ddd 18%, #eee 33%);
    background-size: 1300px;

    @keyframes placeholderAnimate {
        0%{ background-position: -650px 0; }
        100%{ background-position: 650px 0; }
    }
`;

const LoadingPlaceholder = () => {
    return (
    <>     
        <Title>Random Character: </Title>
        <ListGroup className="list-group-flush">
            <ListGroupItem className="d-flex justify-content-between">
                <Term>Gender </Term>
                <Placeholder></Placeholder>
            </ListGroupItem>
            <ListGroupItem className="d-flex justify-content-between">
                <Term>Born </Term>
                <Placeholder></Placeholder>
            </ListGroupItem>
            <ListGroupItem className="d-flex justify-content-between">
                <Term>Died</Term>
                <Placeholder></Placeholder>
            </ListGroupItem>
            <ListGroupItem className="d-flex justify-content-between">
                <Term>Culture </Term>
                <Placeholder></Placeholder>
            </ListGroupItem>
        </ListGroup>
    </>
    )
}

export default LoadingPlaceholder;