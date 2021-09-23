import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';
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

    state = {
        itemList: null,
    };

    componentDidMount() {
        const {getData} = this.props;

        getData().then((itemList) => {
                this.setState({itemList})
            })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);

            return (
                <ListGroupItem
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                        {label}
                </ListGroupItem>
            )
        })
    }

    render() {
        const {itemList} = this.state;

        if (!itemList) {
            return(
                <Wrapper>
                    <LoadingPlaceholder/>
                </Wrapper>
            )
        }

        const items = this.renderItems(itemList);

        return (
            <Wrapper className="rounded">
                <ListGroup>
                    {items}
                </ListGroup>
            </Wrapper>
        );
    }
}