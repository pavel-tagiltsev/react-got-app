import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';
import GotService from '../services/gotService';
import LoadingPlaceholder from '../loadingPlaceholder/';

const Wrapper = styled.ul`
    background-color: rgba(255, 255, 255, 0.7);

    li {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0);

        :hover {
            background-color: rgba(255, 255, 255, 0.5);
        }

        :active {
            background-color: rgba(255, 255, 255, 0.8);
        }
    }
`;

export default class ItemList extends Component {

    gotService = new GotService();

    state = {
        charList: null,
    };

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({charList})
            })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {name, id} = item;

            return (
                <ListGroupItem
                    key={id}
                    onClick={() => this.props.onCharSelected(id)}>
                        {name}
                </ListGroupItem>
            )
        })
    }

    render() {
        const {charList} = this.state;

        if (!charList) {
            return(
                <Wrapper>
                    <LoadingPlaceholder/>
                </Wrapper>
            )
        }

        const items = this.renderItems(charList);

        return (
            <Wrapper className="rounded">
                <ListGroup>
                    {items}
                </ListGroup>
            </Wrapper>
        );
    }
}