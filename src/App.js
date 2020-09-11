import React, { Component } from 'react';
import styles from './App.module.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import ImageGalleryItem from './Components/ImageGalleryItem/ImageGalleryItem';
import Button from './Components/Button/Button';
import Loader from './Components/Loader/Loader';
import Modal from './Components/Modal/Modal';
import pixabayApi from './services/pixabayApi';


class App extends Component {
  state = {
    images: [],
    loading: false,
    showModal: false,
    largeImage: null,
    searchQuery: '',
    page: 1,
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    } 
  }
  
  fetchImages = () => {
    const {searchQuery, page} = this.state;
    this.setState({loading: true});
     pixabayApi
       .fetchImagesWithQuery(searchQuery, page)
       .then(images => this.setState(prevState => ({
         images: [...prevState.images, ...images],
         page: prevState.page + 1
       })))
       .catch(error => this.setState({error}))
       .finally(() => this.setState({loading: false}))
  }

  scrooling = () => {
   window.scrollTo({
     top: document.documentElement.scrollHeight,
     behavior: 'smooth',
   });
  }

  handleSearchFormSubmit = (query) => {
    this.setState({searchQuery: query, images: [], page: 1})
  };

  largeImages = (url) => {
    this.setState(prev => {
      return {
        largeImage: url,
      };
    });
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }))
  }


  render() {
    const {loading, images, largeImage, showModal} = this.state;
    return (
      <div className = {styles.App}>
        <Searchbar onSubmit = {this.handleSearchFormSubmit} />

        {loading ? 
        <Loader /> :
        <ImageGallery>
          <ImageGalleryItem 
            images = {images}
            largeImages = {this.largeImages}
            toggleModal = {this.toggleModal} />
        </ImageGallery>}
        
        {images.length > 0 && !loading && (
        <Button fetchImages = {this.fetchImages} />
        )}
        
        {showModal && (
          <Modal largeImage = {largeImage} toggleModal = {this.toggleModal} />
        )}
      </div>
    );
  }
}

export default App;




