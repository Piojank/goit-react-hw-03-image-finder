const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
const API_KEY = '29712287-5d117bcccbf45424d50c3eb4b';
const IMAGES_PER_PAGE = 12;

function fetchImages(query, page) {
    return fetch(`${BASE_URL}&key=${API_KEY}&q=${query}&page=${page}&per_page=${IMAGES_PER_PAGE}`)
        .then(response => {
            if (response.ok) return response.json();
            return Promise.reject(new Error(`No results found for: ${query}!`));
        })
        .then(({ hits }) => hits);
}

export { fetchImages };