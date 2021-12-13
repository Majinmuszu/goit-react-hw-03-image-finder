import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from './ImageGallery.module.css'
const ImageGallery = ({items}) => {
  return (
    <>
      <ul className={s.ImageGallery}>
          <ImageGalleryItem items={items}/>
      </ul>
    </>
  );
};

export default ImageGallery;
