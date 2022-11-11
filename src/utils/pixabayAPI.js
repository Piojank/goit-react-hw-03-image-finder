import axios from 'axios';

const http = {
    get(url) {
        return axios.get(url);
    },
    post(url, body) {
        return axios.post(url, body);
    },
};

const settings = {
    BASE_URL: 'https://pixabay.com/api/?',
    API_KEY: 'key=29712287-5d117bcccbf45424d50c3eb4b',
    TYPE: '&image_type=photo',
    PER_PAGE: '&per_page=12',
};

const { BASE_URL, API_KEY, TYPE, PER_PAGE } = settings;

export const fetchImages = (name, galleryPage) => {
    return http.get(
        `${BASE_URL}${API_KEY}&q=${name}${TYPE}&orientation=horizontal&safesearch=true&page=${galleryPage}&${PER_PAGE}`
    );
};

