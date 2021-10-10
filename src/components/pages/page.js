import {Component} from 'react';

import GotService from '../services/gotService';

export default class Page extends Component {

    gotService = new GotService();

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }
}