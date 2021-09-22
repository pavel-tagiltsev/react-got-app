import React, {Component} from 'react';
import { ListGroupItem, ListGroup } from 'reactstrap';
import styled from 'styled-components';
import LoadingPlaceholder from '../loadingPlaceholder';
import GotService from '../services/gotService';
import ErrorMessage from '../errorMessage';

const Char = styled.div`
    min-height: 380px;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    background-color: rgba(255, 255, 255, 0.7);

    li {
        background-color: rgba(255, 255, 255, 0);
    }

    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`;

const Message = styled.span`
    color: #282e3c;
    text-align: center;
    font-size: 26px;
`;

const Term = styled.span`
    font-weight: bold;
`;

export default class CharDetails extends Component {

    gotService = new GotService();

    state = {
        char: null,
        loading: true,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    onCharDetailsLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    updateChar() {
        const {charId} = this.props;

        if (!charId) {
            return;
        }

        this.setState({
            loading: true
        })

        this.gotService.getCharacter(charId)
            .then(this.onCharDetailsLoaded)
            .catch(() => this.onError())
    }

    onError() {
        this.setState({
            char: null,
            error: true
        })
    }

    render() {
        const {char, loading, error} = this.state;

        const errorMessage = error && !char ? <Char className="rounded"><ErrorMessage/></Char> : null;
        const message = !char && !error ? <Message>Please select a character</Message> : null;
        const loadingPlaceholder = loading && char ? <Char className="rounded"><LoadingPlaceholder/></Char> : null;
        const content = !(loading || error) ? <Char className="rounded"><View char={char}/></Char> : null;
  
        return (
            <>
                {errorMessage}
                {message}
                {loadingPlaceholder}
                {content}
            </>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;

    return (
        <>
            <h4>{name}</h4>
            <ListGroup className="list-group-flush">
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Gender</Term>
                    <span>{gender}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Born</Term>
                    <span>{born}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Died</Term>
                    <span>{died}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Culture</Term>
                    <span>{culture}</span>
                </ListGroupItem>
            </ListGroup>
        </>
    )
}