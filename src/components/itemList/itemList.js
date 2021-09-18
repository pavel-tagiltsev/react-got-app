import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';

const Wrapper = styled.ul`
    li {
        cursor: pointer;
    }
`;

export default class ItemList extends Component {

    render() {
        return (
            <Wrapper>
                <ListGroup>
                    <ListGroupItem>
                        John Snow
                    </ListGroupItem>
                    <ListGroupItem>
                        Brandon Stark
                    </ListGroupItem>
                    <ListGroupItem>
                        Geremy
                    </ListGroupItem>
                </ListGroup>
            </Wrapper>
        );
    }
}