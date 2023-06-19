import axios from 'axios';

const settings = {
    BASE_URL: 'https://pixabay.com/api/?',
    API_KEY: 'key=29712287-5d117bcccbf45424d50c3eb4b',
    TYPE: '&image_type=photo',
    PER_PAGE: '&per_page=12',
};

const { BASE_URL, API_KEY, TYPE, PER_PAGE } = settings;

export const fetchImages = async (name, galleryPage) => {
    const FETCH_URL = `${BASE_URL}${API_KEY}&q=${name}${TYPE}&orientation=horizontal&safesearch=true&page=${galleryPage}&${PER_PAGE}`;

    return axios.get(FETCH_URL)
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
};