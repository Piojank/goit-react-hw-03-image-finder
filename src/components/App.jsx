import React, { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import Modal from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { fetchImages } from 'utils/PixabayAPI';
export default class App extends Component {

    state = {
        searchRequest: '',
        images: [],
        galleryPage: 1,
        error: null,
        isLoading: false,
        showModal: null,
    };

    componentDidUpdate(_, prevState) {
        const prevSearch = prevState.searchRequest;
        const currentSearch = this.state.searchRequest;
        const prevGalleryPage = prevState.galleryPage;
        const currentGalleryPage = this.state.galleryPage;

        if (
            prevSearch !== currentSearch ||
            prevGalleryPage !== currentGalleryPage
        ) {
            this.updateImages();
        };
    };

    updateImages() {
        const { searchRequest, galleryPage } = this.state;
        this.setState({ isLoading: true });
        setTimeout(() => {
        try {
            fetchImages(searchRequest, galleryPage).then(data => {
            if (!data.hits.length) {
                return toast.error(
                'There is no images found with that search request'
                );
            }
            const mappedImages = data.hits.map(
                ({ id, webformatURL, tags, largeImageURL }) => ({
                id,
                webformatURL,
                tags,
                largeImageURL,
                })
            );
            this.setState({
                images: [...this.state.images, ...mappedImages],
            });
            });
        } catch (error) {
            this.setState({ error });
        } finally {
            this.setState({ isLoading: false });
        }
        }, 1000);
    }

    handleSearchSubmit = searchRequest => {
        this.setState({
            searchRequest,
            images: [],
            galleryPage: 1,
        });
    };

    loadMore = () => {
        this.setState(prevState => ({
            galleryPage: prevState.galleryPage + 1,
        }));
    };

    showModalImage = id => {
        const image = this.state.images.find(image => image.id === id);
        this.setState({
            showModal: {
                largeImageURL: image.largeImageURL,
                tags: image.tags,
            },
        });
    };

    closeModalImage = () => {
        this.setState({ showModal: null });
    };

    render() {
        const { images, error, isLoading, showModal} = this.state;

        return (
            <>
                <Searchbar onSearch={this.handleSearchSubmit} />
                {error && toast.error(`Whoops, something went wrong: ${error.message}`)}
                {isLoading && <Loader color={'#3f51b5'} size={32} />}
                {images.length > 0 && (
                    <>
                        <ImageGallery images={images} handlePreview={this.showModalImage} />
                        <Button loadMore={this.loadMore}/>
                    </>
                )}
                {showModal && (
                    <Modal
                        urlImage={showModal.largeImageURL}
                        tags={showModal.tags}
                        closeModal={this.closeModalImage}
                    />
                )}
                <ToastContainer autoClose={4000} />
            </>
        );
    };
};
