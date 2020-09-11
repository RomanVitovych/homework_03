import React, { Component } from 'react';
import styles from './Modal.module.css';

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }
    handleKeyDown = (e) => {
        window.addEventListener('keydown', e => {
            e.code === 'Escape' && this.props.toggleModal();           
        })
    }
    

    render() {
        return (
            <div className = {styles.Overlay} onClick = {this.props.toggleModal} >
            <div className = {styles.Modal} >
                <img src = {this.props.largeImage} alt = "???" />
            </div>
            </div>
        );
    }
}

export default Modal;








































