import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';
import GotService from '../services/gotService';
import LoadingPlaceholder from '../loadingPlaceholder/';
import ErrorMessage from '../errorMessage';

const Char = styled.div`
    border-radius: 0.25rem;
    min-height: 380px;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;

    li {
        background-color: rgba(255, 255, 255, 0);
    }
`;

const Title = styled.h4`
    margin-left: 20px;
    margin-bottom: 20px;
    text-align: center;

`;

const Name = styled.span`
    display: block;
    text-align: center;
    font-weight: bold;
`;

const Term = styled.span`
    font-weight: bold;
`;

export default class RandomChar extends Component {

    gotService = new GotService();
    state = {
        char: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 1500);
    }

    componentWillUnmount() {
       clearInterval(this.timerId);
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        });
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * 2100 + 1);
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {
        const {char, loading, error} = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const loadingPlaceholder = loading ? <LoadingPlaceholder/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        return (
            <Char>
                {errorMessage}
                {loadingPlaceholder}
                {content}
            </Char>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;

    return (
        <>
            <Title>Random Character: </Title>
            <Name>{name}</Name>
            <ListGroup className="list-group-flush">
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Gender </Term>
                    <span>{gender}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Born </Term>
                    <span>{born}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Died </Term>
                    <span>{died}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Culture </Term>
                    <span>{culture}</span>
                </ListGroupItem>
            </ListGroup>
        </>
    )
}
