import React, { Component } from "react";
import ImageItem from './ImageItem.js';



class ImageList extends Component {
    render() {
        const dataArray = this.props.images;
   
    
        return (
            <div>
                {dataArray.map((image,i) =>{
                    // console.log(i);
                    // console.log(image)
                    return      <ImageItem key={i} image={image.url}/>
                })
               
                }
            
            </div>
        );
    }
}
export default ImageList;