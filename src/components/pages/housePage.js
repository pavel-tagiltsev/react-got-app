import React from 'react';
import Page from './page';
import RowBlock from '../rowBlock';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import {Col, Row} from 'reactstrap';
import ErrorMessage from '../errorMessage';

export default class HousePage extends Page {
    detailsRequest = this.gotService.getHouse;
    listRequest = this.gotService.getAllHouses;

    state = {
        selectedChar: null,
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
            placeholder={'house'}>
                <Field field="region" label="Region"/>
                <Field field="words" label="Words"/>
                <Field field="titles" label="Titles"/>
                <Field field="overlord" label="Overlord"/>
                <Field field="ancestralWeapons" label="Ancestral weapons"/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}