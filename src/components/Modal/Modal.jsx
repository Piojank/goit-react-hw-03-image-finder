import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

export default class Modal extends Component {
    static propTypes = {
        closeModal: PropTypes.func.isRequired,
        urlImage: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    };

    handleKeyDown = element => {
        if (element.code === 'Escape') {
            this.props.closeModal();
        };
    };

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.closeModal();
        };
    };

    render() {
        const { urlImage, tags } = this.props;

        return (
            <div 
                className={s.Overlay}
                onClick={this.handleBackdropClick}
            >
                <div className={s.Modal}>
                    <img src={urlImage} alt={tags}/>
                </div>
            </div>
        );
    };
};