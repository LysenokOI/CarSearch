import React from "react";

let ImageList = props => {
  console.log("Image list ");
  console.log(props.imagesL);
  let gotImages = props.imagesL.map(image => {
    return <img src={image.urls.regular} />;
  });
  return <div>{gotImages}</div>;
};

export default ImageList;
