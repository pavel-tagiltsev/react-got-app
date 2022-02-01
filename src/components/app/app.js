import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import {CharacterPage, BookPage, HousePage, BooksItem, HomePage} from '../pages';
import ErrorMessage from '../errorMessage';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import NotFound from '../404';
import backgroundImg from './background.jpg';
import houses from './houses.jpg';

const AppWrapper = styled.div`
    background: #fff url(${props => props.yes ? backgroundImg : houses}) center center no-repeat;
    background-size: cover;
    min-height: 1200px;
`;

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
        const {isRandomCharVisible, error} = this.state;

        const show = isRandomCharVisible ? <RandomChar/> : <Placeholder></Placeholder>;

        if (error) {
            return <ErrorMessage/>
        }

        return (
            <Router>
                <AppWrapper yes>
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Switch>
                            <Route path='/' exact component={HomePage}/>
                            <Route path='/characters' component={CharacterPage}/>
                            <Route path='/houses' component={HousePage}/>
                            <Route path='/books' exact component={BookPage}/>
                            <Route path='/books/:id' render={
                                ({match}) => {
                                    const {id} = match.params;
                                    
                                    return <BooksItem bookId={id}/>
                                }
                            }/>
                            <Route path='*' component={NotFound}/>
                        </Switch>
                            <Row>
                                <Col lg={{size: 5, offset: 0}}>
                                    <Toggle onClick={this.toggleRandomChar}>Random Character</Toggle>
                                    {show}
                                </Col>
                            </Row>
                    </Container>
                </AppWrapper>
            </Router>
        );
    }
};
