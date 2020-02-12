import React, { Component } from "react";


class ImageItem extends Component {
    render() {
        return (
            <div>
               
           <img  className ="image" src={this.props.image} alt="" />
           <div>
           {this.props.title}
            </div> 
         
              
            </div>
        );
    }
}
export default ImageItem;