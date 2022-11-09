
import { Component } from 'react';
import { NotificationContainer } from './components/Notification';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

export default class App extends Component {
    state = {
        query: '',
    };

    handleQueryFromSearchbar = query => {
        this.setState({ query });
    };

    render() {
        const { query } = this.state;
        return (
        <>
            <Searchbar onSubmit={this.handleQueryFromSearchbar} />
            <ImageGallery query={query} />
            <NotificationContainer />
        </>
        );
    }
}