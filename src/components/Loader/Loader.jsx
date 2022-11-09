import PropTypes from 'prop-types';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
    return (
        <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#4fa94d" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
        className='loader'
        />
    );
};

Loader.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
};

export default Loader;