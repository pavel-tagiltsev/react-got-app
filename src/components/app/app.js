import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import {CharacterPage, BookPage, HousePage} from '../pages';
import ErrorMessage from '../errorMessage';

import styled from 'styled-components';

const Toggle = styled.button`
    background: #b8955f;
    border-radius: 0.25rem;
    border: none;
    color: white;
    padding: 5px 10px 5px 10px;
    margin-top: 20px;
    margin-bottom: 40px;
    
    :hover {
        opacity: 0.8;
    }

    :active {
        opacity: 0.6;
    }
`;

const Placeholder = styled.div`
    min-height: 370px;
    margin-bottom: 50px;
`;

export default class App extends Component {

    state = {
        isRandomCharVisible: true,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
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

        if (this.state.error) {
            return <ErrorMessage/>
        }
        
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <CharacterPage/>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            <Toggle onClick={this.toggleRandomChar}>Random Character</Toggle>
                            {show}
                        </Col>
                    </Row>
                    <BookPage/>
                    <HousePage/>
                </Container>
            </>
        );
    }
};
