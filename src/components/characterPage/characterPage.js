import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../services/gotService';
import RowBlock from '../rowBlock';

export default class CharacterPage extends Component {

    gotService = new GotService();

    state = {
        selectedChar: null,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
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

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={({name}) => `${name}`}/>
        )

        const itemDetails = (
            <ItemDetails itemId={this.state.selectedChar}>
                <Field field="gender" label="Gender"/>
                <Field field="born" label="Born"/>
                <Field field="died" label="Died"/>
                <Field field="culture" label="Culture"/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}