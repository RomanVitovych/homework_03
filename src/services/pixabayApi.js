import axios from 'axios';

const fetchImagesWithQuery = (searchQuery, page = 1) => {
    return axios
    .get (`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=18264543-7490084e315aee7ff9bbd9a89&image_type=photo&orientation=horizontal&per_page=12`)
    .then (response => response.data.hits)
};

export default {
    fetchImagesWithQuery
};