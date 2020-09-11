import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({images, largeImages, toggleModal}) => {
    return (
        <>
            {images.map(image => (
            <li 
            className = {styles.ImageGalleryItem}
            key = {image.id}
            onClick = {() => largeImages(image.largeImageURL)}>
                <img 
                src = {image.webformatURL} 
                alt = "???" 
                onClick = {toggleModal}
                className = {styles.ImageGalleryItemImage}
                 />
            </li>
            ))}
        </>
    );
};

export default ImageGalleryItem;