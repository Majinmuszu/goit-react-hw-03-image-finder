import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";
const ImageGallery = ({ items, openModal }) => {
  return (
    <>
      <ul className={s.ImageGallery} onClick={openModal}>
        {items.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem 
          id={id} 
          src={webformatURL} 
          bigImg={largeImageURL} />
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
