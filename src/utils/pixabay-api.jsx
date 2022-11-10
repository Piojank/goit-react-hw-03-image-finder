import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
const API_KEY = '29712287-5d117bcccbf45424d50c3eb4b';

async function fetchPictures(query, page) {
    const url = `${BASE_URL}/?key=${API_KEY}&q=${query}&page=${page}&per_page=12&image_type=photo&orientation=horizontal&safesearch=true`;

    const { data } = await axios.get(url);

    return data;
}

export default fetchPictures;