import React, { Component } from "react";


class ImageItem extends Component {
    render() {
        return (
            <div>
               
           <img src={this.props.image} alt="" />
            {/* {console.log(this.props.image.url)} */}
              
            </div>
        );
    }
}
export default ImageItem;