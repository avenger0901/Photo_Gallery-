import './App.css';
import images from './data.js';
import React, { Component } from 'react';
import Header from './Header.js';
import ImageList from './ImageList.js';
import ImageItem from './ImageItem.js';



export default class App extends Component {
  render() {

    return (
      <div>
        <Header/>
        <ImageList images={images}/>
    
        <ImageItem/>
      </div>
    );
  }
}

