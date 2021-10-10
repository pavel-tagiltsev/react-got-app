import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ErrorMessage from '../errorMessage';

export default class homePage extends Component {

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        const {error} = this.state.error;

        if (error) {
            return (
                <Row>
                    <Col md='6'>
                        <ErrorMessage/>
                    </Col>
                </Row>
            )
        }

        return (
            <h1>Welcome to Game of Thrones DB</h1>
        )
    }
}