import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

let ImageList = props => {
  console.log("Image list ");
  console.log(props.imagesL);
  /* let gotImages = props.imagesL.map(image => {
    return (
      <img
        alt={image.alt_description}
        key={image.id}
        src={image.urls.regular}
      />
    ); //id уже есть внутри results
    
  });
  */
  //сократим image
  /*let gotImages = props.imagesL.map(({ alt_description, id, urls }) => {
    return <img alt={alt_description} key={id} src={urls.regular} />;*/
  // вставим ImageCard
  let gotImages = props.imagesL.map(imageN => {
    return <ImageCard key={imageN.id} image={imageN} />;
  });

  return (
    <div>
      <div className="image-list">{gotImages}</div>
    </div>
  );
};

export default ImageList;
