import React from "react";
import "./styles/ImageView.css";
const ImageView = (props) => {
    return (
    <img  className="imageView" src={props.url} alt="star"/>
           )
}
export default ImageView;
