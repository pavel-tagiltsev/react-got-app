import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import GotService from '../services/gotService';
import {withRouter} from 'react-router-dom';

class BookPage extends Component {

    gotService = new GotService();

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
            <ItemList 
                onItemSelected={(itemId) => {
                    this.props.history.push(itemId)
                }}
                getData={this.gotService.getAllBooks}
                renderItem={({name}) => `${name}`}/>
        )
    }
}

export default withRouter(BookPage);