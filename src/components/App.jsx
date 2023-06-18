import React, { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

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

                <>
                    <Button loadMore={this.loadMore}/>
                </>

                <ToastContainer autoClose={3000} />
            </>
        );
    };
};
