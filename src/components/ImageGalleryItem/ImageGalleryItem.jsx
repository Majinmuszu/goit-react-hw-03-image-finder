import React from "react";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ items }) => {
  return (
    <>
      {items.map(({ id, webformatURL, largeImageURL }) => (
        <li className={s.ImageGalleryItem} key={id}>
          <img
            className={s.ImageGalleryItemImage}
            src={webformatURL}
            alt="something goes here"
          />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;
