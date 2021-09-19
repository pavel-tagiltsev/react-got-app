import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';
import GotService from '../services/gotService';
import LoadingPlaceholder from '../loadingPlaceholder/';
import ErrorMessage from '../errorMessage';

const Char = styled.div`
    min-height: 370px;
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`;

const Title = styled.h4`
    margin-left: 20px;
    margin-bottom: 20px;
    text-align: left;
`;

const Term = styled.span`
    font-weight: bold;
`;

export default class RandomChar extends Component {
    constructor() {
        super();
        this.updateChar();
    }
    
    gotService = new GotService();
    state = {
        char: {},
        loading: true,
        error: false
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

    updateChar() {
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
            <Char className="rounded">
                {errorMessage}
                {loadingPlaceholder}
                {content}
            </Char>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;

    const isDataAvailable = (data) => {
        return data ? data : 'No data available';
    }

    const genderData = isDataAvailable(gender);
    const bornData = isDataAvailable(born);
    const diedData = isDataAvailable(died);
    const cultureData = isDataAvailable(culture);

    return (
        <>
            <Title>Random Character: {name}</Title>
            <ListGroup className="list-group-flush">
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Gender </Term>
                    <span>{genderData}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Born </Term>
                    <span>{bornData}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Died </Term>
                    <span>{diedData}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Culture </Term>
                    <span>{cultureData}</span>
                </ListGroupItem>
            </ListGroup>
        </>
    )
}
