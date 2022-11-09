import PropTypes from 'prop-types';
import { Audio } from  'react-loader-spinner'

const Loader = () => {
    return (
        <Audio
            visible="true"
            color='#000'
            className = 'loader'
            height={50}
            width={50}
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
        />
    );
};

Loader.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
};

export default Loader;