import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

import styled from 'styled-components';

const Toggle = styled.button`
    background: #b8955f;
    border-radius: 0.25rem;
    border: none;
    color: white;
    padding: 5px 10px 5px 10px;
    margin-bottom: 40px;
`;

const Placeholder = styled.div`
    min-height: 370px;
    margin-bottom: 40px;
`;

export default class App extends Component {

    state = {
        isRandomCharVisible: true
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                isRandomCharVisible: !state.isRandomCharVisible
            }
        });
    }

    render() {
        const {isRandomCharVisible} = this.state;

        const show = isRandomCharVisible ? <RandomChar/> : <Placeholder></Placeholder>;

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {show}
                            <Toggle onClick={this.toggleRandomChar}>Random Character</Toggle>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};
