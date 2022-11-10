
import { Component } from 'react';
import { NotificationContainer } from './components/Notification/Notification.jsx';
import Searchbar from './components/Searchbar/Searchbar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';

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