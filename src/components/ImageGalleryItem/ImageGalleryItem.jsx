import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ smImage, tags, onClick }) => {
    return (

    );
};

ImageGalleryItem.propTypes = {
    smImage: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};