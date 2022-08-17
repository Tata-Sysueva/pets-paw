import React from 'react';
import {AllPictures} from '../../types/types';

import styles from './ImageGallery.module.scss';

interface ImageGalleryProps {
  picture: AllPictures,
}

function ImageGallery({ picture }: ImageGalleryProps) {
  const { id, url } = picture;

  return (
    <div
      className={styles.imageContainer}
      key={id}
    >
      <img
        className={styles.image}
        src={url}
        alt='Dog'
      />
    </div>
  );
}

export default ImageGallery;
