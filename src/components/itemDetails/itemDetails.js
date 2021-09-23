import React, {Component} from 'react';
import { ListGroupItem, ListGroup } from 'reactstrap';
import styled from 'styled-components';
import LoadingPlaceholder from '../loadingPlaceholder';
import GotService from '../services/gotService';
import ErrorMessage from '../errorMessage';

const Item = styled.div`
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
    display: block;
    color: #282e3c;
    text-align: center;
    font-size: 26px;
`;

const Term = styled.span`
    font-weight: bold;
`;

export default class ItemDetails extends Component {

    gotService = new GotService();

    state = {
        item: null,
        loading: true,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    onItemDetailsLoaded = (item) => {
        this.setState({
            item,
            loading: false
        })
    }

    updateItem() {
        const {itemId} = this.props;

        if (!itemId) {
            return;
        }

        this.setState({
            loading: true
        })

        this.gotService.getCharacter(itemId)
            .then(this.onItemDetailsLoaded)
            .catch(() => this.onError())
    }

    onError() {
        this.setState({
            item: null,
            error: true
        })
    }

    render() {
        const {item, loading, error} = this.state;

        const errorMessage = error && !item ? <Item className="rounded"><ErrorMessage/></Item> : null;
        const message = !item && !error ? <Message>Please select a character</Message> : null;
        const loadingPlaceholder = loading && item ? <Item className="rounded"><LoadingPlaceholder/></Item> : null;
        const content = !(loading || error) ? <Item className="rounded"><View item={item} children={this.props.children}/></Item> : null;
  
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

const View = ({item, children}) => {
    const {name} = item;

    return (
        <>
            <h4>{name}</h4>
            <ListGroup className="list-group-flush">
                {
                    React.Children.map(children, (child) => {
                        return React.cloneElement(child, {item})
                    })
                }
            </ListGroup>
        </>
    )
}

const Field = ({item, field, label}) => {
    return (
        <ListGroupItem className="d-flex justify-content-between">
            <Term>{label}</Term>
            <span>{item[field]}</span>
        </ListGroupItem>
    )
}

export {
    Field
}