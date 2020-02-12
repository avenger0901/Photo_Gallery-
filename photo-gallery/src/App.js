import './App.css';
import images from './data.js';
import React, { Component } from 'react';
import Header from './Header.js';
import ImageList from './ImageList.js';
import ImageItem from './ImageItem.js';



export default class App extends Component {
  state = { selected: null };
  render() {
    console.log(images);
    const filterImage = images
    .filter(image => {
      // console.log(image);
      // console.log(this.state.selected)
      // console.log(image.keyword)
      if (!this.state.selected) return true;

      return image.keyword === this.state.selected;
    })

    const handleChange = e => {
      this.setState({ selected: e.target.value });
    };
    
    return (
      <div>
        <select className="type-filter" onChange={handleChange} >
                    <option value="" defaultValue>
                        All Types
                    </option>
                    <option value="narwhal">Narwhal</option>
                    <option value="rhino">Rhino</option>
                    <option value="unicorn">Unicorn</option>
                    <option value="unilego">Unilego</option>
                    <option value="triceratops">Triceratops</option>
                    <option value="mouflon">Mouflon</option>
                    <option value="addax">Addax</option>
                    <option value="chameleon">Chamelon</option>
                    <option value="lizard">Lizard</option>
                    <option value="dragon">Dragon</option>


                </select>
                {/* <section>
                  {filterImage}
                </section> */}
            
        <Header/>
        <ImageList images={filterImage}/>
    
      </div>
    );
  }
}

