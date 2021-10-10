import React from 'react';
import {withRouter} from 'react-router-dom';
import Page from './page';
import ItemList from '../itemList';
import {Col, Row} from 'reactstrap';
import ErrorMessage from '../errorMessage';

class BookPage extends Page {
    listRequest = this.gotService.getAllBooks;

    state = {
        error: false
    }

    render() {
        const {error} = this.state.error;
        const {history} = this.props;
        const {listRequest} = this;

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
                    history.push(itemId)
                }}
                getData={listRequest}
                renderItem={({name}) => `${name}`}/>
        )
    }
}

export default withRouter(BookPage);