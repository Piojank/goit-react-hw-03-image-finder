import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {

    state = {
        searchRequest: '',
    }

    render() {
        return (
            <>
                <Searchbar onSearch={this.handleSearchSubmit} />

                <ToastContainer autoClose={3000} />
            </>
        );
    };
};
