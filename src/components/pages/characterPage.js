import React from 'react';
import Page from './page';
import RowBlock from '../rowBlock';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import {Row, Col} from 'reactstrap';
import ErrorMessage from '../errorMessage';

export default class CharacterPage extends Page {
    detailsRequest = this.gotService.getCharacter;
    listRequest = this.gotService.getAllCharacters;

    state = {
        selectedItem: null,
        error: false
    }

    render() {
        const {error, selectedItem} = this.state;
        const {detailsRequest, listRequest, onItemSelected} = this;

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
                onItemSelected={onItemSelected}
                getData={listRequest}
                renderItem={({name}) => `${name}`}/>
        )

        const itemDetails = (
            <ItemDetails 
            itemId={selectedItem}
            getData={detailsRequest}
            placeholder={'character'}>
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